function uploadMiddleware(req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
    next();
};

const multer = require('multer');
const d = new Date();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${d.getTime()}${file.originalname.replace(/ /g, "_")}`)
    }
  });

const upload = multer({ storage: storage, limits: { fileSize: 6291456 } });

module.exports = {
  uploadMiddleware,
  upload
};