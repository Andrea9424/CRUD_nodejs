const express = require('express');
const usersRouter = require('./Users.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/Users',usersRouter)

module.exports = router;