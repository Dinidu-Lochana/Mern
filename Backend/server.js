require('dotenv').config()

const cors = require("cors");

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

//express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/workouts',workoutRoutes);

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>
{
    app.listen(process.env.PORT, ()=>{
        console.log('Connected to DB Listening on port 4000');
    })
})
.catch((error)=>{
    console.log(error)
})

//listen for request


process.env