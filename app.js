const express=require("express")
const app=express()
app.get("/student/studentsList", (req, res)=>{
res.status(200).send({
    "results": [
    "Rajesh",
    "Ramesh",
    "Sayali",
    "Sanjana"
    ]
   })
   app.all("*", (req, res)=>{
    res.status(404).send("route not found")
   })
})
app.listen(8080, ()=>{console.log("Server Started")})