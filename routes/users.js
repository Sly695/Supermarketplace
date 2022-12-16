var express = require('express');
var router = express.Router();
const User = require('../models/userModel');
let bcrypt = require('bcrypt');
let uid2 = require('uid2');

router.post("/signUp", async (req, res) => {


  let error = [];
  let result = false;
  let hash = bcrypt.hashSync(req.body.password, 10);
  let newUser = "";
  let userSaved = "";

  let data = await User.findOne({
    where: { email: req.body.email }
  });

  if (data != null) {
    error.push("Un utilisateur existe déjà");
  }

  if (
    req.body.email == "" ||
    req.body.password == "" || 
    req.body.status == ""
  ) {
    error.push("Remplissez tous les champs");
  }

  if (error.length == 0) {
    newUser = await User.create({
      email: req.body.email,
      password: hash,
      status: req.body.status,
      token: uid2(32),
    });

    if (newUser) {
      result = true;
    }
  }

  res.json({ newUser, result, error });

});


router.post("/signIn", async (req, res) => {

  let error = [];
  let user = "";
  let result = false;

  if (req.body.email == "" || req.body.password == "") {
    error.push("Remplissez tous les champs");
  }

  if (error.length == 0) {
    user = await User.findOne({
      where: {email: req.body.email},
    });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        result = true;
      } else {
        result = false;
        error.push("Mauvais mot de passe");
      }
    } else {
      error.push("Mauvais email");
    }

  };

  res.json({ error, user, result })
})

router.get("/listUsers", async function(req, res, next){
  const listUsers = await User.findAll();
  res.json({ listUsers: listUsers });
})

module.exports = router;
