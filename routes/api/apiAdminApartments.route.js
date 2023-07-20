const router = require('express').Router();
// const ApparmentOne = require('../../components/Appartment');
const { Apartment } = require('../../db/models');

router.get('/', async (req, res) => {
  const apartment = await Apartment.findAll();
  res.json({ apartment });
});

module.exports = router;
