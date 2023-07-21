const router = require("express").Router();
const Main = require("../../components/Main");
const { Category, Apartment, Photo } = require("../../db/models");

router.get("/", async (req, res) => {
  const categories = await Category.findAll();
  const apartments = await Apartment.findAll({ include: { model: Photo } });
  res.renderComponent(Main, {
    title: "Главная",
    apartments,
    categories,
  });
});
router.get("/apart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const apartments = await Apartment.findAll({
      where: { categoryId: id },
      include: { model: Photo },
    });
    const categories = await Category.findAll();
    res.renderComponent(Main, {
      title: "Главная",
      apartments,
      categories,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
