const app = require("./src/app")
const PORT = 3000
const connectDB = require("./src/db/db")
connectDB()






app.listen(PORT,()=>{
    console.log("your server is running")
})