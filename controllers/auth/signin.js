const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");
const { SECRET_KEY } = process.env;

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

module.exports = {
    signin: ctrlWrapper(signin),
};
