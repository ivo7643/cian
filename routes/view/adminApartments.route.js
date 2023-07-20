const router = require('express').Router();
const ApartmentList = require('../../components/AdminApartmentList');
// const ApartmentPage = require('../../components/ApartmentPage');
const { Apartment } = require('../../db/models');

router.get('/', async (req, res) => {
  const apartments = await Apartment.findAll();
  res.renderComponent(ApartmentList, { title: 'Аппартаменты', apartments });
});

module.exports = router;
