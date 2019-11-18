import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>Logo tutaj (kiedys)</h2>
        <ul className={styles.links}>
          <li>

            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users/1">First user</Link>
          </li>
          <li>
            <Link to="/asdadasd">404</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;