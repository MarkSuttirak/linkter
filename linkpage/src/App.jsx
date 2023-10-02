import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Profile from './pages/profile'
import EditProfile from './pages/edit-profile'
import ViewProfile from './pages/view-profile'

function App() {
  return (
    <FrappeProvider tokenParams={{
    useToken: true,
        token : () => {
          return `7daf8e4eaf10ba8:d74f3a1f48a6af2`
        },
        type: "token"

     }} socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}
     >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/edit-profile' element={<EditProfile />}/>
          <Route path='/view-profile' element={<ViewProfile />}/>
        </Routes>
      </BrowserRouter>
    </FrappeProvider>
  )
}

export default App