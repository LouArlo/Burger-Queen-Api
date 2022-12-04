const express = require('express')
const controller = require('../controllers/products');
const router = express.Router();

const path = 'products';

// endpoints users

router.get(`/${path}`, controller.getData);

router.post(`/${path}`, controller.insertData);

router.get(`/${path}/:id`, controller.getDataId);

router.put(`/${path}/:id`, controller.putDataId);

router.delete(`/${path}/:id`, controller.deleteDataId);

module.exports = router
