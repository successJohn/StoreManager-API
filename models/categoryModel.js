const mongoose = require ("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        required:true
    },

    products :[{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],

    created_at:{
        type: Date,
        default:Date.now
    },

    updated_at : Date
})

module.exports = mongoose.model("Category", categorySchema);