import { useState, useEffect } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  /* const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData
      ? JSON.parse(localData)
      : [{ text: "do something", done: false, id: "TODO1" }];
  });*/

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("todos");
    if (localData) {
      setTodos(JSON.parse(localData));
    }
  }, []);

  return (
    <div className="App">
      <TodoInput
        onClicked={(todo) =>
          setTodos((oldTodos) => {
            const newTodos = [
              ...oldTodos,
              {
                text: todo,
                done: false,
                id: (Date.now() * Math.random()).toString(),
              },
            ];
            save(newTodos);
            return newTodos;
          })
        }
      ></TodoInput>
      <TodoList
        todos={todos}
        onChecked={(done, id) => {
          setTodos((oldTodos) => {
            const newTodos = oldTodos.map((todo) =>
              todo.id === id ? Object.assign(todo, { done }) : todo,
            );
            save(newTodos);
            return newTodos;
          });
        }}
        onDelete={(todoId) => {
          setTodos((oldTodos) => {
            const newTodos = oldTodos.filter((todo) => todo.id !== todoId);
            save(newTodos);
            return newTodos;
          });
        }}
      ></TodoList>
    </div>
  );
}

export default App;

function save(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
