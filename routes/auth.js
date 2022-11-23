const express = require('express');
//const jwt = require('jsonwebtoken');
const controller = require('../controllers/auth');
const router = express.Router();

const path = 'auth';

// Ruta /auth

//router.post(`/${path}/:email`, controller.postValidate);

router.post(`/${path}/token/:email/:password`, controller.postCreateToken);
/* app.listen(port, () => {
    console.log(`Aplicación activa ${port}`)
  }) */

module.exports = router