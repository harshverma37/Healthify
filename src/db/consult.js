const mongoose = require("mongoose");
const userSchema3 = new mongoose.Schema({
    name:"string",
    email:"string",
    phone:"number",
    mode:"string",
    speciality:"string"
});
const consult = new mongoose.model("consult",userSchema3);
module.exports = consult;