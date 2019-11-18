import React from "react";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>Logo tutaj (kiedys)</h2>
        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/users/1">First user</a>
          </li>
          <li>
            <a href="/asdadasd">404</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;