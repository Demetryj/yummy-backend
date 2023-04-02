const { register } = require("./register");
const { signin } = require("./signin");
const { current } = require("./current");
const { logout } = require("./logout");
const { update } = require("./update");
const { getUserInfo } = require("./getUserInfo");

module.exports = {
  register,
  signin,
  current,
  logout,
  update,
  getUserInfo,
};
