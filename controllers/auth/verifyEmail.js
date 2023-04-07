const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const { BASE_URL } = process.env;

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    res.redirect(
      `${BASE_URL}/yummy-frontend/current/subscribe/${verificationToken}?message=You%already%20verified%20your%20email!&target=_self`
    );
    throw HttpError(404, 'User not found');
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  const frontendLink = `${BASE_URL}/yummy-frontend/current/subscribe/${verificationToken}?message=You%20successfully%20verified%20your%20email!&target=_self`;

  res.redirect(frontendLink).json({
    message: 'You successfully verified your email!',
  });
};

module.exports = verifyEmail;
