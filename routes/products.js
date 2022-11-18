const express = require('express')
const controller = require('../controllers/products')
const router = express.Router()

const path = 'products'

// Ruta /products 

router.get(
    `/${path}`,
     controller.getData
     )

     /* app.post('/products', (req, res) => {
        res.status(200).json({'response': 'data recibida',
        "data":req.body
    })
    }) */

module.exports = router