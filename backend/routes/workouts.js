const express = require('express')
const Workout = require('../models/workoutModel')
const {getWorkouts, getWorkout, createWorkout} = require('../controllers/workoutController')

const router = express.Router()

// GET get all workouts
router.get('/', getWorkouts)

// GET get a single workout
router.get('/:id', getWorkout)

// POST add new workout
router.post('/', createWorkout)

// PATCH update a workout
router.patch('/:id', (req, res) => {
    res.json({'msg': 'Update workout'})
})

// DELETE remove a workout
router.delete('/:id', (req, res) => {
    res.json({'msg': 'Delete workout'})
})

module.exports = router