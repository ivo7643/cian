const router = require('express').Router();
const ApartmentList = require('../../components/AdminApartmentList');
// const ApartmentPage = require('../../components/ApartmentPage');
const { Apartment } = require('../../db/models');
const UpdateForm = require('../../components/UpdateForm');

router.get('/', async (req, res) => {
  const apartments = await Apartment.findAll();
  res.renderComponent(ApartmentList, { title: 'Аппартаменты', apartments });
});

router.get('/updForm/:id', async (req, res) => {
  const apartment = await Apartment.findOne({ where: { id: req.params.id } });
  res.renderComponent(UpdateForm, { apartment, title: 'Изменения' });
});

module.exports = router;
