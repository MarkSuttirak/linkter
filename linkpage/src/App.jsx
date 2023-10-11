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
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  const phoneverify = new URLSearchParams(search).get("phoneverify");
  const username = new URLSearchParams(search).get("username");
  const [Userverify, SetUserverify] = useState(phoneverify);
  const isPhoneVerified = Cookies.get('phoneverify') === 'true';


  /*useEffect(() => {

    if (isPhoneVerified) {
      navigate('/setup');
    }

    if (token) {
      Cookies.set('username', username);
      if (phoneverify == 'true') {
        Cookies.set('phoneverify', true);
        navigate('/register');
      }
      else {
        navigate('/setup');
      }

      if (Cookies.get('system_user') != 'yes') {
        setToken(token)
        navigate('/profile');
        window.location.reload(true);
      }


    }


    if (!getToken()) {
      navigate("/setup");
    }


  },[isPhoneVerified]);*/

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