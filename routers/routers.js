var express = require('express')
var router =express.Router()
var signExp=require('../mod/sign.js')
var mongoose=require('mongoose')

//index.hbs router
router.get('/',function(req,res){
    res.render('index')
})
//about.hbs router
router.get('/about',function(req,res){
    res.render('about')
})
// login router
router.get('/login',function(req,res){
    res.render('login')
})
//register router
router.get('/signup',function(req,res){
    res.render('register')
})
//contact router
router.get('/contact',function(req,res){
    res.render('contact')
})

router.post('/login-credential',function(req,res){
    console.log(JSON.stringify(req.body))
    var credential= new signExp()
    credential.email=req.body.email
    credential.password=req.body.password
    credential.save()
    .then(()=>console.log('saved'))
    .catch((err)=>console.log(err))
})

module.exports=router