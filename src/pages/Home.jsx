
import AboutDescription from "../components/AboutDescription";
import styles from "../styles/Header.module.css";
import beneighs from "../assets/beneighs.jpg";
function Home() {
  return (
   
       <div className={styles["header-wrapper"]}>
  <h1 className={styles.header}>Welcome to DishDelights!</h1>
  <div>
<AboutDescription></AboutDescription>
</div>
<img 
  src={beneighs} 
  alt="French Donuts" 
  style={{ width: "50%", height: "50%", display: "block", margin: "20px auto" }} 
/>
</div>

);
}

export default Home;
