import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { 
  createBrowserRouter,
   RouterProvider
} from "react-router-dom";
import StudentCardList from './components/StudentCard'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Todo />
      </div>
    },
    {
      path:"/StudentCard",
      element:<StudentCardList />
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
