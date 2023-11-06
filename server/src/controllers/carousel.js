const fileUpload = require("../lib/multer");
const model = require("../models/carousel");
const fs = require("fs");
const path = require("path");

exports.getData = async (req, res) => {
    try {
        const data = await model.getCarousel();
        if(data) {
            res.status(200)
            .send(data);
        } else {
            res.status(401)
            .json({ message: "There is an error, please try again!" });
        };
    } catch(err) {
        console.log(err);
        throw err
    };
};

exports.insertData = async (req, res) => {
    try {
        const { count } = await model.counts();
        if((+count + 1) > 4) {
            res.status(400)
            .json({ message: "No more than 4 images!" });
        } else {
            const data = await model.insertCarousel(req.body.title, req.file.filename);
            if(data) {
                res.status(201)
                .json({ message: "The carousel successfully created!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "Bad request, please try again!" });
            };
        };
    } catch(err) {
        console.log(err);
        throw err
    };
};

exports.updateData = async (req, res) => {
    try {
        const fileName = await model.selectImage(req.params.id);
        fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "carousel", fileName.image));
        
        const data = await model.updateCarousel(req.params.id, req.body.title, req.file.filename);
        if(data) {
            res.status(200)
            .json({ message: "The carousel successfully updated!", id: data.id });
        } else {
            res.status(400)
            .json({ message: "There is an error, please try again!" });
        };
    } catch(err) {
        console.log(err);
    };
};

exports.deleteData = async (req, res) => {
    try {
        const data = await model.deleteCarousel(req.params.id);
        if(data) {
            res.status(200)
            .json({ message: "The carousel successfully deleted!", id: data.id });
        } else {
            res.status(400)
            .json({ message: "Error, please try again!" });
        };
    } catch(err) {
        console.log(err);
        throw err
    };
};