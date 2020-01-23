var express=require('express');
var Router=express.Router();
var item=require('../model/Productdata');
 Router.post('/recordsblock/i/product',function(req,res){
    var newitem=new item();
    newitem.itemName=req.body.itemName;
    newitem.unitCost=req.body.unitCost;
    newitem.description=req.body.description;
    newitem.qty=req.body.qty;

    newitem.save(function(err,item){
        if(err){
            var dupData; 
            console.log(err);
            if(err.code == 11000){
                dupData = Object.keys(err.keyValue)[0];
                res.send({success:false, message:dupData +" should be Unique"});
            }
            else if( err.errors ){
                dupData = Object.keys(err.errors)[0];
                res.send({success:false, message:dupData+ " is required"});
            }
            else{
                res.send({success:false, message:"internal error occured in backend "+err});        }
            }
        else{
            res.send({success:true, message:"Product created successfully"});
         }
     });
}); 
Router.get('/recordsblock/r/product',(req,res)=>{
    item.find({itemName:req.query.itemName},function(err,item){
        if(err){
            res.send("error has occured");
        }
        else if(!item){
            res.send({success: false, message:"No item found"});
        }
        else{
            res.send({success: true, message:"ItemName found ", data:item});
        }
    });
});
module.exports=Router;