const Workout = require('../models/workoutModel');
const mongoose = require('mongoose')

//get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(allWorkouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get a single workout
const getWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404). json({error: 'No Document'})
    }
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: 'No Document'})
    }
    res.status(200).json(workout)
}

//create a new
const createWorkout = async (req,res)=>{
    const {title, load, reps} = req.body;

    let emptyFields = []

    if(!title){
        emptyFields.push['title']
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields' , emptyFields})
    }
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
        res.json({msgg:'Post a workout'})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    
}


//delete a new
const deleteWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No Document'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(404).json({error: 'No Document'})
    }
    res.status(200).json(workout)
}


//update a new
const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No Document'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if (!workout){
        return res.status(404).json({error: 'No Document'})
    }
    res.status(200).json(workout)
}



module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}