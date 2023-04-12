const current = async (req, res) => {
  const { avatarURL, name, _id } = req.user;

  res.json({
    _id,
    name,
    avatarURL,
  });
};

module.exports = current;
