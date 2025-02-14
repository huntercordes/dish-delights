import React, { useState, useEffect } from "react";
import styles from "../styles/FavoriteRecipes.module.css";
// Helper function to get saved recipes from localStorage
const getSavedRecipes = () => {
  const savedRecipes = localStorage.getItem("favoriteRecipes");
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

function FavoriteRecipes() {
  const [recipes, setRecipes] = useState(getSavedRecipes());
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [time, setTime] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Will save recipes to localStorage whenever they change
    localStorage.setItem("favoriteRecipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      // Edit existing recipe
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === editId
          ? { ...recipe, title, ingredients: ingredients.split(","), steps: steps.split(","), time }
          : recipe
      );
      setRecipes(updatedRecipes);
      setEditId(null);
    } else {
      // Add new recipe
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(","),
        steps: steps.split(","),
        time,
      };
      setRecipes([...recipes, newRecipe]);
    }

    setTitle("");
    setIngredients("");
    setSteps("");
    setTime("");
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const handleEdit = (id) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    setTitle(recipeToEdit.title);
    setIngredients(recipeToEdit.ingredients.join(","));
    setSteps(recipeToEdit.steps.join(","));
    setTime(recipeToEdit.time);
    setEditId(id);
  };

  return (
    <div className={styles["favorite-recipes-container"]}>
      <form onSubmit={handleSubmit} className={styles["recipe-form"]}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          placeholder="Steps (comma separated)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preparation Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">{editId ? "Update Recipe" : "Add Recipe"}</button>
      </form>

      {/* List of saved recipes */}
      <h2 className={styles["recipe-header"]}>Saved Recipes</h2>
      <ul className={styles["recipe-list"]}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Steps: {recipe.steps.join(", ")}</p>
            <p>Time: {recipe.time}</p>
            <button onClick={() => handleEdit(recipe.id)}>Edit</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteRecipes;
