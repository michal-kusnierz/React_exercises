import React, {Fragment} from "react";
import styles from "./TodoApp.module.css";
import uuid from "uuid";

const Counter = () => {
  return (
    <span className={styles.todoCount}>
      <strong>0</strong> item left
    </span>
  );
};

const Clear = () => {
  return <button className={styles.clearCompleted}>Clear completed</button>;
};

const Filters = () => {
  return (
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
  );
};
const Controls = () => {
  return (
    <footer className={styles.footer}>
      <Counter />
      <Filters />
      <Clear />
    </footer>
  );
};

const TodoItem = props => {
  const { isDone, label } = props;
  return (
    <li className={isDone ? styles.completed : ""}>
      <div className={styles.view}>
        <input className={styles.toggle} type="checkbox" checked={isDone} />
        <label>{label}</label>
        <button className={styles.destroy}></button>
      </div>
      <input className={styles.edit} value="Create a TodoMVC template" />
    </li>
  );
};

const TodoList = () => {
  const todos = [
    {
      id: uuid.v4(),
      isDone: true,
      label: "Finish components extraction"
    },
    {
      id: uuid.v4(),
      isDone: true,
      label: "a"
    },
    {
      id: uuid.v4(),
      isDone: true,
      label: "b"
    },
    {
      id: uuid.v4(),
      isDone: true,
      label: "Finish components extraction"
    }
  ];
  return (
    <ul className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} isDone={todo.isDone} label={todo.label} />
      ))}
    </ul>
  );
};

const TodoInput = () => {
  return (
    <input
      className={styles.newTodo}
      placeholder="What needs to be done?"
      autofocus
    />
  );
};

const ToggleAll = () => {
  return (
    <Fragment>
      <input id="toggle-all" className={styles.toggleAll} type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </Fragment>
  );
};


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
        </section>
        <ToggleAll />
        <TodoList />
        <Controls />
      </section>
      <footer className={styles.info}>
        <p>Double-click to edit a todo</p>
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="http://todomvc.com">you</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
};

export default TodoApp;
