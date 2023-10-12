import { useState, useEffect } from 'react'
import './App.scss'
import { FrappeProvider } from 'frappe-react-sdk'
import { Routes, Route, useNavigate, useLocation  } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Profile from './pages/profile'
import EditProfile from './pages/edit-profile'
import ViewProfile from './pages/view-profile'
import Setup from './pages/setup'
import { getToken, setToken } from "./utils/helper";
import Cookies from 'js-cookie';

function App() {

  const navigate = useNavigate();


  useEffect(() => {

    if (!getToken()) {
      navigate("/setup");
    }else{
      navigate('/profile')
    }


  },[]);

  return (
    <FrappeProvider 
    url={import.meta.env.VITE_ERP_URL}
    enableSocket={false}
    tokenParams={{
      type: "token",
      useToken: true,
      token: getToken,

     }} 
     >
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/edit-profile' element={<EditProfile />}/>
          <Route path='/view-profile' element={<ViewProfile />}/>
          <Route path='/setup' element={<Setup></Setup>}></Route>
        </Routes>
  
    </FrappeProvider>
  )
}

export default App