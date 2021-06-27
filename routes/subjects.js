const express = require('express');
const router = express.Router();

const subjectsHandler = require('./handler/subject');


router.get('/:id', subjectsHandler.getSubject);
router.get('/', subjectsHandler.getAllSubject);

module.exports = router;
