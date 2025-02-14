import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle burger menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Resets the menu state when the window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); 
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav className={styles.navbar}>
      <h2>DishDelights</h2>
      
     
      <div className={styles["burger-icon"]} onClick={toggleMenu}>
        &#9776; {/* Burger icon */}
      </div>
      
      <ul className={isOpen ? `${styles.navbarItems} ${styles.open}` : styles.navbarItems}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
