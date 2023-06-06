import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/drinks" component={ Recipes } />
        {/* <Route path="/meals/:id-da-receita" component={RecipeDetails}/> */}
        {/* <Route path="/drinks/:id-da-receita" component={RecipeDetails}/> */}
        {/* <Route path="/meals/:id-da-receita/in-progress" component={RecipeInProgress}/> */}
        {/* <Route path="/drinks/:id-da-receita/in-progress" component={RecipeInProgress}/> */}
        {/* <Route path="/done-recipes" component={DoneRecipes}/> */}
        {/* <Route path="/favorite-recipes" component={FavoriteRecipes}/> */}
        {/* <Route path="/profile" component={Profile}/> */}
      </Switch>
    </div>
  );
}

export default Routes;
