const {join} = require('path')
const express = require('express')
const {authMiddleware} =require('../middlewares')
const views = express.Router()

views.get('/register',authMiddleware,(req,res)=>{
res.sendFile(join(__dirname,"..","..","views","signUP.html"))
})

views.get('/login',authMiddleware,(req,res)=>{
  res.sendFile(join(__dirname,"..","..","views","login.html"))
})
module.exports=views;