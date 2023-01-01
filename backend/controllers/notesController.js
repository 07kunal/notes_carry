const asyncHandler = require('express-async-handler');
const notes = require('../data/notes');

// @desc notes
// @dsec /api/notes
// @access Public

const getNotes = asyncHandler(async (req, res) => {
    res.json(notes)
})

const notesById = asyncHandler(async (req, res) => {
    // find the notes array
    const singleNote = notes.find((note) => note._id === req.params.id)
    // console.log(req.params);
    res.json(singleNote)
})

module.exports = {
    getNotes,
    notesById
}