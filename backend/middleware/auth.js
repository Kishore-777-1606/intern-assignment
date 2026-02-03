const jwt=require("jsonwebtoken")

module.exports=(req,res,next)=>{
 const h=req.headers.authorization
 if(!h) return res.sendStatus(401)
 try{
  req.user=jwt.verify(h.split(" ")[1],process.env.JWT_SECRET)
  next()
 }catch{
  res.sendStatus(401)
 }
}

