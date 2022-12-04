const model = require("../models/products");
const ProductsScheme = require("../models/products");

const options = {
  page: 1,
  limit: 10,
};

//GET GLOBAL DATA WITH PAGINATES
/* exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
       res.send({
        items: docs,
       }) ;
    });  
}; */

//OTHER METHOD TO INSERT DATA "C"
exports.insertData = (req, res) => {
  const product = ProductsScheme(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// READ DATA "R"
exports.getData = (req, res) => {
  ProductsScheme.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// READ DATA "R" FIND ONE PRODUCTS IN ESPECIFIC
exports.getDataId =
  (":id",
  (req, res) => {
    const { id } = req.params;
    ProductsScheme.findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// UPDATE DATA "U"  ONE PRODUCTS IN ESPECIFIC
exports.putDataId =
  (":id",
  (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    ProductsScheme.updateOne({ _id: id }, { $set: { name, price, category } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

exports.deleteDataId =
  (":id",
  (req, res) => {
    const { id } = req.params;
    ProductsScheme.deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//CREATE DATA BUT NO INSERT LATER MORE DOCUMENTS
/* exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
          res.send({ error: "Error" }, 422);
        } else {
          res.send({ data: docs });
        }
      });
    }; */
