import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setTodos } from './todosReducer';
import { RootState } from './../../store';

function App() {
  const dispatch = useDispatch();
  const { todoList, total } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos').then(response => {
      dispatch(setTodos(response.data));
    });
  }, [dispatch]);

  return (
    <>
      <h1>Todo List</h1>
      <h2>Total Todos: {total}</h2>
      <div>
        {todoList.map((todoItem, index) => (
          <li key={index}>
            {todoItem.todo} - Completed: {todoItem.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
