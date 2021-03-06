const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const options = {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
};
console.log(process.env.CLOUDINARY_KEY);
cloudinary.config(options);
module.exports = cloudinary;