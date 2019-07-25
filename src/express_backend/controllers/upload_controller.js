const { copyFileToGCS, getPublicUrl } = require("../services/upload_handler_service")
const fs = require("fs")

async function upload(req, res) {
  const { path, filename } = req.file;
  const newPath = path.replace(/ /g, "_");
  const newFilename = filename.replace(/ /g, "_");
  const bucketName = process.env.GCLOUD_STORAGE_BUCKET;

  await copyFileToGCS(newPath, newFilename, bucketName, {});
  try {
    fs.unlinkSync(newPath)
  } catch(err) {
    console.log("file wasn't deleted")
    console.error(err)
  }
  // TODO: save the returned url to the database under the correct job field
  res.send(getPublicUrl(bucketName, newFilename))
}

module.exports = upload;