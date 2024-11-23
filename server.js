const express = require ('express');
const db = require('./db');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRouter = require('./routes/randomRecipe.routes');

const app = express();

app.use('/recipes', recipeRouter);
app.use('/ingredients', ingredientRouter);
app.use('/fullRecipes', fullRecipesRouter);
app.use('/random', randomRouter);

app.listen(3000, () => {
    console.log('Server running, port 3000.');
});