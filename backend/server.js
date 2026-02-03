require("dotenv").config()
const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const connect=require("./config/db")

connect()

const app=express()
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1/auth",require("./routes/auth"))
app.use("/api/v1/tasks",require("./routes/tasks"))

app.use((err,req,res,next)=>{
 res.status(500).json({message:err.message})
})

app.listen(process.env.PORT)
