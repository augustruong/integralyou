import React, { } from 'react';
import './App.css';
   
import {Routes, Route, useLocation} from 'react-router-dom';
   
import TopPage from "./pages/EndUser/TopPage";
import ProfilePage from "./pages/EndUser/ProfilePage";
import MessagePage from "./pages/EndUser/MessagePage";
import ProgramPage from "./pages/EndUser/ProgramPage";
import InterviewPage from './pages/EndUser/InterviewPage';
import BlogPage from './pages/EndUser/BlogPage';
import NewsPage from './pages/EndUser/NewsPage';

import BlogManagePage from "./pages/Admin/BlogManagePage";
import CreatePost from './pages/Admin/CreatePost';
import EditPost from './pages/Admin/EditPost';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome';
import LettersPage from "./pages/Admin/LettersPage";
import SubscribersPage from "./pages/Admin/SubscribersPage";

import Layout from './components/Layout';
import words from './words';
import FAQPage from './pages/EndUser/FAQPage';
import ContactPage from './pages/EndUser/ContactPage';
 
function App() {
    const token = localStorage.getItem('token')
    const { pathname } = useLocation();
    return (
        <Routes>
            <Route path={words.routes.user.top} element={Layout(TopPage)} />
            <Route path={words.routes.user.profile} element={Layout(ProfilePage)} />
            <Route path={words.routes.user.message} element={Layout(MessagePage)} />
            <Route path={words.routes.user.program} element={Layout(ProgramPage)} />
            <Route path={words.routes.user.interview} element={Layout(InterviewPage)} />
            <Route path={words.routes.user.blog} element={Layout(BlogPage)} />
            <Route path={words.routes.user.faq} element={Layout(FAQPage)} />
            <Route path={words.routes.user.news} element={Layout(NewsPage)} />
            <Route path={words.routes.user.contact} element={Layout(ContactPage)} />

  
            <Route path={words.routes.admin.login} element={<AdminLogin />} />
            <Route path={words.routes.admin.home} element={<AdminHome />} />
  
            <Route path={words.routes.admin.blogmanage} element={<BlogManagePage />} />
            <Route path={words.routes.admin.createpost} element={<CreatePost />} />
            <Route path={words.routes.admin.editpost} element={<EditPost />} />
            <Route path={words.routes.admin.lettersmanage} element={<LettersPage />} />
            <Route path={words.routes.admin.subscribersmanage} element={<SubscribersPage />} />

        </Routes>
    );
}
    
export default App;