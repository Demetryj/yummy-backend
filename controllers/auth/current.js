const { ctrlWrapper } = require("../../helpers");

const current = async (req, res) => {
    const { avatarURL, name } = req.user;

    res.json({
        avatarURL,
        name,
    });
};

module.exports = {
    current: ctrlWrapper(current),
};
