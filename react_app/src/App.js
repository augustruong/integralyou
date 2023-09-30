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
import words from './words';
 
function App() {
    const token = localStorage.getItem('token')
    const { pathname } = useLocation();
    return (
        <Routes>
            <Route path={words.routes.user.top} element={Layout(TopPage)} />
            <Route path={words.routes.user.profile} element={Layout(ProfilePage)} />
            <Route path={words.routes.user.message} element={Layout(MessagePage)} />
            <Route path={words.routes.user.program} element={Layout(ProfilePage)} />
            <Route path={words.routes.user.interview} element={Layout(InterviewPage)} />
            <Route path={words.routes.user.blog} element={Layout(BlogPage)} />
            <Route path={words.routes.user.faq} element={Layout(ProfilePage)} />
  
            <Route path={words.routes.admin.login} element={<AdminLogin />} />
            <Route path={words.routes.admin.home} element={<AdminHome />} />
  
            <Route path={words.routes.admin.blogmanage} element={<BlogManagePage />} />
            <Route path={words.routes.admin.createpost} element={<CreatePost />} />
            <Route path={words.routes.admin.editpost} element={<EditPost />} />

        </Routes>
    );
}
    
export default App;