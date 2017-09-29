/**
 * This module is the interface for the db. 
 * Contains CRUD method in sql to talk to the db.
 * Each funtion return a promise.
 */

const pgp = require('pg-promise')();
const dbConfig = require('../config/config');

// Execute pg-promise with the db config to make a connection.
const db = pgp(dbConfig);

// Export all the functions: 
module.exports = {
// findAll: search through all the recipes
   findAll() {
       return db.many(`
       SELECT * FROM recipes
       `);
   },

// CHECK THIS: COULD BE HELPFUL? http://bit.ly/2xEjal8
// findById: search through the recipes and find by id
// find by id
   findById(id) {
    return db.oneOrNone(`
    SELECT * FROM recipes
    WHERE id = $1
    `, id);
   },
// save: the recipe_id comes from the form as a string
   //  cast it to a number
   saveInfo(recipe) {
       console.log(recipe);
       recipe.id = Number.parseInt(recipe.id, 10);
       // First insertion in the recipes table
       return db.one(`
         INSERT INTO recipes
         (rec_name, category, servings, prep_time, level, calories, ingredients, directions, pic)
         VALUES
         ($/rec_name/, $/category/, $/servings/, $/prep_time/, $/level/, $/calories/, $/ingredients/, $/directions/, $/pic/)
         RETURNING *
       `, recipe)
   },

   update(recipe) {
    //    recipe.id = Number.parseInt(recipe.id, 10);
       return db.one(`
         UPDATE recipes
         SET
         rec_name = $/rec_name/, 
         category = $/category/, 
         servings = $/servings/, 
         prep_time = $/prep_time/, 
         level = $/level/, 
         calories = $/calories/, 
         ingredients = $/ingredients/, 
         directions = $/directions/, 
         pic =  $/pic/
         WHERE id = $/id/
         RETURNING *
       `, recipe)
   },

   destroy(id) {
       return db.none(`
       DELETE
       FROM recipes
       WHERE id = $1
       `, id)   
   }
};
