const express = require("express");
const path = require("path");
require("./src/db/connect");
const Donation = require("./src/db/payment");
const appoinment = require("./src/db/appoinment");
const consult = require("./src/db/consult");
const app = express();
const staticpath = path.join(__dirname,"/public");
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));
app.post("/appoinment",async(req,res)=>{
    try{
        console.log(req.body);
        const userData = new appoinment({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            city: req.body.city,
            speciality: req.body.speciality
        });
        await userData.save();
        //res.send("<h2>Form sumitted</h2><p>you will recieve the appoinment date and time in your e-mail</p><script>alert('form submitted')</script>");
        res.sendFile(staticpath+'/untitled-1.html');
    } catch(err){
        res.status(500).send(err);
    }
})
app.post("/consult",async(req,res)=>{
    try{
        console.log(req.body);
        const userData = new consult({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            mode: req.body.mode,
            speciality: req.body.speciality
        });
        await userData.save();
        // res.send("<h2>Form sumitted</h2><p>we will contact you within a hour</p><script>alert('form submitted')</script>");
        res.sendFile(staticpath+'/untitled-1.html');
    } catch(err){
        res.status(500).send(err);
    }
})
app.post("/donation",async(req,res)=>{
    try{
        console.log(req.body);
        
        const userData = new Donation({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            add1: req.body.add1,
            add2: req.body.add2,
            city: req.body.city,
            state: req.body.state,
            pin:req.body.pin,
            country:req.body.country,
            purpose: req.body.purpose,
            amount: req.body.amount,
            certificate:req.body.certificate

        });
        await userData.save();
       // res.send("<p>Redirecting to payment page...</p><script>alert('form submitted')</script>");
        res.sendFile(staticpath+'/untitled-1.html');
    } catch(err){
        res.status(500).send(err);
    }
})

app.listen(3000,()=>{
    console.log("listiening...");
})

