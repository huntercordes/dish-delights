import { useParams } from "react-router-dom";
import recipes from "../data/RecipesData"; // Import recipes data
import styles from "../styles/RecipeDetails.module.css";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{recipe.title}</h1>
      <h3 className={styles["section-title"]}>Ingredients:</h3>
      <ul className={styles.list}>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className={styles["section-title"]}>Steps:</h3>
      <ol className={styles.list}>
        {recipe.steps?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h4 className={styles.time}>Preparation Time: {recipe.time}</h4>
    </div>
  );
}

export default RecipeDetails;
