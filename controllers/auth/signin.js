const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const { SECRET_KEY } = process.env;

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const errorMsg = 'Email or password is invalid';

  if (!user) {
    throw HttpError(401, errorMsg);
  }

  if (user.verify === false) throw HttpError(401, 'Email is not verified');

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, errorMsg);
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    id: user._id,
    name: user.name,
    avatrUrl: user.avatarURL,
  });
};

module.exports = signin;
