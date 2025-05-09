const express = require('express')
const db = require('./config/db')
const response = require("./models/users")
const app= express()
const cors= require('cors')
app.use(express.json());


corsOption={
    origin:["http://localhost:5173"],
}
app.use(cors(corsOption))
app.post("/addUser", async function(req,res){
    const data = { name, email,message } = req.body;
   console.log(data)
   const creat=response.create({
    name:name,
    email:email,
    message:message,
   })
   if(creat){
    res.status(201).json({message:"create huva re"})

   }
   
})
app.listen(3000,()=>{
    console.log(3000)
})