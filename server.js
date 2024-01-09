const express = require('express')
const app = express()
const mongoose = require('mongoose ')

// routes
app.get('/', (req, res)=>{
    res.send('Hello from GET NODE API')
})
// new 
app.listen(3000, ()=> {
    console.log('Node API runing on port 3000')
})

mongoose.connect('mongodb+srv://admin:root@cluster01-2024.n83hj9q.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log(e)
})