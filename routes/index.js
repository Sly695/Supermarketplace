var express = require('express');
var router = express.Router();
const Product = require('../models/productModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addProduct', async function (req, res, next) {

  const productAdded = await Product.create({
    image: req.body.image,
    price: req.body.price,
    title: req.body.title,
    description: req.body.description,
    quantity: req.body.quantity,
  })
  res.json({ Products: productAdded })

})

router.delete('/deleteProduct', async function (req, res, next) {
  // var user = await usersModel.findOne({ token: req.query.token });

  const productDelete = await Product.destroy({
    where: { id: req.query.id }
  });

  if (productDelete == 1 || productDelete == 0) {
    res.json({ result: productDelete })
  }
})

router.post('/updateProduct', async function (req, res, next) {

  const productFound = await Product.findOne({
    where: { id: req.body.id }
  });

  productFound.image = req.body.image;
  productFound.title = req.body.title;
  productFound.description = req.body.description;
  productFound.price = req.body.price;
  productFound.quantity = req.body.quantity;

  let productUpdated = "";

  // if(productFound.image || productFound.title || productFound.description || productFound.price || productFound.quantity){
  productUpdated = await productFound.save();
  // }

  if (productUpdated) {
    res.json({ result: productUpdated });
  }

})

router.get('/listProducts', async function (req, res, next) {
  const Products = await Product.findAll();
  res.json({ listProducts: Products });
})


module.exports = router;
