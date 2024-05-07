import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Logo from './assets/react.svg';
import Todos from './modules/todos/Todos';

import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Navigation />
      <h2>API End Point: {JSON.stringify(import.meta.env.VITE_APP_API_URL)}</h2>
      <Logo />
      <h1>React Template</h1>
      <Button variant="contained">Hello world</Button>
      <div id="detail">
        <Outlet />
      </div>

      <Todos />
    </>
  );
}

export default App;
