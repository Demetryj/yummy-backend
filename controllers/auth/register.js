const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const { User } = require('../../models/user');
const { HttpError, sendEmail } = require('../../helpers');
const confirmationEmail = require('../../data/confirmationEmail');

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, 'Email is already in use');

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = uniqid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });

  const verifyLink = `${BASE_URL}/api/users/verify/${verificationToken}`;
  const verifyEmail = {
    to: email,
    subject: 'Verify Email Confirmation',
    html: confirmationEmail(verifyLink),
  };

  sendEmail(verifyEmail);

  res.status(201).json({
    name: newUser.name,
    avatarURL: newUser.avatarURL,
  });
};

module.exports = register;

