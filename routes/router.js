// const router = require("express").Router()
// const servicesRouterUser = require("./users");
// const servicesRouterAuth = require("./auth");


// const usersRouter = require("./users");

// router.use("/",servicesRouterAuth);
// router.use("/api/",servicesRouterAuth);
// router.use("/users",servicesRouterUser);
// router.use("/api/auth", servicesRouterAuth);




// module.exports = router;

const router = require("express").Router()
const servicesRouter = require("./users");
router.use("/",servicesRouter);

module.exports = router;