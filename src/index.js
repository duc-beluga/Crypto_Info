import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './context/AppContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Team from './pages/Team';

// Routing
const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />
  },
  {
    path: "/team",
    element: <Team />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals();
