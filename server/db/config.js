const mongoose = require("mongoose");

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/Foddies-Zone",{useNewUrlParser: true},()=>{
    console.log("connected");
});