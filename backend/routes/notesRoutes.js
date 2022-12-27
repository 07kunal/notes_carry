const express = require('express')
const notes = require('../data/notes')
const router = express.Router()


router.get('/', (req, res) => {
    res.json(notes)
})
// signle note 
router.get('/:id', (req, res) => {
    // find the notes array
    const singleNote = notes.find((note) => note._id === req.params.id)
    // console.log(req.params);
    res.json(singleNote)
})
module.exports = router