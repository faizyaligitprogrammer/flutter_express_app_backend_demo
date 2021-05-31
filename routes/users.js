var express = require('express');
var router = express.Router();

const User = require('../models/userSchema');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res) => {
  let newUser = User({
    'username': req.body.username,
    'password': req.body.password
  });
  newUser.save((err, usr) => {
    if (err) {
      return res.status(500).json({ msg: err });
    } else {
      return res.status(200).json({ msg: "User saved successfully", usr: usr.username });
    }
  });
});

router.post('/login', (req, res) => {
  User.findOne({ username: req.body.username, password: req.body.password }, (err, usr) => {
    if (err) {
      return res.status(500).json({ msg: err });
    } else {
      return res.status(200).json({ msg: "Login successfull", usr: usr.username });
    }
  });
});

module.exports = router;
