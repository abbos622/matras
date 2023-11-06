const model = require("../models/statistics");

exports.getData = async (req, res) => {
    const data = await model.getStatistics();
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

// exports.insertData = async (req, res) => {
//     const data = await model.insertStatistics(req.body);
//     if(data) {
//         res.status(201)
//             .json({ message: "Statistics successfully created!" });
//     } else {
//         res.status(400)
//             .json({ message: "Bad request, please try again!" });
//     }
// }

exports.updateData = async (req, res) => {
    const data = await model.updateStatistics(req.body);
    if(data) {
        res.status(200)
            .json({ message: "Statistics successfully updated!" });
    } else {
        res.status(400)
            .json({ message: "Bad request, please try again!" });
    };
};

// exports.deleteData = async (req, res) => {
//     const data = await model.deleteStatistics();
//     if(data) {
//         res.status(200)
//             .json({ message: "Statistics successfully deleted!" });
//     } else {
//         res.status(400)
//             .json({ message: "Bad request, please try again!" });
//     };
// };