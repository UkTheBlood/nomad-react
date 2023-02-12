import { useState } from 'react';
import './App.css';

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }

    setTodos(currentArray => [todo, ...currentArray])
    // currentArray는 초기값, useState([])의 []을 가져옴

    setTodo("");

  };

  return (
    <>
      <div>
        <h1>My Todo ({todos.length})</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={todo}
            type="text"
            placeholder='Write your to do...' />
        </form>
        <button>Add todo</button>
        <hr />
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;