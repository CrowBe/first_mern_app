const { Storage } = require('@google-cloud/storage');


const GOOGLE_CLOUD_PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID;
const GOOGLE_CLOUD_KEYFILE = process.env.GOOGLE_CLOUD_KEYFILE;

const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});

const getPublicUrl = (bucketName, fileName) => `https://storage.cloud.google.com/${bucketName}/${fileName}`;

const copyFileToGCS = (localFilePath, fileName, bucketName, options) => {
  options = options || {};
  const bucket = storage.bucket(bucketName);

  return bucket.upload(localFilePath, options)
    .then(() => {
        console.log("done")
    })
    .catch((err) => {
        console.log("didn't work")
        console.log(err)
    });
};

module.exports = { copyFileToGCS, getPublicUrl };