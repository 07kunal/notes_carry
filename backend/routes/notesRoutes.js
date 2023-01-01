const express = require('express')
const { getNotes, notesById } = require('../controllers/notesController')
const router = express.Router()



router.get('/', getNotes)
// signle note 
router.get('/:id', notesById)
module.exports = router