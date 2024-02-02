const { getAll, create, getOne, deletUser, updateUser } = require('../controllers/Users.controller');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
		.get(getAll)
        .post(create)

usersRouter.route("/:id")   
        .get(getOne)
        .delete(deletUser)
        .put(updateUser)     

module.exports = usersRouter;