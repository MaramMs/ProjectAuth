const express = require("express")
const {createNewUser} =require('../controllers')

const api = express.Router();

api.post('/api/v1/register', createNewUser);


module.exports =api;