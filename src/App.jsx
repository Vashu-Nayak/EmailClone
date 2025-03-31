import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Mail from './components/Mail'
import Inbox from './components/Inbox'
import SendMail from './components/SendMail'
import Login from './components/Login'
import { useSelector } from 'react-redux'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]
  }
])

function App() {
  
  const {user}=useSelector(store=>store.appSlice)
  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        {
          !user ? (
            <Login />
          ) : (
            <>
              <Navbar />
              <RouterProvider router={router} />
              <div className='absolute w-[30%] bottom-0 right-20 z-10'>
                <SendMail />
              </div>
            </>
          )
        }

      </div>
    </>
  )
}

export default App
