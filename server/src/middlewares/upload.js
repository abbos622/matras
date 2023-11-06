// const fileUpload = require("../lib/multer");

// module.exports = (req, res, next) => {
//     fileUpload(req, res, err => {
//         try{
//             if(err) {
//                 res.status(400)
//                     .json({ message: "Errror" })
//             } else {
//                 res.status(200)
//                     .json({ message: "OK" })
//             }
//         } catch(err) {
//             console.log(err);
//         } finally {
//             next()
//         }
//     })
// }
