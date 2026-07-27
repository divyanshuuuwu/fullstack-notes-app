const mongoose = require("mongoose")

async function connectDB() {
    try{
        await mongoose.connect("mongodb+srv://div_tester:hero123@backend1.vqamill.mongodb.net/FLnotes")
        console.log("DB is connected")


    }
    catch(err){
            console.error(err)
    }
    
}

module.exports = connectDB