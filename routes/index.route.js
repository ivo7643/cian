const router = require("express").Router();
const mainRouter = require("./view/main.route");
const authRouter = require("./view/auth.route");
const apiAuthRouter = require("./api/apiAuth.route");
const adminApartmentsRouter = require('./view/adminApartments.route');

router.use("/", mainRouter);
router.use("/auth", authRouter);
router.use("/api/auth", apiAuthRouter);
router.use('/adminApartments', adminApartmentsRouter);

module.exports = router;
