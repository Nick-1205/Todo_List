import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoInput(props) {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <span>New Todo: </span>
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          const todo = event.target.value;
          setTodo(todo);
        }}
      ></input>
      <button
        onClick={() => {
          props.onClicked && props.onClicked(todo);
        }}
      >
        Add
      </button>
    </div>
  );
}
