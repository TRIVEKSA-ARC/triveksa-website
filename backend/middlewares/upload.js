import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB
  },
  fileFilter: (req, file, cb) => {
    // 1. Strict Mimetype Validation
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const isMimeValid = allowedMimeTypes.includes(file.mimetype);

    // 2. Strict Extension Validation
    const allowedExtensions = /jpeg|jpg|png|webp/;
    const extName = allowedExtensions.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (isMimeValid && extName) {
      return cb(null, true);
    }

    cb(new Error("Only images (JPG, JPEG, PNG, WEBP) are allowed!"), false);
  },
});

export default upload;