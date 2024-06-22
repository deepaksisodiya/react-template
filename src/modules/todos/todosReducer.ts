import { createSlice } from '@reduxjs/toolkit';

export interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface Todos {
  todoList: TodoItem[];
  total: number;
}

const initialState: Todos = {
  todoList: [],
  total: 1
};

export const todosSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todoList = action.payload.todos;
      state.total = action.payload.total;
    }
  }
});

export const { setTodos } = todosSlice.actions;

export default todosSlice.reducer;
