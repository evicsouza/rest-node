const main = require("../database/comm");
const { User: UserModel, User } = require("../models/User");
const {Task: TaskModel, Task} = require("../models/Task");

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                email: req.body.email,
                password : req.body.password,
            };
            const response = await UserModel.create(user);
            res.status(201).json({ response, msg: "Usuário cadastrada!" });
        } catch (error) {
            console.log(error);
        }
    },

    authenticate: async (req, res) => {
        try {
            const  email = req.body.email;
            const password  = req.body.password;
 
            const user = await User.findOne({
                email: email,
                password: password
            });
            
            if (!user) {
                return res.status(404).send({
                    message: 'Usuário ou senha inválidos'
                });
            }
           
            //const token = await authService.generateToken({
            //    email: user.email
            //});
            console.log(user.email + user.password);
            return res.status(200).send(
                {
                    //token: token,
                    data: {
                        email: user.email,
                        id: user._id,
                    }
                }
            );
        } catch (e) {
            return res.status(500).send({ message: 'Falha ao processar sua requisição (login)' });
        }
    },

    readAll: async (req, res) => {
        let results = await UserModel.find({});
        //.limit(50);

        res.send(results).status(200);
    },

    readOne: async (req, res) => {
        try {
            const id = req.params.id;
            let results = await UserModel.findOne({ _id: id });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const user = {
                email: req.body.email,
                password: req.body.password
            };
            let results = await UserModel.updateOne({ _id: id }, { $set: user });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            let results = await UserModel.findOne({ _id: id });

            if (!results) {
                console.log(results);
                return res.status(404).json({ message: "Usuario não encontrado." });
            }

            const deletedUser = await UserModel.findByIdAndDelete(results);
            res.status(200).json({ deletedTask, message: "Usuario removido com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },

    //Tasks
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
            let results = await TaskModel.updateOne({ _id: id }, { $set: task });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    },
    deleteTask: async (req, res) => {
        try {
            const id = req.params.id;
            let results = await TaskModel.findOne({ _id: id });

            if (!results) {
                console.log(results);
                return res.status(404).json({ message: "Task não encontrado." });
            }

            const deletedTask = await TaskModel.findByIdAndDelete(results);
            res.status(200).json({ deletedTask, message: "Task removido com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Falha ao processar sua requisição." });
        }
    },

};



module.exports = userController;