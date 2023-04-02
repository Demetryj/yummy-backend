const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { Recipe } = require("../models/recipe");
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

const getUserInfo = async (req, res) => {
  const { userId } = req.params;
  const result = await User.findById(userId, "-password -token -_id");

  if (!result) {
    throw HttpError(404, "Not found");
  }
  let favoritesRecipes = await Recipe.find(
    { favorites: { $eq: userId } },
    "-_id -likes -favorites"
  );
  favoritesRecipes = !favoritesRecipes ? [] : favoritesRecipes;
  const timeWithUs = Math.floor(
    (Date.now() - Date.parse(result.createdAt)) / (24 * 60 * 60 * 1000)
  ).toString();
  res.json({ ...result._doc, timeWithUs, favoritesRecipes });
};

module.exports = {
  register: ctrlWrapper(register),
  signin: ctrlWrapper(signin),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  update: ctrlWrapper(update),
  getUserInfo: ctrlWrapper(getUserInfo),
};
