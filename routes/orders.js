const express = require('express')
const controller = require('../controllers/orders')
const router = express.Router()

const path = 'orders'

// Ruta /orders

router.get(
    `/${path}`,
     controller.getData
     )



module.exports = router