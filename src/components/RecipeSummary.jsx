import { Link } from "react-router-dom";
import styles from "../styles/RecipeSummary.module.css";

function RecipeSummary({ id, title, categories, time }) {
  return (
    <li className={styles["recipe-card"]}>
      <h3 className={styles["recipe-title"]}>{title}</h3>
      <p className={styles["recipe-info"]}>Categories: {categories.join(", ")}</p>
      <p className={styles["recipe-info"]}>Time: {time}</p>
      <Link to={`/recipes/${id}`} className={styles["recipe-link"]}>
        View Details
      </Link>
    </li>
  );
}

export default RecipeSummary;
