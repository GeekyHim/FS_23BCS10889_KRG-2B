import { useState } from 'react';
import * as ReactDOM from "react-dom";
import { 
  createBrowserRouter,
   RouterProvider
} from "react-router-dom";
import Dashboard from './compenents/Dashboard';
import About from './compenents/About';
import Home from './compenents/home';
import Login from './compenents/Login';
import SignUp from './compenents/SignUp';
import Navbar from './compenents/Navbar';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Home />
      </div>
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path:"/signup",
      element: <SignUp />
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]
)




function App() {

  return (
    <>
       <RouterProvider router={router} />

    </>
  )
}

export default App
