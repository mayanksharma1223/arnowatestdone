const connectToMongo=require("./db")
const cors=require('cors')
const dotenv=require("dotenv")
dotenv.config();

connectToMongo();

const express=require('express')
const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/values',require('./routes/values'))

app.get("/",(req,res)=>{
res.json("server start")
})

app.listen(port,()=>{
    console.log(`backend listening at http://localhost:${port}`)
})