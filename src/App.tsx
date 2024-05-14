import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Logo from './assets/react.svg';

function App() {
  return (
    <>
      <Navigation />
      <h2>API End Point: {JSON.stringify(import.meta.env.VITE_APP_API_URL)}</h2>
      <Logo />
      <h1>React Template</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
