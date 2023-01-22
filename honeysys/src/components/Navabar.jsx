import React, { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <h3 className={styles.navbar_logo} >Honey<i>SYS</i> Store</h3>
      </div>
      <div>
        <h3 className={styles.navbar_prod}><FaShoppingCart  color="darkslategray" /></h3>
      </div>
    </nav>
  );
};

export default Navbar;
