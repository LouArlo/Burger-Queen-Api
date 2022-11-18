const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

const path = 'auth'

// Ruta /auth

router.get(
  `/${path}`,
   controller.getData
   )

/* app.listen(port, () => {
    console.log(`Aplicación activa ${port}`)
  }) */

module.exports = router