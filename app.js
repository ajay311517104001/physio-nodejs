var express  = require('express')
var app =express()
var path =require('path')
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
var router=require('./routers/routers.js')



app.use(express.static('public'))

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','hbs')

app.get('/',router)
app.get('/about',router)
app.get('/login',router)
app.get('/signup',router)
app.get('/contact',router)
app.post('/login-credential',router)







app.listen(3000,function(err){
    if(!err){
       console.log('server starts')       
    }

})