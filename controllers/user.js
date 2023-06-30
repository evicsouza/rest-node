// const main = require("../database/comm");
// const { User: UserModel, User } = require("../models/User");

// const userController = {
//     create: async (req, res) => {
//         try {
//             const user = {
//                 name: req.body.name,
//             };
//             const response = await UserModel.create(user);
//             res.status(201).json({ response, msg: "Usuário cadastrado!" });
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     readAll: async (req, res) => {
//         let results = await UserModel.find({});
//         //.limit(50);

//         res.send(results).status(200);
//     },

//     readOne: async (req, res) => {
//         try {
//             const id = req.params.id;
//             let results = await UserModel.findOne({ _id: id });
//             res.send(results).status(200);
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     update: async (req, res) => {
//         try {
//             const id = req.params.id;
//             const user = {
//                 name: req.body.name,
//             };
//             let results = await UserModel.updateOne({ _id: id }, { $set: user });
//             res.send(results).status(200);
//         } catch (error) {
//             console.log(error);
//         }
//     },
//     delete: async (req, res) => {
//         try {
//             const id = req.params.id;
//             let results = await UserModel.deleteOne({ _id: id });
//             res.send(results).status(200);
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     authenticate: async (request, response) => {
//         try {
//             const { email, password } = request.body
//             const user = await User.findOne({
//                 email: email,
//                 password: password
//             })
//             if (!user) {
//                 return response.status(404).send({
//                     message: 'Usuário ou senha inválidos'
//                 });
//             }

//             const token = await authService.generateToken({
//                 email: user.email,
//                 password: user.password,
//             });

//             return response.status(200).send(
//                 {
//                     token: token,
//                     data: {
//                         email: user.email,
//                         id: user._id,
//                     }
//                 }
//             );
//         } catch (e) {
//             return response.status(500).send({ message: 'Falha ao processar sua requisição (login)' });
//         }
//     }
// };




// module.exports = userController;

const main = require("../database/comm");
const { User: UserModel, User } = require("../models/user");
const {authService} = require("../service/auth-service");

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                email: req.body.email,
                password: req.body.password
            };
            const response = await UserModel.create(user);
            res.status(201).json({ response, msg: "Usuário cadastrado!" });
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
            let results = await UserModel.deleteOne({ _id: id });
            res.send(results).status(200);
        } catch (error) {
            console.log(error);
        }
    }
};



module.exports = userController;