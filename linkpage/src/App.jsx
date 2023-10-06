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
import Setup from './pages/setup'
import apifetch from './assets/key'

function App() {
  return (
    <FrappeProvider 
    url={import.meta.env.VITE_ERP_URL}
    enableSocket={false}
    tokenParams={{
    useToken: true,
        token : () => {
          return `${apifetch.key}:${apifetch.secret}`
        },
        type: "token"

     }} 
     >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/edit-profile' element={<EditProfile />}/>
          <Route path='/view-profile' element={<ViewProfile />}/>
          <Route path='/setup' element={<Setup></Setup>}></Route>
        </Routes>
      </BrowserRouter>
    </FrappeProvider>
  )
}

export default App