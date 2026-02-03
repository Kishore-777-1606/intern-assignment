const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.signup=async(req,res)=>{
 const hash=await bcrypt.hash(req.body.password,10)
 await User.create({email:req.body.email,password:hash})
 res.json({message:"created"})
}

exports.login=async(req,res)=>{
 const u=await User.findOne({email:req.body.email})
 if(!u) return res.status(400).json({message:"invalid"})
 const ok=await bcrypt.compare(req.body.password,u.password)
 if(!ok) return res.status(400).json({message:"invalid"})
 const token=jwt.sign({id:u._id},process.env.JWT_SECRET)
 res.json({token})
}
exports.getMe = async (req, res) => {
    const user = await require("../models/User")
      .findById(req.user.id)
      .select("-password")
   
    res.json(user)
   }
   
