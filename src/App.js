import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './pages/NotFound';
import Photos from './pages/Photos';
import Photo from './pages/Photo';

export const ThemeContext = createContext('light');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/photos',
    element: <Photos />,
  },
  {
    path: '/photos/:photoId',
    element: <Photo />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
