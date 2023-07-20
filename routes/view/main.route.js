const router = require("express").Router();
const Main = require("../../components/Main");
const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.renderComponent(Main, { title: "Главная", categories });
});

module.exports = router;
