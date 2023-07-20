const router = require("express").Router();
const Favorites = require("../../components/Favorites");

router.get("/", (req, res) => {
  res.renderComponent(Favorites, { title: "Favorites" });
});

module.exports = router;
