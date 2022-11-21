const model = require('../models/orders')
const OrdersScheme = require("../models/orders");

const options = {
    page: 1,
    limit: 10,
  };
exports.insertData =  (req, res) => {
    const order= OrdersScheme(req.body);
    order
    .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error}));
}; 

// READ DATA "R"
exports.getData = (req, res) => {
  OrdersScheme
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error})
  )};  

  // READ DATA "R" FIND ONE ORDERS IN ESPECIFIC
exports.getDataId = (':id', (req, res) => {
  const { id } = req.params;
  OrdersScheme
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error})
  )
});  

 // UPDATE DATA "U"  ONE Orders IN ESPECIFIC
 exports.putDataId = (':id', (req, res) => {
  const { id } = req.params;
  const { qty, name, status } = req.body;
  OrdersScheme
  .updateOne({_id: id}, { $set: {qty, name, status }})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error})
  )
});  

exports.deleteDataId = (':id', (req, res) => {
  const { id } = req.params;
   OrdersScheme
  .deleteOne ({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error})
  )
});  