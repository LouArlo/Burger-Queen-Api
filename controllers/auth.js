 //const { find } = require('../models/products');
const UsersScheme = require('../models/users')
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET;


// validate user
 exports.postValidate = (':email', (req, res) => {
   
    const { email } = req.params;
        const user = {
            email
        }
        UsersScheme
        .find( { email })
        .then((data) => {
            res.json({ data })
            })
        .catch((error) => {
            res.json({message:error})
            });
 });
// create token
 exports.postCreateToken = (':email:password', (req, res) => {
    const { email, password } = req.params;
    const user = {
          email, password
          }
    jwt.sign({user}, secretKey, (err, token) => {
        res.json({ token })
         }) 
    })          

    
    


       
