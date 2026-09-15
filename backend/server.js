import express from "express"
import dotenv from 'dotenv'
import dbConnect from "./config/db.js"
import route from "./routes/productRoute.js"
import cors from "cors"

const app = express()

dotenv.config()
app.use(cors())

const PORT = process.env.PORT||5000

dbConnect()

app.use(express.json())

app.use('/api/products', route)

app.listen( PORT , ()=> 
{    console.log(`server started at http://lcalhost:${PORT}`); 

})

