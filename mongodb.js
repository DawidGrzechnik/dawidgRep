const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BeautyDB")
.then(() => {
    console.log("mongo connect");
}).catch(() => {
    console.log("fail");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
})

const ServicesSchema = new mongoose.Schema({
    nameServices:{
        type:String,
        require:true
    },
    cena:{
        type:String,
        require: true
    }

})

const collection1 = new mongoose.model("collection1", LogInSchema);
const Services = new mongoose.model("services", ServicesSchema);

module.exports = collection1;
module.exports = Services;