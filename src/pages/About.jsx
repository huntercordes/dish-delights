import AboutDescription from "../components/AboutDescription";
import DetailedAboutDescription from "../components/DetailedAboutDescription";
import styles from "../styles/Header.module.css";
import aboutimage from "../assets/aboutimage.jpeg";
function About() {
  return (
    <div className={styles["header-wrapper"]}>
    <h1 className={styles.header}>About DishDelights</h1>
  <div>
    <AboutDescription/>
  </div>
  <div>
    <DetailedAboutDescription></DetailedAboutDescription>
  </div>
  <img src={aboutimage} alt="Hunter" style={{ width: "30%", display: "block", margin: "20px auto" }}  />

  </div>
  );
}

export default About;
