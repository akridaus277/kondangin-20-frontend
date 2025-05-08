import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing/landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  // Nanti tambahkan path lainnya: login, register, dashboard, dll
]);
