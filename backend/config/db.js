const mongoose = require("mongoose")

module.exports = async () => {
 console.log("Connecting to local Mongo...")

 try {
  await mongoose.connect(process.env.MONGO_URI)
  console.log("Mongo connected successfully")
 } catch(err){
  console.error(err)
  process.exit(1)
 }
}
