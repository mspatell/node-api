require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.get('/', (req, res)=>{
    res.send('Hello from GET NODE API')
})

app.use('/api/products', productRoute)

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT, ()=> {
        console.log(`Node API running on ${PORT}`);
    })
}).catch((e)=>{
    console.log(e)
})