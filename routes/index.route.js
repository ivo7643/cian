const router = require("express").Router();
const mainRouter = require("./view/main.route");
const authRouter = require("./view/auth.route");
const apiAuthRouter = require("./api/apiAuth.route");

router.use("/", mainRouter);
router.use("/auth", authRouter);
router.use("/api/auth", apiAuthRouter);
module.exports = router;
