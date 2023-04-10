const current = async (req, res) => {
  const { avatarURL, name, _id } = req.user;

  res.json({
    avatarURL,
    name,
    _id,
  });
};

module.exports = current;
