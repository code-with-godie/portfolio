import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
// import Home from './pages/home/Home';
// import Resume from './pages/resume/Resume';
const App = () => {
  useEffect(() => {}, []);
  // return <Home />;
  return <RouterProvider router={router} />;
};

export default App;
