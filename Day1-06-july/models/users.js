const mongoose = require("mongoose");
const schema = mongoose.Schema;
let userSchema = new schema({
    name: {
        type: String,
    },
    email: {
        type: String
    }
})
//model means collection
module.exports = mongoose.model('userDetails', userSchema);