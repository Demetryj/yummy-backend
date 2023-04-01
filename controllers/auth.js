const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { HttpError, ctrlWrapper } = require("../helpers");
const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    name: newUser.name,
    avatarURL: newUser.avatarURL,
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const errorMsg = "Email or password invalid";

  if (!user) {
    throw HttpError(401, errorMsg);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, errorMsg);
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
  });
};

const current = async (req, res) => {
  const { avatarURL, name } = req.user;

  res.json({
    avatarURL,
    name,
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success",
  });
};

const update = async (req, res) => {
  const { name: newName } = req.body;
  const newAvatarUrl = req.file?.path;
  const { _id, name, avatarURL } = req.user;

  const updateName = !!newName ? newName : name;
  const updateAvatarURL = !!newAvatarUrl ? newAvatarUrl : avatarURL;

  await User.findByIdAndUpdate(_id, {
    name: updateName,
    avatarURL: updateAvatarURL,
  });

  res.json({
    name: updateName,
    avatarURL: updateAvatarURL,
  });
};

module.exports = {
  register: ctrlWrapper(register),
  signin: ctrlWrapper(signin),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  update: ctrlWrapper(update),
};
