import Home from './RouteComponents/home';
import './TodoApp.css'
import SignIn from './RouteComponents/signIn.tsx'
import SignUp from './RouteComponents/signUp.tsx'


import Layout from './layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />,
    },
    {
      path: 'signin',
      element: <SignIn />,
    },
    {
      path: 'signup',
      element: <SignUp />
    }]
  },
  
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
