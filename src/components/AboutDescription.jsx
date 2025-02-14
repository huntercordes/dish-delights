import styles from "../styles/AboutDescription.module.css";
function AboutDescription() {
  return (
    <div className={styles["description-container"]}>
      <p className={styles["description-text"]}>
        DishDelights is a vibrant community dedicated to uniting food lovers
        from around the globe. With a vast collection of recipes, DishDelights
        offers a diverse range of dishes to suit every taste and dietary
        preference.
      </p>
      <p className={styles["description-text"]}>
        Our mission is to make cooking at home easy, fun, and accessible for
        everyone. Whether you're a seasoned chef or just starting in the kitchen,
        we have something for you!
      </p>
      <p className={styles["description-text"]}>
        Explore our extensive recipe library, save your favorite dishes, and
        join the community of home cooks who share a passion for great food.
      </p>
    </div>
  );
}

export default AboutDescription;
