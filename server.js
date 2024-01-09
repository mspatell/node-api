const express = require('express')
const app = express()

// routes
app.get('/', (req, res)=>{
    res.send('Hello from GET NODE API')
})

app.listen(3000, ()=> {
    console.log('Node API runing on port 3000')
    
})