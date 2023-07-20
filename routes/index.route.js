const router = require("express").Router();
const mainRouter = require("./view/main.route");

router.use("/", mainRouter);

module.exports = router;
