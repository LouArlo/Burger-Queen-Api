const express = require("express");
const controller = require("../controllers/users");
const router = express.Router();
//const UsersScheme = require("../models/users");

const path = "users";

// endpoints users

router.get(`/${path}`, controller.getData);

router.post(`/${path}`, controller.insertData);

router.get(`/${path}/:id`, controller.getDataId);

router.put(`/${path}/:id`, controller.putDataId);
/* router.get(`/${path}`, controller.getSingle);

router.post(`/${path}`, controller.updateSingle);
 */

module.exports = router;
