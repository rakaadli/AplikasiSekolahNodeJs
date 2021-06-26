const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

router.get('/:id/edit', usersHandler.getUser);


module.exports = router;
