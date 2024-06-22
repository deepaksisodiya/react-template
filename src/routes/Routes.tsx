import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import About from '../modules/about/About.tsx';
import Contact from '../modules/contact/Contact.tsx';
import ErrorPage from './ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

export default router;
