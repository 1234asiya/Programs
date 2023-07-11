
const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://127.0.0.1:27017/aziyaDB")
    .then(() => { console.log("Mongoose connected") })
    .catch((err) => { console.log("Mongoose connection error", err) })
module.exports = connection
