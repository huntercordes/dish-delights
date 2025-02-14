import styles from "../styles/DetailedAboutDescription.module.css";
function DetailedAboutDescription() {
  return (
    <div className={styles["description-container"]}>
      <h3 className={styles["description-title"]}>Our History</h3>
      <p className={styles["description-text"]}>
        DishDelights was founded by Hunter Cordes in 2010, a passionate chef who
        wanted to bring people together through the joy of cooking. What started
        as a small food blog quickly grew into a global community of food lovers.
        Over the years, we've expanded to offer a wide variety of recipes, from
        simple weeknight dinners to intricate holiday feasts, with a focus on
        fresh ingredients and unique flavors.
      </p>
      <p className={styles["description-text"]}>
        Today, DishDelights is more than just a recipe website; it's a place
        where people can share their culinary experiences, learn new techniques,
        and connect with others who share their love for food.
      </p>
    </div>
  );
}

export default DetailedAboutDescription;
