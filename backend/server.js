require('dotenv').config()
const express = require('express')
const workoutRouters = require('./routes/workouts')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT;

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRouters)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
    console.log(`Connected to db and Server running on port ${PORT}`)
})
})
.catch(error => {
    console.log(error);
})