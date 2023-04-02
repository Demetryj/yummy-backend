const jwt = require('jsonwebtoken');

const { HttpError, sendEmail } = require('../../helpers');
const { User } = require('../../models/user');

const { SECRET_KEY, BASE_URL } = process.env;

const sendSubscriptionEmail = async (req, res) => {
  const { email } = req.body;
  const { _id } = req.user;
  const user = await User.findById(_id);

  if (user.subscribed) throw HttpError(409, 'You are already subscribed!');
  if (user.subscribedToken)
    throw HttpError(
      409,
      'An account is already subscribed with this email address'
    );

  const payload = { _id, email };
  const subscribedToken = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await User.findByIdAndUpdate(_id, { subscribedToken });

  const verifySubscription = {
    to: email,
    subject: 'Confirmation to SoYummy news subscription',
    html: `<a target="_blank" href="${BASE_URL}/api/users/current/subscribe/${subscribedToken}">Click to get more news about our product!</a>`,
  };

  sendEmail(verifySubscription);

  res.status(201).json({
    [user.name]: {
      email,
    },
  });
};

module.exports = sendSubscriptionEmail;
