// Require the npm packages
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const recipeRouter = require('./routes/recipes');

// Set the port
const PORT = process.env.PORT || 3000;

// Start up express
const app = express();


// Set up the logger
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// tell the server where to look for static files
app.use(express.static(path.join(__dirname, 'public')));

// Set the views 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ROUTES */
app.use('/recipes', recipeRouter);

// Main route
// Get request handler for the home page '/'.
app.get('/', (req, res) => {
    res.render('index', {
        logoName: "Fork it!",
    });
});


/* PORT LISTENER */
app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});