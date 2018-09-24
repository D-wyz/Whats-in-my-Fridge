import { FETCH_INGREDIENTS, FETCH_RECIPES, FETCH_CLICKED_RECIPE } from '../constants';

let initialState = {
    fetchedRecipes: null,
    clickedRecipe: null
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {

        case FETCH_INGREDIENTS:
            
            let recipes = action.data.data;
            console.log(recipes);
            
            updated.fetchedRecipes = recipes;

            return updated;
        case FETCH_RECIPES:

            // let fetchedTitleRecipe = action.data;

            // updated.fetchedRecipes = fetchedTitleRecipe;

            // return updated;
            let recipes2 = action.data.data;
            
            console.log(recipes2);

            updated.fetchedRecipes = recipes2;

            return updated;

        case FETCH_CLICKED_RECIPE:

            let clickedRecipe = action.data.data;

            updated.clickedRecipe = clickedRecipe;

            return updated
        default: 
            return state;
    }

}