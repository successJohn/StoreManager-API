const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
      
    }, 
    phone: {
        type: String,
     
    },

    created_at: {
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model("customer", customerSchema)