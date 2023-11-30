const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:"string",
    email:"string",
    phone:"number",
    city:"string",
    state:"string",
    country:"string",
    add1:"string",
    add2:"string",
    pin:"number",
    purpose:"string",
    amount:"number",
    certificate:"string"
});

const Donation = new mongoose.model("donation",userSchema);
module.exports = Donation;
