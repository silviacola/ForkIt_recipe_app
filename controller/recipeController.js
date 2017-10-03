// Require the model
const recipeDB = require('../models/recipeDB');
// export the controller functions
module.exports = {
/*func index to display all the recipes
    Needs req, res and next as parameters.    
    Use a findAll method from the model.
    Use a .then method that passes all the recipe 
    and set the res.locals.recipes = recipes;, then calls next.
    Use a .catch method to display the error.
*/
    index(req, res, next) {
        recipeDB.findAll()
        .then((recipes) => {
            res.locals.recipes = recipes;
            next();
        })
        .catch(err => next(err));
    },

/* func getOne to get one recipe by id.
    Needs req, res and next as parameters.    
    Use a findById method from the model with the req.params.id as a parameter.
    Use a .then method that passes the single recipe 
    and set the res.locals.recipe = recipe;, then calls next.
    Use a .catch method to display the error.
*/

getOne(req, res, next) {
    recipeDB.findById(req.params.id)
    .then((recipe) => {
        console.log(recipe);
        res.locals.recipe = recipe;
        next();
    })
    .catch(err => next(err));
},

/* func create to get recipe data from the front-end and set it in the DB
    sets the results of the insertion into (??).
    Needs req, res and next as parameters.    
    Use a create method from the model with the req.body as a parameter.
    Use a .then method that passes the single recipe 
    and set the res.locals.recipe = recipe;, then calls next.
    Use a .catch method to display the error.
*/

create(req, res, next) {
    console.log(req.body);
    recipeDB.saveInfo(req.body, req.params.id)
      .then((recipe) => {
        res.locals.recipe = recipe;
        next();
      })
      .catch(err => next(err));
  },


/* func edit to get recipe data from the db, 
    merge the data from the front-end and set it in the db.
    Needs req, res and next as parameters.    
    Use an update method from the model with the req.body and req.params.id as parameters.
    Use a .then method that passes the single recipe 
    and set the res.locals.recipe = recipe;, then calls next.
    Use a .catch method to display the error.
*/

update(req, res, next) {
    console.log(req.body, 'update controller');
    recipeDB.update(req.body, req.params.id)
        .then((recipe) => {
            res.locals.recipe = recipe;
            next();
        })
        .catch(err => next(err));
  },


  
/* func destroy to destroy data from the db at this id. 
    Needs req, res and next as parameters.    
    Uses a destroy method from the model with the req.params.id a parameter.
    Uses a .then method that calls next.
    Uses a .catch method to display the error.
*/

destroy(req, res, next) {
    recipeDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  }

};