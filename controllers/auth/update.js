const { User } = require("../../models/user");

const update = async (req, res) => {
  const { name: newName } = req.body;
  const newAvatarUrl = req.file?.path;
  const { _id, name, avatarURL } = req.user;

  const updateName = !newName ? newName : name;
  const updateAvatarURL = !newAvatarUrl ? newAvatarUrl : avatarURL;

  await User.findByIdAndUpdate(_id, {
    name: updateName,
    avatarURL: updateAvatarURL,
  });

  res.json({
    name: updateName,
    avatarURL: updateAvatarURL,
  });
};

module.exports = update;
