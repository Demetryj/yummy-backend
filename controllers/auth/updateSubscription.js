const { User } = require('../../models/user');

const updateSubscription = async (req, res) => {
  const { subscribedToken } = req.params;
  const user = await User.findOne({ subscribedToken });

  await User.findByIdAndUpdate(
    user.id,
    { subscribed: true, subscribedToken: '' },
    { returnDocument: 'after', select: '-password -subscribedToken' }
  );

  const frontendLink = `https://demetryj.github.io/yummy-frontend/current/subscribe/${subscribedToken}?message=You%20successfully%20confirmed%20to%20SoYummy%20news%20subscription!&target=_self`;

  res.redirect(frontendLink).json({
    message: 'You successfully confirmed to SoYummy news subscription!',
  });
};

module.exports = updateSubscription;
