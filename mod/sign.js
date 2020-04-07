var mongoose =require('mongoose');
var Schema= mongoose.Schema

mongoose.connect("mongodb://localhost:27017/sigIn",{useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>console.log('works fine'))
.catch((err)=> console.log(err))

var schema= new Schema({
   
    email:String,
    
    password:String


})

var signInExp =mongoose.model('sigIn-account',schema)

module.exports=signInExp