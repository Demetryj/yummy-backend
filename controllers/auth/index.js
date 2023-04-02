const { register } = require("./register");
const { signin } = require("./signin");
const { current } = require("./current");
const { logout } = require("./logout");
const { update } = require("./update");

module.exports = {
    register,
    signin,
    current,
    logout,
    update,
};
