const router = require("express").Router();
const mainRouter = require("./view/main.route");
const authRouter = require("./view/auth.route");
const apiAuthRouter = require("./api/apiAuth.route");
const adminApartmentsRouter = require("./view/adminApartments.route");
const ApartmentsRouter = require("./api/apiAdminApartments.route");
const ApartmentCard = require("../routes/view/apartment.route");

router.use("/auth", authRouter);
router.use("/api/auth", apiAuthRouter);
router.use("/adminApartments", adminApartmentsRouter);
router.use("/api/apartments", ApartmentsRouter);
router.use("/apartments", ApartmentCard);
router.use("/", mainRouter);

module.exports = router;
