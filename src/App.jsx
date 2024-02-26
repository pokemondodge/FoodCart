import React, { useState } from 'react';
import { BrowserRouter,Route,Routes,MemoryRouter} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import UserLogin from './Component/UserLogin';
import AdminSignup from './Component/Adminsignup';
import ErrorPage from './Component/ErrorPage';
import AdminHomepage from './Component/AdminHomepage';
import Loading from './Component/Loading';
import Loading2 from './Component/Loading2';
import UserHomePage from './Component/UserHomePage';
import Loading3 from './Component/Loading3';
import AdminLogin from './Component/AdminLogin';

function App()
{
  return(<div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
      <Route path="/admin" element={<AdminLogin/>}/>
      <Route path="/user" element={<UserLogin/>}/>
      <Route path="/signup" element={<AdminSignup/>}/>
      <Route path="/signup/*" element={<ErrorPage/>}/>
      <Route path="/adminhome" element={<AdminHomepage/>}/>
      <Route path="/adminhome/*" element={<AdminHomepage/>}/>
      <Route path="/userhome" element={<UserHomePage/>}/>
      <Route path="/userhome/*" element={<UserHomePage/>}/>
      <Route path="/loading" element={<Loading/>}/>
      <Route path="/loading2" element={<Loading2/>}/>
      <Route path="/loading3" element={<Loading3/>}/>
    </Routes>
    </BrowserRouter>
  </div>);
}
export default App;