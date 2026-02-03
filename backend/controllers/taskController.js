const Task=require("../models/Task")

exports.list=async(req,res)=>{
 res.json(await Task.find({user:req.user.id}))
}

exports.create=async(req,res)=>{
 res.json(await Task.create({title:req.body.title,completed:false,user:req.user.id}))
}

exports.update=async(req,res)=>{
 res.json(await Task.findByIdAndUpdate(req.params.id,{title:req.body.title},{new:true}))
}

exports.remove=async(req,res)=>{
 await Task.findByIdAndDelete(req.params.id)
 res.json({message:"deleted"})
}
