const express = require('express')

//express app
const app = express()

//routes
app.get('/',(req, res)=>{
    res.json({msg:'Welcome to my app'})
})

//listen for request
app.listen(4000, ()=>{
    console.log('Listening on port 4000')
})