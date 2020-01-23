let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let  itemSchema = new Schema({
    itemName : {type:String,required:true,unique:true}, 
    unitCost:{type:String,require:true}, 
    description:{type:String}, 
    qty:{type:Number,required:true}
});
module.exports=mongoose.model('item',itemSchema);