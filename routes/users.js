const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');


router.get('/add', usersHandler.addStudent);
router.get('/:id/edit', usersHandler.getUser);
router.post('/:id/edit', usersHandler.postUser);
router.get('/:id/delete', usersHandler.deleteStudent);
router.get('/:email', usersHandler.getStudentEmail);

module.exports = router;
