let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let userSchema=new Schema({
   username : {type:String},
   userid : {type:String, required:true, unique:true, index:true},
   password : {type:String, required:true, index:true},
   email : {type:String, required:true, index:true},
   userdetails : {type: Object}
});
module.exports=mongoose.model('users',userSchema);