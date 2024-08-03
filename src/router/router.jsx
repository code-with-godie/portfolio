import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Work from '../pages/work/Work';
import Contact from '../pages/contacts/Contacts';
import AppLayout from './layout/AppLayout';
import Resume from '../pages/resume/Resume';
import Services from '../pages/services/Services';
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
        path: '/work',
        element: <Work />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);
