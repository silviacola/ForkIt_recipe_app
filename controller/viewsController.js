module.exports = {
    
        show404(err, req, res, next) {
            res.sendStatus(404);
        },
    
        // error 406: Not acceptable client error
            // when the server cannot send data in a format requested in the Accept header.
        show406(err, req, res, next) {
            res.sendStatus(406);
        },
    
        showRecipes(req, res) {
            console.log(res.locals.recipes[0].rec_name)
            res.render('recipes/all-recipes', {
                data: res.locals.recipes,
                logoName: "Fork it!",
            });
        },
    
        showOne(req, res) {
            res.render('recipes/single-recipe', {
              data: res.locals.recipe,
              logoName: "Fork it!",
            });
          },
    
        showAddForm(req, res) {
        res.render('recipes/add-recipe', {
            data: res.locals.recipe,
            logoName: "Fork it!",
        });
        },
    
        showEditForm(req, res) {
        // console.log(res.locals.recipe);
        res.render('recipes/edit-recipe', {
            data: res.locals.recipe,
            logoName: "Fork it!",
        });
        },
    
        handleCreate(req, res) {
        res.redirect('/recipes');
        },
    
        handleUpdate(req, res) {
        /* need to update the body so it has an ID */
        res.redirect(`/recipes/${req.params.id}`);
        },
    
        handleDelete(req, res) {
        res.redirect('/recipes');
        },
    
    };