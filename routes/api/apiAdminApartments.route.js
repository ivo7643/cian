const router = require('express').Router();
const { Apartment } = require('../../db/models');
const ApparmentOne = require('../../components/AdminApartment');

router.post('/', async (req, res) => {
  const { name, categoryId, price, description, map } = req.body;
  try {
    const newApartment = await Apartment.create({
      name,
      categoryId,
      price,
      description,
      map,
    });
    console.log(newApartment);
    res.renderComponent(
      ApparmentOne,
      { apartment: newApartment },
      { htmlOnly: true }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
