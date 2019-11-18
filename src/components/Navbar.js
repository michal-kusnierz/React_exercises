import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>Logo tutaj (kiedys)</h2>
        <ul className={styles.links}>
          <li>
            <NavLink
              activeStyle={{
                color: "gold",
                textDecoration: "none"
              }}
              to="/" exact
            >
              Home
            </NavLink>

          <li>

          <NavLink
              activeStyle={{
                color: "gold",
                textDecoration: "none"
              }}
              to="/users/1"
            >
              First user
            </NavLink>
          </li>
          <li>
          <NavLink
              activeStyle={{
                color: "gold",
                textDecoration: "none"
              }}
              to="/asdadasd"
            >
              404
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;