import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/musicstore").then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log(error);
})
