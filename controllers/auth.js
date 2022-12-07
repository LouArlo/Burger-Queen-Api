//const { find } = require('../models/products');
const UsersScheme = require("../models/users");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET;

// validate user
exports.postValidate =
  (":email",
  (req, res) => {
    const { email } = req.params;
    const user = {
      email,
    };
    UsersScheme.find({ email })
      .then((data) => {
        res.json({ data });
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
// create token
exports.postCreateToken = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = {
    email,
    password,
  };
  UsersScheme.find({ email })
    .then((data) => {
      if (data.length>0) {
        jwt.sign({ user }, secretKey, (err, token) => {
          res.json({ token });
        });
      }
    })
    .catch((error) => {
      res.json({ message: error });
    });
};
