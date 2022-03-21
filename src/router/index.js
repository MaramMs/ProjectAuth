const express = require("express");
const api  = require("./api");
const views = require('./view')
// const {createNewUser,logUser} =require('../controllers')
const router = express()



router.use(api);
router.use(views)

module.exports = router;


