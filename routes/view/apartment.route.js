const router = require("express").Router();
const ApartmentCard = require("../../components/ApartmentCard");
const { Apartment, Photo } = require("../../db/models");

router.get("/:idApartment", async (req, res) => {
  const { idApartment } = req.params;
  const apartment = await Apartment.findOne({
    where: { id: idApartment },
    include: { model: Photo },
  });
  res.renderComponent(ApartmentCard, {
    title: `${apartment.name}`,
    apartment
  });
});

module.exports = router;
