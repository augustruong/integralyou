import React, { } from 'react';
import './App.css';
   
import {Routes, Route, useLocation} from 'react-router-dom';
   
import TopPage from "./pages/EndUser/TopPage";
import ProfilePage from "./pages/EndUser/ProfilePage";
import MessagePage from "./pages/EndUser/MessagePage";
import InterviewPage from './pages/EndUser/InterviewPage';
import BlogPage from './pages/EndUser/BlogPage';

import BlogManagePage from "./pages/Admin/BlogManagePage";
import CreatePost from './pages/Admin/CreatePost';
import EditPost from './pages/Admin/EditPost';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome';

import Layout from './components/Layout';
 
function App() {
    const token = localStorage.getItem('token')
    const { pathname } = useLocation();
    return (
        <Routes>
            <Route path="/" element={Layout(TopPage)} />
            <Route path="/profile" element={Layout(ProfilePage)} />
            <Route path="/message" element={Layout(MessagePage)} />
            <Route path="/program" element={Layout(ProfilePage)} />
            <Route path="/interview" element={Layout(InterviewPage)} />
            <Route path="/blog" element={Layout(BlogPage)} />
            <Route path="/faq" element={Layout(ProfilePage)} />
  
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/home" element={<AdminHome />} />
  
            <Route path="/admin/blogmanage" element={<BlogManagePage />} />
            <Route path="/admin/createpost" element={<CreatePost />} />
            <Route path="/admin/blogmanage/post/:id/edit" element={<EditPost />} />

        </Routes>
    );
}
    
export default App;