const express = require('express')
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const router = require('./routes/notesRoutes');
const app = express();
dotenv.config()
// const notes = require('./data/notes');


app.get('/', (req, res) => {
    res.status(200).json({ message: 'note api is running' })
})
// Routes
app.use('/api/notes', router)

app.get('/api/notes', router)


app.listen(PORT, () => console.log(`welcome to this port of ${PORT}`))