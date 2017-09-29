## **FORK-IT! - Recipe App for Hungry Developers** 
======================

### Time to make woofles!
![Time to make woofles](/public/images/dog-cooking-mem.png)

### **FEATURES**
Full CRUD recipe app:  
- The user can BROWSE all the recipes in the database and see all the related informations.
- New recipes can be ADDED and every recipe can be EDITED and DELETED.

### **TECHNOLOGIES**
- HTML5 / EJS
- NODE.js and EXPRESS
- MVC pattern
- SQL pg-promise
- CSS3 
- NPM packages:
    - Nodemon
    - Morgan
    - Express
    - Ejs
    - Body-parser
    - Pg-promise
    - Method-override

----------------------------
### **LAYOUT**

#### MAIN PAGE 
![Wireframe 01](/public/images/recipe-app-wireframe-01.png)


The main page will display:
- header with the app logo and the main navigation menu:
    1. HOME - Always redirects to the home page,
    2. ABOUT - Brief presentation of the app
    3. RECIPES - Displays the list of all the recipes in the db
- a welcome message and/or a pay-off;
- a background image;
- a main central button that links to the Recipes page;
- footer.
----------------------------

#### RECIPES
Route: /recipes
The recipe page will display:
- a button on the top that allows to add a new recipe ( => /recipes/new)
- a list of all the recipes in the db;
- each recipe has a card/tile displaying a title and a "read more" linked to the single recipe page ( => /recipes/:id).
---------------------------------

#### SINGLE RECIPE


![Wireframe 02](/public/images/recipe-app-wireframe-02.png)

Route: /recipes/:id

The single recipe page will display:
- title of the recipe;
- servings;
- preparation time;
- calories;
- difficulty;
- list of the ingredients;
- directions;
- an edit button ( => /recipes/:id/edit)
- a delete button ( => redirects to /recipes)
---------------------------------

#### ADD/EDIT RECIPE
Route: /recipes/:id

The add and the edit recipe pages will have the same layout. In the edit page the form fields will be prefilled, in the add page they will be empty:
The whole page will be structured ad a form with the following fields:
- title of the recipe;
- servings;
- preparation time;
- calories;
- difficulty;
- list of the ingredients;
- directions;
- a SAVE button will store the new recipe in the database and redirect to the single page of the new recipe just added/edited;
- a BACK button that will redirect to the /recipes page.

---------------------------------

### **CODE SNIPPET**

I had a hard time trying to figure out why the update function was not working.
After many attempt, I realized that the req.body was not the only parameter needed, and adding the id of the recipe, I fixed the issue. 

From recipeController.js

```
update(req, res, next) {
    console.log(req.body, 'update controller');
    recipeDB.update(req.body, req.params.id)
        .then((recipe) => {
            res.locals.recipe = recipe;
            next();
        })
        .catch(err => next(err));
  },
```
---------------------------------

### **CHALLENGES**
1. UPDATE FUNCTION: as previously reported, the update function in the recipeController has been pretty challenging. The function needs the req.body as a parameter, and the req.params.id as well, which was not so easy to figure out.

2. STYLING FORMS: it's always pretty annoying, since the common css properties often doesn't work on input fields or form in general. In any case, with a little more of time this is an issue that can be fully fixed.

3. FLEXBOX: while it's much more easy and effective than the regular float css property, it's still a mysterious tool to me. I definitely need some more practice with it, since I know it will be a super useful and time-saving tool once I'll have fully understood all its functionalities. 
 
---------------------------------

### **POST MVP**

- Project still in testing phase: [Recipe app with multiple tables](https://git.generalassemb.ly/SilviaColarossi/project-02)
    - Add a second table in the database for the ingredients.
    - Add a third table to match the recipes with the ingredients and add the quantities.
- Add pictures;
- Search bar with filters by category, name or ingredients;
- Save the recipes in a favorite recipe page
- Implement a public API to populate the DB

---------------------------------


