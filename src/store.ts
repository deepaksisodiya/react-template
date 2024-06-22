import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './modules/todos/todosReducer';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});

// Infer the `RootState` type from the store's state
export type RootState = ReturnType<typeof store.getState>;

// Optional: Export store's dispatch type for better typing in components
export type AppDispatch = typeof store.dispatch;
