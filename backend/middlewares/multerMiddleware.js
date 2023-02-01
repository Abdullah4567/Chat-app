const multer = require('multer');
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        // console.log("Fieldname : " + file.fieldname);
        // console.log("I am fileName");

        // `\`
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // To accept the file pass `true`, like so:
        // console.log("I am filtering");
        cb(null, true)
    }
    else {
        // To reject this file pass `false`, like so:
        cb(null, false)
    }
}
const uploadPicture = (req, res, next) => {
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 5 * 1024 * 1024   //5MB
        },
        fileFilter: fileFilter
    }).single('picture');
    upload(req, res, function (error) {
        console.log("I am in upload Method")
        if (!error) {
            return (next());
        }
        else {
            const err = new Error(error.message);
            console.log("ERrored: " + err.message)
            err.status = 400;
            throw err;
        }

    })

}
module.exports = uploadPicture