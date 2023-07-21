const router = require("express").Router();
const Favorites = require("../../components/Favorites");
const { Apartment, Favorite,Photo } = require("../../db/models");

router.get("/", async (req, res) => {
  const favorites = await Favorite.findAll({
    where: { userId: req.session.userId },
    include: { model: Apartment,include:{model: Photo} },
  });

  res.renderComponent(Favorites, { title: "Favorites", favorites });
});

module.exports = router;
