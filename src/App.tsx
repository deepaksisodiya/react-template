import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <h2>API End Point: {JSON.stringify(import.meta.env.VITE_APP_API_URL)}</h2>
      <h1>React Template</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
