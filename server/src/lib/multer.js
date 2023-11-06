const multer = require("multer");
const path = require("path");

const fileUpload = (folderName) => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, path.join(process.cwd(), "src", "uploads", folderName));
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname.split(" ").join("_"));
        }
    })
    return multer({ 
        storage,
        fileFilter: function(req, file, cb) {
            const fileTypes = /svg|jfif|jpeg|jpg|png|mkv|flv|ogv|mov|mpg|mpv|wmv/;
            const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
            const mimeType = fileTypes.test(file.mimetype);
            if(extName && mimeType) {
                cb(null, true);
            } else {
                cb("Error: Images or vidoes only!");
            }
        }
    });
};

module.exports = fileUpload;






