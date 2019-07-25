const express = require("express");
const router = express.Router();
const { uploadMiddleware, upload } = require("./../middleware/upload_handler_middleware");
const uploadController = require("./../controllers/upload_controller");

router.post('/file', upload.single('file'), uploadMiddleware, uploadController);

module.exports = router;