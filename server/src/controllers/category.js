const model = require("../models/category");

exports.getData = async (req, res) => {
    try {
        const data = await model.getCategories();
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
        if(req.body.isActive) {
            const data = await model.insertCategory(req.body.category);
            if(data) {
                res.status(201)
                .json({ message: "Category successfully added!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "Bad request, please try again!" });
            };
        } else {
            const data = await model.insertCategory(req.body.category);
            await model.updateIsActive(data.id);
            if(data) {
                res.status(201)
                .json({ message: "Category successfully added!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "Bad request, please try again!" });
            };
        };
    } catch(err) {
        console.log(err);
        throw err;
    };
};

exports.updateData = async (req, res) => {
    try {
        if(!req.body.isActive) {
            const data = await model.updateCategory(req.params.id, req.body);
            await model.updateIsActive(data.id);
            if(data) {
                res.status(200)
                .json({ message: "Successfully updated!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "Error, please try again!" });
            };
        } else {
            const data = await model.updateCategory(req.params.id, req.body);
            await model.active(data.id);
            if(data) {
                res.status(200)
                .json({ message: "Successfully updated!", id: data.id });
            } else {
                res.status(400)
                .json({ message: "Error, please try again!" });
            };
        };
    } catch(err) {
        console.log(err);
        throw err;
    };
};

exports.deleteData = async (req, res) => {
    try {
        const data = await model.deleteCategory(req.params.id);
        if(data) {
            res.status(200)
            .json({ message: "Successfully deleted!", id: data.id });
        } else {
            res.status(400)
            .json({ message: "Error, please try again!" });
        };
    } catch(err) {
        console.log(err);
        throw err;
    };
};