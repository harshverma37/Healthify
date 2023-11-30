const mongoose = require("mongoose");
const url = "mongodb://bp32395:swcRWyDk3LMTCcuT@ac-2d40emt-shard-00-00.513bvu4.mongodb.net:27017,ac-2d40emt-shard-00-01.513bvu4.mongodb.net:27017,ac-2d40emt-shard-00-02.513bvu4.mongodb.net:27017/?ssl=true&replicaSet=atlas-6rxsn3-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser: true})
.then(()=>console.log("connect"))
.catch((error)=>console.log(error));
 