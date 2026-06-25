
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(fileBuffer, fileName) {
  try {
    if (!fileBuffer) {
      throw new Error("No file provided for upload");
    }

    const result = await imagekit.upload({
      file: fileBuffer, // buffer or base64
      fileName: fileName,
    });

    return result; // contains url, fileId, etc.
  } catch (error) {
    console.error("IMAGEKIT UPLOAD ERROR:", error);
    throw error;
  }
}

module.exports = {
  uploadFile,
};