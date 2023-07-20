const router = require("express").Router();
const mainRouter = require("./view/main.route");
const adminApartmentsRouter = require('./view/adminApartments.route');
// const apiProductRouter = require('./api/apiProducts.route');

router.use("/", mainRouter);
router.use('/adminApartments', adminApartmentsRouter);

module.exports = router;
