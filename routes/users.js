const router = require("express").Router()
const userController = require("../controllers/user");

router.route("/users").post((req, res)=> userController.create(req,res));
router.route("/users/authenticate").get((req, res)=> userController.authenticate(req,res));
router.route("/users/all").get((req, res)=> userController.readAll(req,res));
router.route("/users/:id").get((req, res)=> userController.readOne(req,res));
router.route("/users/edit/:id").post((req, res)=> userController.update(req,res));
router.route("/users/delete/:id").post((req, res)=> userController.delete(req,res));

//Tasks
router.route("/task").post((req, res)=> userController.createTask(req,res));
router.route("/task/all").get((req, res)=> userController.readAllTasks(req,res));
router.route("/task/:id").get((req, res)=> userController.readOneTask(req,res));
router.route("/task/edit/:id").post((req, res)=> userController.updateTask(req,res));
router.route("/task/delete/:id").post((req, res)=> userController.deleteTask(req,res));

module.exports = router;