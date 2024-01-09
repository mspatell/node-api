const express = require('express')
const app = express()
const mongoose = require('mongoose ')

const Product = require('./models/productModel')

app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send('Hello from GET NODE API')
})
// new 
app.listen(3000, ()=> {
    console.log('Node API runing on port 3000')
})

app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://admin:root@cluster01-2024.n83hj9q.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log(e)
})