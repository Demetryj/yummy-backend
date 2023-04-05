const { ctrlWrapper } = require('../../helpers');

const { register } = require('./register');
const { signin } = require('./signin');
const { current } = require('./current');
const { logout } = require('./logout');
const { update } = require('./update');
const { getUserInfo } = require('./getUserInfo');
const sendSubscriptionEmail = require('./sendSubscriptionEmail');
const updateSubscription = require('./updateSubscription');
const verifyEmail = require('./verifyEmail');
const resendEmail = require('./resendEmail');

module.exports = {
  register,
  signin,
  current,
  logout,
  update,
  getUserInfo,
  sendSubscriptionEmail: ctrlWrapper(sendSubscriptionEmail),
  updateSubscription: ctrlWrapper(updateSubscription),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendEmail: ctrlWrapper(resendEmail),
};
