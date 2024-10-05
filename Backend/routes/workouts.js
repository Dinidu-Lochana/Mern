const express = require('express');

const router = express = express.Router();

router.get('/', (req, res)=>{
    res.json({msgg:'Get all workouts '})
})


router.get('/:id',(req,res)=>{
    res.json({msgg:'Get a single'})
})


router.post('/',(req,res)=>{
    res.json({msgg:'Post a workout'})
})

router.delete('/id',(req,res)=>{
    res.json({msgg:'Delete a workout'})
})


router.patch('/:id',(req,res)=>{
    res.json({msgg:'Update a workout'})
})

module.exports = router;