const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { HttpError } = require("../helpers/");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const alloweFormats = ["jpg", "png", "jpeg"];

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "yummi-avatars",
        file: (err, req, file, cb) => {
            const splittedName = req.originalname.split(".");
            const ext = splittedName[splittedName.length - 1];

            if (!alloweFormats.includes(ext)) {
                throw HttpError(406, "File format is not supported");
            }
        },
        public_id: (req, file) => req.user._id + "_" + file.originalname,
        allowed_formats: alloweFormats,
        transformation: { width: 150, height: 150, crop: "fill" },
    },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
