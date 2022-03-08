import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export const Routes = () => {
  return useRoutes([
    {path: '/', element: <SignIn />},
    {path: '/home', element: <Home /> }
  ]);
}