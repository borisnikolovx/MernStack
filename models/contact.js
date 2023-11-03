const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contact = new Schema({
    user: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    phonenumber: {type: String, required: true},
},{
    timestamps: true
});

module.exports = mongoose.model("contact", contact);