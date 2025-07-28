import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, Home, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockNavigation, mockMemberNavigation } from '../../data/mockData';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'public' | 'member'>('public');
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setActiveSection('public');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionChange = (section: 'public' | 'member') => {
    setActiveSection(section);
  };

  const currentNavigation = activeSection === 'public' ? mockNavigation : mockMemberNavigation;

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo 區域 */}
        <Link to="/" className="logo">
          <div className="logo-icon">🎓</div>
          <div className="logo-text">
            <h1>BMEDAA</h1>
            <span>數學及數學教育課程校友會</span>
          </div>
        </Link>

        {/* 桌面版導覽選單 */}
        <nav className="desktop-nav">
          {/* 區域切換按鈕 */}
          <div className="section-toggle">
            <button
              onClick={() => handleSectionChange('public')}
              className={`section-btn ${activeSection === 'public' ? 'active' : ''}`}
            >
              <Home size={16} />
              公開專區
            </button>
            {isAuthenticated && (
              <button
                onClick={() => handleSectionChange('member')}
                className={`section-btn ${activeSection === 'member' ? 'active' : ''}`}
              >
                <Users size={16} />
                會員專區
              </button>
            )}
          </div>

          {/* 主要導覽選單 */}
          <ul className="nav-list">
            {currentNavigation.map((item) => {
              if (!item.isPublic && !isAuthenticated) return null;
              
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 使用者區域 */}
        <div className="user-area">
          {isAuthenticated ? (
            <div className="user-menu">
              <div className="user-info">
                {user?.avatar && (
                  <img src={user.avatar} alt={user.name} className="user-avatar" />
                )}
                <span className="user-name">{user?.name}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <LogOut size={16} />
                登出
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">登入</Link>
              <Link to="/register" className="register-btn">註冊</Link>
            </div>
          )}
        </div>

        {/* 行動版選單按鈕 */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 行動版選單 */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {/* 區域切換 */}
          <div className="mobile-section-toggle">
            <button
              onClick={() => handleSectionChange('public')}
              className={`mobile-section-btn ${activeSection === 'public' ? 'active' : ''}`}
            >
              <Home size={16} />
              公開專區
            </button>
            {isAuthenticated && (
              <button
                onClick={() => handleSectionChange('member')}
                className={`mobile-section-btn ${activeSection === 'member' ? 'active' : ''}`}
              >
                <Users size={16} />
                會員專區
              </button>
            )}
          </div>

          {/* 行動版導覽項目 */}
          <ul className="mobile-nav-list">
            {currentNavigation.map((item) => {
              if (!item.isPublic && !isAuthenticated) return null;
              
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* 行動版使用者區域 */}
          <div className="mobile-user-area">
            {isAuthenticated ? (
              <div className="mobile-user-info">
                <div className="mobile-user-details">
                  {user?.avatar && (
                    <img src={user.avatar} alt={user.name} className="mobile-user-avatar" />
                  )}
                  <div>
                    <div className="mobile-user-name">{user?.name}</div>
                    <div className="mobile-user-dept">{user?.department}</div>
                  </div>
                </div>
                <button onClick={handleLogout} className="mobile-logout-btn">
                  <LogOut size={16} />
                  登出
                </button>
              </div>
            ) : (
              <div className="mobile-auth-buttons">
                <Link to="/login" className="mobile-login-btn" onClick={() => setIsMenuOpen(false)}>
                  登入
                </Link>
                <Link to="/register" className="mobile-register-btn" onClick={() => setIsMenuOpen(false)}>
                  註冊
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 