const model = require("../models/users.js");
const UsersScheme = require("../models/users");

const options = {
  page: 1,
  limit: 10,
};

//GET GLOBAL DATA
/* exports.getData = (req, res) => {
  model.paginate({}, options, (err, docs) => {
    res.send({
      items: docs,
    });
  });
}; */

//CREATE DATA
/* exports.insertData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ error: "Error" }, 422);
    } else {
      res.send({ data: docs });
    }
  });
}; */

//OTHER METHOD TO INSERT DATA
 exports.insertData =  (req, res) => {
    const user= UsersScheme(req.body);
    user
    .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error}));
}; 

//GET SINGLE DATA
exports.getData =  (req, res) => {
  UsersScheme
  .find()
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error}));
}; 

//UPDATE SINGLE  DATA
exports.getDataId = (':id', (req, res) => {
  const { id } = req.params;
  UsersScheme
  .findById(id)
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error}));
}); 

exports.putDataId = (':id', (req, res) => {
  const { id } = req.params;
  const { email, password, role } = req.body;
  UsersScheme
  .updateOne({_id:id}, { $set: {email, password, role}})
 .then((data) => res.json(data))
 .catch((error) => res.json({ message: error}));
}); 

// DELETE DATA

exports.deleteDataId = (':id', (req, res) => {
  const { id } = req.params;
   UsersScheme
  .deleteOne ({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error})
  )
});  

// esto es para ver que los datos enviados se estan recibiendo, pero no ha funcionado

/* router.post('/users', (req,res) => {
   const user = UsersScheme(req.body);
   user
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error}));
}); */
