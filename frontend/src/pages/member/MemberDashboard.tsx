import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Calendar, MessageCircle, Download, User, 
  Award, Heart, TrendingUp, Mail, Phone 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockNews, mockEvents } from '../../data/mockData';
import './MemberDashboard.css';

const MemberDashboard: React.FC = () => {
  const { user } = useAuth();

  // 取得會員專屬內容
  const memberNews = mockNews.filter(news => !news.isPublic).slice(0, 3);
  const memberEvents = mockEvents.filter(event => !event.isPublic).slice(0, 3);

  return (
    <div className="member-dashboard">
      <div className="page-container">
        {/* 歡迎區域 */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>歡迎回來，{user?.name}！</h1>
              <p>很高興看到您再次造訪會員專區</p>
            </div>
            <div className="welcome-avatar">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <div className="avatar-placeholder">
                  <User size={48} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 快速功能區 */}
        <div className="quick-actions">
          <h2>快速功能</h2>
          <div className="actions-grid">
            <Link to="/member/news" className="action-card">
              <div className="action-icon">
                <Bell size={32} />
              </div>
              <h3>會員快訊</h3>
              <p>查看最新的會員專屬消息</p>
            </Link>

            <Link to="/member/events" className="action-card">
              <div className="action-icon">
                <Calendar size={32} />
              </div>
              <h3>專屬活動</h3>
              <p>報名參加會員專屬活動</p>
            </Link>

            <Link to="/member/forum" className="action-card">
              <div className="action-icon">
                <MessageCircle size={32} />
              </div>
              <h3>討論論壇</h3>
              <p>與其他校友交流討論</p>
            </Link>

            <Link to="/member/documents" className="action-card">
              <div className="action-icon">
                <Download size={32} />
              </div>
              <h3>文件下載</h3>
              <p>下載會員專屬文件</p>
            </Link>
          </div>
        </div>

        <div className="dashboard-content">
          {/* 左側內容 */}
          <div className="left-column">
            {/* 會員資訊 */}
            <div className="card member-info-card">
              <div className="card-header">
                <h3>會員資訊</h3>
              </div>
              <div className="member-info">
                <div className="info-item">
                  <strong>姓名：</strong>
                  <span>{user?.name}</span>
                </div>
                <div className="info-item">
                  <strong>電子郵件：</strong>
                  <span>{user?.email}</span>
                </div>
                <div className="info-item">
                  <strong>畢業年份：</strong>
                  <span>{user?.graduationYear}年</span>
                </div>
                <div className="info-item">
                  <strong>系所：</strong>
                  <span>{user?.department}</span>
                </div>
                <div className="info-item">
                  <strong>會員狀態：</strong>
                  <span className={`status ${user?.isActive ? 'active' : 'inactive'}`}>
                    {user?.isActive ? '有效' : '待審核'}
                  </span>
                </div>
                {user?.membershipExpiry && (
                  <div className="info-item">
                    <strong>會員期限：</strong>
                    <span>
                      {user.membershipExpiry.getFullYear() === 2099 
                        ? '永久會員' 
                        : user.membershipExpiry.toLocaleDateString('zh-TW')
                      }
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 會員專屬消息 */}
            <div className="card">
              <div className="card-header">
                <h3>會員快訊</h3>
                <Link to="/member/news" className="view-all">查看全部</Link>
              </div>
              <div className="news-list">
                {memberNews.map((news) => (
                  <div key={news.id} className="news-item">
                    <div className="news-date">
                      {news.publishDate.toLocaleDateString('zh-TW')}
                    </div>
                    <h4>{news.title}</h4>
                    <p>{news.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側內容 */}
          <div className="right-column">
            {/* 統計資訊 */}
            <div className="stats-cards">
              <div className="stat-card">
                <div className="stat-icon">
                  <Award size={24} />
                </div>
                <div className="stat-content">
                  <h3>0</h3>
                  <p>參與活動</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Heart size={24} />
                </div>
                <div className="stat-content">
                  <h3>{user?.name === '鄭百喬' ? 'HKD 50,000' : 'HKD 0'}</h3>
                  <p>累計捐款</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="stat-content">
                  <h3>0年</h3>
                  <p>會員年資</p>
                </div>
              </div>
            </div>

            {/* 即將到來的活動 */}
            <div className="card">
              <div className="card-header">
                <h3>即將到來的活動</h3>
                <Link to="/member/events" className="view-all">查看全部</Link>
              </div>
              <div className="events-list">
                {memberEvents.map((event) => (
                  <div key={event.id} className="event-item">
                    <div className="event-date">
                      <span className="month">
                        {event.startDate.toLocaleDateString('zh-TW', { month: 'short' })}
                      </span>
                      <span className="day">{event.startDate.getDate()}</span>
                    </div>
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <p>📍 {event.location}</p>
                      <p>👥 {event.registeredCount}/{event.capacity} 人</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 聯絡資訊 */}
            <div className="card contact-card">
              <div className="card-header">
                <h3>需要協助？</h3>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={18} />
                  <span>alumni.bmed@gmail.com</span>
                </div>
                <div className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="m7 8 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="https://www.instagram.com/cuhk_bmedaa/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>@cuhk_bmedaa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard; 