// // const router = require("express").Router()
// // const controller = require("../controllers/controller");

// // router.route("/users").post((req, res) => controller.create(req,res));
// // router.route("/users").get((req, res) => controller.readAll(req,res));

// // module.exports = router;

// const router = require("express").Router();
// // const { authJwt } = require("../middlewares");
// const controller = require("../controllers/user");


// router.route("/users").post((req, res)=> controller.authenticate(req,res));
// router.route("/users/all").get((req, res)=> controller.readAll(req,res));
// router.route("/users/:id").get((req, res)=> controller.readOne(req,res));
// router.route("/users/edit/:id").post((req, res)=> controller.update(req,res));
// router.route("/users/delete/:id").post((req, res)=> controller.delete(req,res));


//   // app.post("/users/authenticate", controller.authenticate);
//   // app.get("/users/all", controller.readAll);

//   // app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

//   // app.get(
//   //   "/api/test/mod",
//   //   [authJwt.verifyToken, authJwt.isModerator],
//   //   controller.moderatorBoard
//   // );

//   // app.get(
//   //   "/api/test/admin",
//   //   [authJwt.verifyToken, authJwt.isAdmin],
//   //   controller.adminBoard
//   // );

// module.exports = router;

const router = require("express").Router()
const userController = require("../controllers/user");

router.route("/users").post((req, res)=> userController.create(req,res));
router.route("/users/authenticate").post((req, res)=> userController.authenticate(req,res));
router.route("/users/all").get((req, res)=> userController.readAll(req,res));
router.route("/users/:id").get((req, res)=> userController.readOne(req,res));
router.route("/users/edit/:id").post((req, res)=> userController.update(req,res));
router.route("/users/delete/:id").post((req, res)=> userController.delete(req,res));

module.exports = router;