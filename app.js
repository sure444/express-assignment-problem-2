const express=require("express")
const app=express()
const port=process.env.PORT || 3000
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
app.listen(port, ()=>{console.log("Server Started")})