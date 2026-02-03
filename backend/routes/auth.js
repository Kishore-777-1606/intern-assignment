const r=require("express").Router()
const c=require("../controllers/authController")
const auth=require("../middleware/auth")
const {body}=require("express-validator")

r.post("/signup",
 body("email").isEmail(),
 body("password").isLength({min:6}),
 c.signup)

r.post("/login",c.login)

// profile
r.get("/me",auth,c.getMe)

module.exports=r
