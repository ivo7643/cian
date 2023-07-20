const router = require("express").Router();
const mainRouter = require("./view/main.route");
const authRouter = require("./view/auth.route");
const apiAuthRouter = require("./api/apiAuth.route");
const adminApartmentsRouter = require("./view/adminApartments.route");
const ApartmentsRouter = require("./api/apiAdminApartments.route");
const Favorites=require('./view/favorites.route')

router.use("/favorites",Favorites);
router.use("/adminApartments", adminApartmentsRouter);
router.use("/", mainRouter);
router.use("/auth", authRouter);
router.use("/api/auth", apiAuthRouter);

router.use("/api/apartments", ApartmentsRouter);

module.exports = router;
