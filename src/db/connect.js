const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hospital", { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>console.log("connect"))
.catch((error)=>console.log(error));
