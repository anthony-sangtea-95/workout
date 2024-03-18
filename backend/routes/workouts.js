const express = require('express')
const {
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout, 
    updateWorkout} 
    = require('../controllers/workoutController')

const router = express.Router()

// GET get all workouts
router.get('/', getWorkouts)

// GET get a single workout
router.get('/:id', getWorkout)

// POST add new workout
router.post('/', createWorkout)

// PATCH update a workout
router.patch('/:id', updateWorkout)

// DELETE remove a workout
router.delete('/:id', deleteWorkout)

module.exports = router