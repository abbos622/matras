const model = require("../models/address");
const fs = require("fs");
const path = require("path");

exports.getData = async (req, res) => {
    try {
        const data = await model.getAddress();
        if(data) {
            res.status(200) 
            .send(data);
        } else {
            res.status(401)
            .json({ message: "There is an error, please try again!" });
        };
    } catch(err) {
        console.log(err);
        throw err;
    };
};

exports.insertData = async (req, res) => {
    try {
        let files = [];
        req.files.forEach(element => files.push(element.filename));
        files = JSON.stringify(files);
        
        if(req.body.isActive == "true") {
            req.body.isActive = '1'
            const data = await model.insertAddress(req.body, files);
            if(data) {
                res.status(201)
                .json({ message: "Successfully added!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "There is an error, please try again!" });
            };
        } else if(req.body.isActive == "false") {
            req.body.isActive = '0'
            const data = await model.insertAddress(req.body, files);
            if(data) {
                res.status(201)
                .json({ message: "Successfully added!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "There is an error, please try again!" });
            };
        };
    } catch(err) {
        console.log(err);
        throw err
    };
};

exports.updateData = async (req, res) => {
    try {
        let images = await model.selectImages(req.params.id);
        images = JSON.parse(images.images);
        
        
        let files = [];
        req.files.forEach(element => files.push(element.filename));
        files = JSON.stringify(files);
        
        if(req.body.isActive == "true") {
            req.body.isActive = '1';
            const data = await model.updateAddress(req.params.id, req.body, files);
            if(data) {
                for(let image of images) {
                    fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "address", image));
                };
                
                res.status(200)
                .json({ message: "Successfully updated!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "There is an error, please try again!" });
            };
        } else if(req.body.isActive == "false") {
            req.body.isActive = '0';
            const data = await model.updateAddress(req.params.id, req.body, files);
            
            if(data) {
                for(let image of images) {
                    fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "address", image));
                };
                
                res.status(200)
                .json({ message: "Successfully updated!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "There is an error, please try again!" });
            };
        };
    } catch(err) {
        console.log(err);
        throw err
    };
};

exports.deleteData = async (req, res) => {
    try {
        const data = await model.deleteAddress(req.params.id);
        let images = await model.selectImages(data.id);
        images = JSON.parse(images.images);
        
        if(data) {
            for(let image of images) {
                fs.unlinkSync(path.join(process.cwd(), "src", "uploads", "address", image));
            };
            
            res.status(200) 
            .json({ message: "Successfully deleted!", id: data.id });
        } else {
            res.status(400) 
            .json({ message: "There is an error, please try again!" });
        };
    } catch(err) {
        console.log(err);
        throw err
    };
};