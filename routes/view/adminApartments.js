const router = require('express').Router();
const ProductsList = require('../../components/ProductsList');
const ProductPage = require('../../components/ProductPage');
const { Apartment } = require('../../db/models');

router.get('/', async (req, res) => {
  const apartments = await Apartment.findAll();
  res.renderComponent(ProductsList, { title: 'это все карточки))', products });
});

module.exports = router;
