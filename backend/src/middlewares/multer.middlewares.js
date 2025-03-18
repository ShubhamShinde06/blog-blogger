import multer from 'multer'

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Generate a unique name for the file
    }
});

const upload = multer({storage: storage})
export default upload