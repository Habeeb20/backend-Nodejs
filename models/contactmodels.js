const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    name:{
        type: String,
        reqired: [true, "please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "please add your email address"]
    },

    phone: {
        type: String,
        required: [true, "please add your email phone number"]
    }
});


module.exports = mongoose.model("Contact", contactschema)