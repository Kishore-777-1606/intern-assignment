const mongoose=require("mongoose")

module.exports=mongoose.model("Task",new mongoose.Schema({
 title:String,
 completed:Boolean,
 user:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true}))
