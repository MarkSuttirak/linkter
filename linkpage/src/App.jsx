import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Profile from './pages/profile'
import EditProfile from './pages/edit-profile'

function App() {
  return (
    <FrappeProvider url={"https://linkter.vercel.app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/edit-profile' element={<EditProfile />}/>
        </Routes>
      </BrowserRouter>
    </FrappeProvider>
  )
}

export default App