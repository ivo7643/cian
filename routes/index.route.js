const router = require("express").Router();
const mainRouter = require("./view/main.route");
const adminRouter = require("./api/apiAdminApartments.route");

router.use("/", mainRouter);
router.use("/api/adminApartments", adminRouter);

module.exports = router;
