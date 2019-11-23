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
                color: "white",
                textDecoration: "none"
              }}
              to="/" exact
            >
              Home
            </NavLink>
          </li>
          <li>

          <NavLink
              activeStyle={{
                color: "white",
                textDecoration: "none"
              }}
              to="/users/1"
            >
              First user
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={"active-link"} to="/todo-app">
              Todo App
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={"active-link"} to="/photos-app">
              Photos App
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                color: "white",
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