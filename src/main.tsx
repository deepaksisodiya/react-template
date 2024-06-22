import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes/Routes.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { store } from './store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
