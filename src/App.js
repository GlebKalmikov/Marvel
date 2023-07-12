import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './pages/NotFound';
import Photos from './pages/Photos';
import Photo from './pages/Photo';
import About from './pages/About';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Comics from './pages/Comics';

export const ThemeContext = createContext('light');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/comics',
    element: <Comics />,
  },
  {
    path: '/comics/:comicId',
    element: <Photo />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '/characters/:characterId',
    element: <Character />,
  },
  {
    path: '/about',
    element: <About />,
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
