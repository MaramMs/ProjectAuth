const express = require("express");
const api  = require("./api");
const {createNewUser} =require('../controllers')
const router = express()



router.use(api);

module.exports = router;


