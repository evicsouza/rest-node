const main = require("../database/comm");
const {Task: TaskModel, Task} = require("../models/Task");
const {authService} = require("../service/auth-service");

const taskController = {
    createTask: async (req, res) => {
        try {
            const task = {
                descricao: req.body.descricao,
            };
            const response = await TaskModel.create(task);
            res.status(201).json({ response, msg: "Tarefa cadastrada!" });
        } catch (error) {
            console.log(error);
        }
    },

    readAllTasks: async (req, res) => {
        let results = await TaskModel.find({});
        res.send(results).status(200);
    },

    readOneTask: async (req, res) => {
        try {
            const id = req.params.id;
            let results = await TaskModel.findOne({ _id: id });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    },

    updateTask: async (req, res) => {
        try {
            const id = req.params.id;
            const task = {
                descricao: req.body.descricao,
            };
            let results = await TaskModel.updateOne({ _id: id }, { $set: user });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    },
    deleteTask: async (req, res) => {
        try {
            const id = req.params.id;
            let results = await TaskModel.deleteOne({ _id: id });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    }
};



module.exports = taskController;