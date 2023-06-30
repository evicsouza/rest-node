const router = require("express").Router()
const userController = require("../controllers/user");

router.route("/users").post((req, res)=> userController.create(req,res));
router.route("/users/authenticate").post((req, res)=> userController.authenticate(req,res));
router.route("/users/all").get((req, res)=> userController.readAll(req,res));
router.route("/users/:id").get((req, res)=> userController.readOne(req,res));
router.route("/users/edit/:id").post((req, res)=> userController.update(req,res));
router.route("/users/delete/:id").post((req, res)=> userController.delete(req,res));

module.exports = router;