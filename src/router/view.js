const {join} = require('path')
const express = require('express')

const views = express.Router()

views.get('/register',(req,res)=>{
res.sendFile(join(__dirname,"..","..","views","signUP.html"))
})

module.exports=views;