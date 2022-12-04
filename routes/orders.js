const express = require('express')
const controller = require('../controllers/orders')
const router = express.Router()

const path = 'orders'

// endpoints orders
router.get(`/${path}`, controller.getData);

router.post(`/${path}`, controller.insertData);

router.get(`/${path}/:id`, controller.getDataId);

router.put(`/${path}/:id`, controller.putDataId);

router.delete(`/${path}/:id`, controller.deleteDataId);

module.exports = router