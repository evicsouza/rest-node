const router = require("express").Router()
const userController = require("../controllers/user");

router.route("/users").post((req, res)=> userController.create(req,res));
router.route("/users/authenticate").get((req, res)=> userController.authenticate(req,res));
router.route("/users/all").get((req, res)=> userController.readAll(req,res));
router.route("/users/:id").get((req, res)=> userController.readOne(req,res));
router.route("/users/edit/:id").post((req, res)=> userController.update(req,res));
router.route("/users/:id?").delete((req, res) => {
    const userId = req.params.id || req.query.id;
    userController.delete(userId, res);
});
router.route("/users/:id").put((req, res) => {
    const userId = req.params.id || req.query.id;
    userController.update(userId, req, res);
});
//Tasks
router.route("/task").post((req, res)=> userController.createTask(req,res));
router.route("/task/all").get((req, res)=> userController.readAllTasks(req,res));
router.route("/task/:id").get((req, res)=> userController.readOneTask(req,res));
router.route("/task/edit/:id").post((req, res)=> userController.updateTask(req,res));
router.route("/task/:id").delete((req, res)=> userController.deleteTask(req,res));
// router.route("/task/:id").delete((req, res) => {
//     const taskId = req.params._id || req.query._id;
//     userController.deleteTask(taskId, res);
// });
router.route("/task/:id").put((req, res) => {
    const taskId = req.params._id || req.query._id;
    userController.updateTask(taskId, req, res);
});
module.exports = router;