const express = require("express")
const app = express()
const noteModel = require("./models/notes.model")
app.use(express.json())


app.post("/create", async(req , res)=>{
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description,
        date: data.date
    })
    res.status(201).json({
        message:"completed sucessfully"
    })

})












module.exports = app