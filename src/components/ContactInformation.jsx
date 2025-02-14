import styles from "../styles/ContactInformation.module.css";
function ContactInformation() {
  return (
    <div className={styles["contact-container"]}>
      <p>If you have any questions or comments, feel free to reach out!</p>
      
      <h3>Email:</h3>
      <p>support@dishdelights.com</p>
      
      <h3>Phone:</h3>
      <p>(123) 456-7890</p>

      <h3>Follow Us:</h3>
      <p>
        <a href="https://facebook.com/dishdelights" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <br />
        <a href="https://twitter.com/dishdelights" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </p>
    </div>
  );
}

export default ContactInformation;
