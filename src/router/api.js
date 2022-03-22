const express = require("express")
const cookieParser = require('cookie-parser')
const {createNewUser,logUser} =require('../controllers')


const api = express.Router();
api.use(cookieParser())
api.post('/api/v1/register', createNewUser);
api.post('/api/v1/login',logUser)


module.exports =api;