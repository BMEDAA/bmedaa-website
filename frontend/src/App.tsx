import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// 公開頁面
import HomePage from './pages/public/HomePage';
import NewsPage from './pages/public/NewsPage';
import EventsPage from './pages/public/EventsPage';
import AboutPage from './pages/public/AboutPage';
import PublicationsPage from './pages/public/PublicationsPage';
import JoinPage from './pages/public/JoinPage';
import DataPage from './pages/public/DataPage';
import LinksPage from './pages/public/LinksPage';
import ContactPage from './pages/public/ContactPage';
import SpotlightPage from './pages/public/SpotlightPage';
import DonatePage from './pages/public/DonatePage';
import FAQPage from './pages/public/FAQPage';
import ForumPage from './pages/public/ForumPage';
import PrivacyPage from './pages/public/PrivacyPage';

// 認證頁面
import LoginForm from './components/auth/LoginForm';

// 會員頁面
import MemberDashboard from './pages/member/MemberDashboard';
import MemberNewsPage from './pages/member/MemberNewsPage';
import MemberEventsPage from './pages/member/MemberEventsPage';
import MemberForumPage from './pages/member/MemberForumPage';
import MemberDocumentsPage from './pages/member/MemberDocumentsPage';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              {/* 公開路由 */}
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/data" element={<DataPage />} />
              <Route path="/links" element={<LinksPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/spotlight" element={<SpotlightPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              
              {/* 認證路由 */}
              <Route path="/login" element={<LoginForm />} />
              
              {/* 會員專區路由 */}
              <Route path="/member" element={
                <ProtectedRoute>
                  <MemberDashboard />
                </ProtectedRoute>
              } />
              <Route path="/member/news" element={
                <ProtectedRoute>
                  <MemberNewsPage />
                </ProtectedRoute>
              } />
              <Route path="/member/events" element={
                <ProtectedRoute>
                  <MemberEventsPage />
                </ProtectedRoute>
              } />
              <Route path="/member/forum" element={
                <ProtectedRoute>
                  <MemberForumPage />
                </ProtectedRoute>
              } />
              <Route path="/member/documents" element={
                <ProtectedRoute>
                  <MemberDocumentsPage />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
