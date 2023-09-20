import React, { } from 'react';
import './App.css';
   
import {BrowserRouter, Routes, Route} from 'react-router-dom';
   
import ListUserPage from "./pages/ListUserPage";
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import Editor from './pages/MyCKEditor';
 
function App() {
  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
      <h1 className="page-header text-center">Blog App</h1>
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListUserPage />} />
            <Route path="/addnewuser" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
            <Route path="/editor" element={<Editor />} />

        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
    
export default App;