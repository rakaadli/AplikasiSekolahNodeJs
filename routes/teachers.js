const express = require('express');
const router = express.Router();

const teachersHandler = require('./handler/teacher');


router.get('/:id', teachersHandler.getTeacher);
// router.get('/add', teachersHandler.addStudent);
// router.post('/:id/edit', usersHandler.postUser);
// router.get('/:id/delete', usersHandler.deleteUser);

module.exports = router;
