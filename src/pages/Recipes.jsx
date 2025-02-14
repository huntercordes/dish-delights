import { Outlet } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Recipes() {
  return (
    <div>
      <div className={styles["header-wrapper"]}>
        <h1 className={styles.header}>Welcome to DishDelights Recipes</h1>
      </div>
      <Outlet /> {/* This will dynamically load RecipesList or RecipeDetails */}
    </div>
  );
}

export default Recipes;
