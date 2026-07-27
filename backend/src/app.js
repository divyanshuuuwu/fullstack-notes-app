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
    return res.status(201).json({
        message:"completed sucessfully"
    })

})

app.get("/show", async(req , res)=>{
    const data = await noteModel.find()
        return res.status(200).json({
            message: "data fetched successfully",
            notes : data
    })


})












module.exports = app