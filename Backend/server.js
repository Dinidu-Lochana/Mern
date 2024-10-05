require('dotenv').config()

const express = require('express');
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

//routes
app.use('/api/workouts',workoutRoutes);

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log('Listening on port 4000');
})

process.env