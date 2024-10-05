const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({msgg:'Get all workouts '})
})


router.get('/:id',(req,res)=>{
    res.json({msgg:'Get a single'})
})


router.post('/', async (req,res)=>{
    const {title, load, reps} = req.body;
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({msgg:'Post a workout'})
})

router.delete('/:id',(req,res)=>{
    res.json({msgg:'Delete a workout'})
})


router.patch('/:id',(req,res)=>{
    res.json({msgg:'Update a workout'})
})

module.exports = router;