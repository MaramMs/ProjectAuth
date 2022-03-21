const express = require("express")
const {createNewUser,logUser} =require('../controllers')

const api = express.Router();

api.post('/api/v1/register', createNewUser);
api.post('/api/v1/login',logUser)


module.exports =api;