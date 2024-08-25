import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import AppLayout from './layout/AppLayout';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);
