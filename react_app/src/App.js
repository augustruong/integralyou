import React, { } from 'react';
import './App.css';
   
import {Routes, Route, useLocation} from 'react-router-dom';
   
import TopPage from "./pages/EndUser/TopPage";
import ProfilePage from "./pages/EndUser/ProfilePage";
import MessagePage from "./pages/EndUser/MessagePage";
import InterviewPage from './pages/EndUser/InterviewPage';
import BlogPage from './pages/EndUser/BlogPage';

import BlogManagePage from "./pages/Admin/BlogManagePage";
import CreateUser from './pages/Admin/CreateUser';
import EditUser from './pages/Admin/EditUser';
import MyCKEditor from './pages/Admin/MyCKEditor';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome';

import Header from "./components/Header"
import Footer from "./components/Footer"

const hideLayoutPaths = ["/admin/login", "/admin/home", "/admin/blogmanage", "/editor", "/addnewuser", "user/:id/edit"]
 
function App() {
    const token = localStorage.getItem('token')
    const { pathname } = useLocation();
    return (
      <>
        {!hideLayoutPaths.includes(pathname) && (<Header />)}
        <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/program" element={<ProfilePage />} />
            <Route path="/interview" element={<InterviewPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<ProfilePage />} />
  
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/home" element={<AdminHome />} />
  
            <Route path="/admin/blogmanage" element={<BlogManagePage />} />
            <Route path="/editor" element={<MyCKEditor />} />
  
            <Route path="/addnewuser" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
        {!hideLayoutPaths.includes(pathname) && (<Footer />)}
      </>
    );
}
    
export default App;