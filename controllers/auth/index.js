const { ctrlWrapper } = require('../../helpers');

const { register } = require('./register');
const { signin } = require('./signin');
const { current } = require('./current');
const { logout } = require('./logout');
const { update } = require('./update');
const sendSubscriptionEmail = require('./sendSubscriptionEmail');
const updateSubscription = require('./updateSubscription');

module.exports = {
  register,
  signin,
  current,
  logout,
  update,
  sendSubscriptionEmail: ctrlWrapper(sendSubscriptionEmail),
  updateSubscription: ctrlWrapper(updateSubscription),
};
