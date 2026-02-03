const r=require("express").Router()
const c=require("../controllers/taskController")
const auth=require("../middleware/auth")

r.use(auth)

r.get("/",c.list)
r.post("/",c.create)
r.put("/:id",c.update)
r.delete("/:id",c.remove)

module.exports=r
