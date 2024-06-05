import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Logo from './assets/react.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos').then(response => {
      setTodos(response.data.todos);
      setCount(response.data.total);
    });
  }, []);

  return (
    <>
      <Navigation />
      <h2>API End Point: {JSON.stringify(import.meta.env.VITE_APP_API_URL)}</h2>
      <Logo />
      <h1>React Template</h1>
      <div id="detail">
        <Outlet />
      </div>

      <h1>Todo List</h1>
      <h2>Total Todos: {count}</h2>
      <div>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.todo} - Completed: {todo.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
