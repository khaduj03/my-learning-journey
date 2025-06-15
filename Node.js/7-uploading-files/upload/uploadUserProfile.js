// upload/uploadUserProfile.js

const multer = require("multer");
const { mkdirp } = require("mkdirp"); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    mkdirp("./public/uploads")
      .then(() => {
        cb(null, "./public/uploads");
      })
      .catch((err) => cb(err));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
