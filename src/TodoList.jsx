import { useState } from "react";
import { css } from "@emotion/css";

export default function TodoList(props) {
  return (
    <div className="App">
      <EntryList
        todos={props.todos}
        onChecked={props.onChecked}
        onDelete={props.onDelete}
        filterFunktion={(todo) => !todo.done}
      ></EntryList>

      <hr style={{ width: "100%" }} />

      <EntryList
        todos={props.todos}
        onChecked={props.onChecked}
        onDelete={props.onDelete}
        filterFunktion={(todo) => todo.done}
      ></EntryList>
    </div>
  );
}

function EntryList(props) {
  return (
    <div>
      {props.todos.filter(props.filterFunktion).map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(event) => {
              const checked = event.target.checked;
              props.onChecked && props.onChecked(checked, todo.id);
            }}
          ></input>
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => props.onDelete && props.onDelete(todo.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
