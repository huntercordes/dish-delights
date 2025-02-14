import ContactInformation from "../components/ContactInformation";
import styles from "../styles/Header.module.css";
function Contact() {
  return(
    <div>
  <div className={styles["header-wrapper"]}>
    <h1 className={styles.header}>Contact Us</h1>
    </div>
  <ContactInformation></ContactInformation>
  </div>
  );
}

export default Contact;
