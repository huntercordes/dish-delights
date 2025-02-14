import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle burger menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Reset the menu state when the window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close the menu if the screen is large enough
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means it runs once when the component mounts


  return (
    <nav className={styles.navbar}>
      <h2>DishDelights</h2>
      
      {/* Burger icon visible only on small screens */}
      <div className={styles["burger-icon"]} onClick={toggleMenu}>
        &#9776; {/* Burger icon */}
      </div>
      
      {/* Navbar links, show when menu is open */}
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
