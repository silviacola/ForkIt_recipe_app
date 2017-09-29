// Require Express
const express = require('express');
const controller = require('../controller/recipeController');
const views = require('../controller/viewsController');

// Invoke the Router()
const recipeRouter = express.Router();

/* ROUTES */

recipeRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);

recipeRouter.get('/new', views.showAddForm);

recipeRouter.route('/:id')
    .get(controller.getOne, views.showOne, views.show404)
    .put(controller.update, views.handleUpdate, views.show406)
    .delete(controller.destroy, views.handleDelete, views.show404);

recipeRouter.route('/')
    .get(controller.index, views.showRecipes, views.show404)
    .post(controller.create, views.handleCreate, views.show406);

// Export the recipeRouter
module.exports = recipeRouter;