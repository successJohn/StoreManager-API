const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    customer:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Customer"
    }
    ,

    attendant: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    price:{
        type: float,
        required: true
    },

     product : [
         {
         type: Schema.Types.ObjectId,
         ref: "Product"
        }
    ],
    
    sold_at:{
        type: Date,
        default:Date.now
    },

    updated_at : Date
})


module.exports = mongoose.model("Sales", salesSchema);