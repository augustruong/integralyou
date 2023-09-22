import React, { } from 'react';
import './App.css';
   
import {BrowserRouter, Routes, Route} from 'react-router-dom';
   
import ListUserPage from "./pages/ListUserPage";
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import MyCKEditor from './pages/MyCKEditor';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
 
function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
      <h1 className="page-header text-center">Blog App</h1>
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListUserPage />} />
            <Route path="/addnewuser" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
            <Route path="/editor" element={<MyCKEditor />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            {token &&
              <Route path="/admin/home" element={<AdminHome />} />
            }

        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
    
export default App;