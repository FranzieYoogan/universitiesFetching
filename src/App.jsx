import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Home from './Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <RouterProvider router = {router}>
    <Header></Header>
    </RouterProvider>
    

    </>
  )
}

export default App
