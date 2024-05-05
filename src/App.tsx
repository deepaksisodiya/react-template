import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <h1>React Template</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
