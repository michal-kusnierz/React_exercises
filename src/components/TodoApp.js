import React from "react";
import styles from "./TodoApp.module.css";

const TodoApp = () => {
  return (
    <div>
      <section className={styles.todoapp}>
        <header className={styles.header}>
          <h1>todos</h1>
          <input
            className={styles.newTodo}
            placeholder="What needs to be done?"
            autofocus
          />
        </header>
        <section className={styles.main}>
          <input id="toggle-all" className={styles.toggleAll} type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className={styles.todoList}>
            <li className={styles.completed}>
              <div className={styles.view}>
                <input className={styles.toggle} type="checkbox" checked />
                <label>Taste JavaScript</label>
                <button className={styles.destroy}></button>
              </div>
              <input
                className={styles.edit}
                value="Create a TodoMVC template"
              />
            </li>
            <li>
            <div className={styles.view}>
              <input className={styles.toggle} type="checkbox" />
                <label>Buy a unicorn</label>
                <button className={styles.destroy}></button>
              </div>
              <input className={styles.edit} value="Rule the web" />
            </li>
          </ul>
        </section>
        <footer className={styles.footer}>
          <span className={styles.todoCount}>
            <strong>0</strong> item left
          </span>
          <ul className={styles.filters}>
            <li>
            <a className={styles.selected} href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className={styles.clearCompleted}>Clear completed</button>
        </footer>
      </section>
      <footer className={styles.info}>
        <p>Double-click to edit a todo</p>
        <p>
          Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        <p>
          Created by <a href="http://todomvc.com">you</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
};

export default TodoApp;
