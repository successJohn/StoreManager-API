const mongoose = require("mongoose");
const { float } = require("webidl-conversions");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },

    description:{
        type: String,
        required:true
    },

    price:{
        type: float,
        required: true
    },

    quantity:{
        type: Number,
        required: true
    },
     category : [{
         type: Schema.Types.ObjectId,
         ref: "Category"
     }
    ],
    
    created_at:{
        type: Date,
        default:Date.now
    },

    updated_at : Date
})


module.exports = mongoose.model("Product", productSchema);