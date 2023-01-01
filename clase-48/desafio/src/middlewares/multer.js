const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/public/images");
    },
    filename: function (req, file, cb) {
        cb(null, `avatar-${Date.now()}.${file.mimetype.split("/")[1]}`);
    },
});

const upload = multer({ storage });

module.exports = upload;
