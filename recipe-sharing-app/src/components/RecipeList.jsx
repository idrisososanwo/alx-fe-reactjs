import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link to={`/recipes/${recipe.id}`}>View Details</Link>

          <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;