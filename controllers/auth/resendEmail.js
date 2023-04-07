const confirmationEmail = require('../../data/confirmationEmail');
const { HttpError, sendEmail } = require('../../helpers');
const { User } = require('../../models');

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'User with such email was not found');
  if (user.verify) throw HttpError(400, 'Verification has already been passed');

  const verifyLink = `${BASE_URL}/api/users/verify/${user.verificationToken}`;
  const resentEmail = {
    to: email,
    subject: 'Re-send Verification Email Confirmation',
    html: confirmationEmail(verifyLink),
  };

  sendEmail(resentEmail);

  res.json({
    message: 'You successfully verified your email!',
  });
};

module.exports = resendEmail;
