const router = require('express').Router();
const { Apartment, Photo } = require('../../db/models');
const ApparmentOne = require('../../components/AdminApartment');

router.put('/:id', async (req, res) => {
  try {
    const {
      name,
      categoryId,
      price,
      description,
      map,
    } = req.body;
    const apartmentUpd = await Apartment.update({
      name,
      categoryId,
      price,
      description,
      map,
    }, { where: { id: req.params.id } });
    res.json({ apartmentUpd });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idApartment/delete', async (req, res) => {
  try {
    const { idApartment } = req.params;
    const delApartment = await Apartment.destroy({ where: { id: idApartment } });
    res.json({ delApartment });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/addProduct', async (req, res) => {
  const { name, categoryId, price, description, map, } = req.body;
  try {
    const newApartment = await Apartment.create({
      name,
      categoryId,
      price,
      description,
      map,
    });
    console.log(newApartment);
    res.json({ html:res.renderComponent(ApparmentOne,
      { apartment: newApartment },
      { htmlOnly: true },
  )});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
