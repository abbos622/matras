const model = require("../models/technology");

exports.getData = async (req, res) => {
    const data = await model.getTechnologies();
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(401)
            .json({ message: "There is an error, please try again!" })
    };
};

exports.insertData = async (req, res) => {
    if(req.body.isActive === true) {
        const data = await model.insertTechnology(req.body);
        if(data) {
            res.status(201)
                .json({ message: "Successfully added!", id: data.id })
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!" })
        };
    } else {
        const data = await model.insertTechnology(req.body);
        console.log(1);
        console.log(2);
        await model.isActive(data.id);
        if(data) {
            res.status(201)
                .json({ message: "Successfully added!", id: data.id })
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!" })
        };
    }
};

exports.updateData = async (req, res) => {
    if(req.body.isActive) {
        req.body.isActive = '1'
        const data = await model.updateTechnology(req.params.id, req.body);
        if(data) {
            res.status(200)
                .json({ message: "Successfully updated!", id: data.id })
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!", id: data.id })
        };
    } else {
        req.body.isActive = '0'
        const data = await model.updateTechnology(req.params.id, req.body);
        if(data) {
            res.status(200)
                .json({ message: "Successfully updated!", id: data.id })
        } else {
            res.status(400)
                .json({ message: "There is an error, please try again!", id: data.id })
        };
    }
};

exports.deleteData = async (req, res) => {
    const data = await model.deleteTechnology(req.params.id);
    if(data) {
        res.status(200) 
            .json({ message: "Successfully deleted", id: data.id })
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" })
    };
};