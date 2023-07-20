const router = require("express").Router();
const ApartmentCard = require("../../components/ApartmentCard");
const { Apartment, Photo, Category } = require("../../db/models");

router.get("/:idApartment", async (req, res) => {
  const { idApartment } = req.params;
  const categories = await Category.findAll();
  const apartment = await Apartment.findOne({
    where: { id: idApartment },
    include: { model: Photo },
  });
  console.log(apartment);
  res.renderComponent(ApartmentCard, { apartment });
});

module.exports = router;
