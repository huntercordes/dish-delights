import FavoriteRecipes from "../components/FavoriteRecipes";  // Import the component for the recipe form and list
import styles from "../styles/Header.module.css";


function Favorites() {
  return (
    <div>
    <div className={styles["header-wrapper"]}>
      <h1 className={styles.header}>My Favorite Recipes</h1>
      </div>
      <FavoriteRecipes />  {/* The FavoriteRecipes component handles the list and form */}
    </div>
  );
}

export default Favorites;
