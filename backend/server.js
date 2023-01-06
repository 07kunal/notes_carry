const express = require('express')
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv').config();
const colors = require('colors')
// const router = require('./routes/notesRoutes');
const notesRoutes = require("./routes/notesRoutes")

const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorHandler');

// connect to database
connectDB()
// dotenv.config()
const app = express();
app.use(express.json());



// const notes = require('./data/notes');


app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to Kunal Note Handler App' })
})
// Routes for notes
app.use('/api/notes', notesRoutes)


// for the user
app.use('/api/users', userRoutes)
// error handler
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`welcome to this port of ${PORT}`))