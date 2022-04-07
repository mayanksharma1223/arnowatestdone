const mongoose=require('mongoose')

const mongoURI=process.env.URI

const connectToMongo=()=>{
    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connected to mongo successfully");
    }).catch((err)=>console.log("no connection"))
}
module.exports=connectToMongo;
