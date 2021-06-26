const express = require('express');
const router = express.Router();

const subjectsHandler = require('./handler/subject');


router.get('/:id', subjectsHandler.getSubject);
// router.get('/add', usersHandler.addStudent);
// router.post('/:id/edit', usersHandler.postUser);
// router.get('/:id/delete', usersHandler.deleteUser);

module.exports = router;
