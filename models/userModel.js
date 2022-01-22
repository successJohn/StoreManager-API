const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true
    }, 
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required:true
    },

    avatar: String,

    is_active:{
        type:Boolean,
        default:false
    },

    is_admin:{
        type:Boolean,
        default:false
    },

    is_attendant:{
        type:Boolean,
        default:false
    },

    is_store_owner:{
        type:Boolean,
        default:false
    },

    created_at:{
        type: Date,
        default:Date.now
    },

    updated_at : Date

})

module.exports =  mongoose.model("User",userSchema);