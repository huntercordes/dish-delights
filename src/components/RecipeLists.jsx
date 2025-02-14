import React, { useState } from "react";
import recipes from "../data/RecipesData";
import RecipeSummary from "./RecipeSummary";
import styles from "../styles/RecipeLists.module.css";

function RecipeLists() {
  const [filter, setFilter] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.categories.some((category) =>
      category.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles["search-input"]}
      />
      <ul className={styles.list}>
        {filteredRecipes.map((recipe) => (
          <RecipeSummary key={recipe.id} {...recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeLists;
