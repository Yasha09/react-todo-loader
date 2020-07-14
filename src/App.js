import React, { useState, useEffect, lazy } from "react";
import TodoList from "./Todo/TodoList";
import MyContext from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./Todo/AddTodo")), 2000);
    })
);

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 5000);
      });
  }, []);

  const handleChecked = (id) => {
    setTodos(
      todos.map((item) => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <MyContext.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <h1>React Todo</h1>
        <Modal />
        <React.Suspense fallback={<h3>Loading...</h3>}>
          <AddTodo createTodo={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} handleChecked={handleChecked} />
        ) : loading ? null : (
          "The end for todo"
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
