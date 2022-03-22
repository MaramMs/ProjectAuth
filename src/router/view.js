const {join} = require('path')
const express = require('express')
const {authMiddleware} =require('../middlewares')
const views = express.Router()
views.get('/',(req,res)=>{
  res.sendFile(join(__dirname,"..","..","views","index.html"))
  })
  views.get('/register',(req,res)=>{
    res.sendFile(join(__dirname,"..","..","views","signUP.html"))
    })
    
    views.get('/login',(req,res)=>{
      res.sendFile(join(__dirname,"..","..","views","login.html"))
    })
  views.get('/home',authMiddleware,(req,res)=>{
    res.sendFile(join(__dirname,"..","..","views","home.html"))
    })

module.exports=views;