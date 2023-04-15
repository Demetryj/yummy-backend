const { User } = require('../../models/user');

const update = async (req, res) => {
  const { name: newName } = req.body;
  const newAvatarUrl = req.file?.path;
  const { _id } = req.user;

  if (newName) {
    await User.findByIdAndUpdate(
      _id,
      {
        $set: { name: newName },
      },
      { new: true }
    );
  }

  if (newAvatarUrl) {
    await User.findByIdAndUpdate(
      _id,
      {
        $set: { avatarURL: newAvatarUrl },
      },
      { new: true }
    );
  }

  const user = await User.findById(_id);

  res.status(200).json({
    name: user.name,
    avatarURL: user.avatarURL,
  });
};

module.exports = update;
