require('dotenv').config()

const express = require('express');

//express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req, res)=>{
    res.json({msg:'Welcome to my app'});
})

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log('Listening on port 4000');
})

process.env