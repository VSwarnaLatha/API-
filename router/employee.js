var express=require('express');
var Router=express.Router();
var user=require('../model/userdata');
 Router.post('/accounting/i/employee',function(req,res){
    var newUser=new user();
    newUser.username=req.body.username;
    newUser.userid=req.body.userid;
    newUser.password=req.body.password;
    newUser.email=req.body.email;

    newUser.userdetails = req.body.userdetails;
    newUser.save(function(err,users){
        if(err){
            console.log(err);
            if(err.code==11000){
                var duplicateField = Object.keys(err.keyValue)[0];
                res.send({success:false, message:"data not saved, already "+ duplicateField +'exit'});
            }else{
                res.send({success:false, message:"internal error occured ",error:err});
            }  
        }
        else{
            res.send({success:true, message:"Data saved successfully"});
        }
    });
}); 
module.exports=Router;