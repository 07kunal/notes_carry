const express = require('express')
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv').config();
const colors = require('colors')
const router = require('./routes/notesRoutes');
const connectDB = require('./config/db');
// connect to database
connectDB()
// dotenv.config()
const app = express();



// const notes = require('./data/notes');


app.get('/', (req, res) => {
    res.status(200).json({ message: 'note api is running' })
})
// Routes
app.use('/api/notes', router)

app.get('/api/notes', router)


app.listen(PORT, () => console.log(`welcome to this port of ${PORT}`))