const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    res.redirect(
      `https://demetryj.github.io/yummy-frontend/verify/${verificationToken}?message=You%20already%20verified%20your%20email!&target=_self`
    );
    throw HttpError(404, 'User not found');
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  const frontendLink = `https://demetryj.github.io/yummy-frontend/verify/${verificationToken}?message=You%20successfully%20verified%20your%20email!&target=_self`;

  res.redirect(frontendLink).json({
    message: 'You successfully verified your email!',
  });
};

module.exports = verifyEmail;
