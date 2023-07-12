
const mongoose = require("mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/aziyaDB",{useNewUrlParser:true})
const db=mongoose.connection;
db.on("error",()=>{console.log("Err is ")})
db.once("open",()=>{console.log("Connected")})
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/aziyaDB")
//     .then(() => { console.log("Mongoose connected") })
//     .catch((err) => { console.log("Mongoose connection error", err) })
module.exports = connection
