const express = require("express")
const app = express()
const cors = require("cors");
const noteModel = require("./models/notes.model")
app.use(express.json())
app.use(cors());


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
            notes : data,
            
    })
})

app.delete("/show/:id", async(req,res)=>{
    const id = req.params.id
    console.log(id)
     await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message:"deleted"
    })
})


app.put("/show/:id", async(req,res)=>{
    const id = req.params.id
    const newtitle = req.body.title
    const newdata = req.body.date
    const newdescription = req.body.description
    console.log(id)
    await noteModel.findByIdAndUpdate(
        {_id: id} , {title:newtitle, date:newdata, description:newdescription} 
    )
     res.status(200).json({
        message:"updated sucessfully"
    })
})

app.get("/show/:id", async(req , res)=>{
    const id = req.params.id
    const data = await noteModel.findById({
        _id:id
    })
        return res.status(200).json({
            message: "data fetched successfully",
            note : data,
            
    })
})









module.exports = app