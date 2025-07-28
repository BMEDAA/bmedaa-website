import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen, Heart, ArrowRight, Award, TrendingUp } from 'lucide-react';
import { mockNews, mockEvents, mockAlumniSpotlight } from '../../data/mockData';
import './HomePage.css';

const HomePage: React.FC = () => {
  // 取得最新的公開內容
  const latestNews = mockNews.filter(news => news.isPublic).slice(0, 3);
  const upcomingEvents = mockEvents.filter(event => event.isPublic).slice(0, 3);
  const featuredAlumni = mockAlumniSpotlight.filter(alumni => alumni.isPublic).slice(0, 2);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>香港中文大學數學及數學教育課程校友會</h1>
            <div className="mission-statement">
              <p>本會的宗旨是團結所有畢業於「香港中文大學數學及數學教育課程」的校友，加強守望相助精神及協助提高校友的專業水平，並以其專業知識推動香港數學教育發展。</p>
            </div>
            <div className="hero-buttons">
              <Link to="/join" className="btn btn-primary">
                加入校友會
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                了解更多
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
              alt="校園景色" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <h3>100+</h3>
              <p>校友成員</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Calendar size={32} />
              </div>
              <h3>3+</h3>
              <p>年度活動</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <h3>2</h3>
              <p>服務年數</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Heart size={32} />
              </div>
              <h3>教育</h3>
              <p>推動發展</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>最新消息</h2>
            <Link to="/news" className="view-more">查看全部</Link>
          </div>
          <div className="news-grid">
            {latestNews.map((news) => (
              <article key={news.id} className="news-card">
                {news.imageUrl && (
                  <div className="news-image">
                    <img src={news.imageUrl} alt={news.title} />
                  </div>
                )}
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">{getCategoryName(news.category)}</span>
                    <span className="news-date">
                      {news.publishDate.toLocaleDateString('zh-TW')}
                    </span>
                  </div>
                  <h3>{news.title}</h3>
                  <p>{news.summary}</p>
                  <div className="news-tags">
                    {news.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>近期活動</h2>
            <Link to="/events" className="view-more">查看全部</Link>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <span className="month">{event.startDate.toLocaleDateString('zh-TW', { month: 'short' })}</span>
                  <span className="day">{event.startDate.getDate()}</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-meta">
                    <span className="event-location">📍 {event.location}</span>
                    <span className="event-capacity">
                      👥 {event.registeredCount}/{event.capacity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlight Section */}
      <section className="spotlight-section">
        <div className="container">
          <div className="section-header">
            <h2>校友風采</h2>
            <Link to="/spotlight" className="view-more">查看全部</Link>
          </div>
          <div className="spotlight-grid">
            {featuredAlumni.map((alumni) => (
              <div key={alumni.id} className="spotlight-card">
                <div className="spotlight-image">
                  <img src={alumni.imageUrl} alt={alumni.name} />
                </div>
                <div className="spotlight-content">
                  <h3>{alumni.name}</h3>
                  <p className="spotlight-position">{alumni.currentPosition}</p>
                  <p className="spotlight-company">{alumni.company}</p>
                  <p className="spotlight-achievement">{alumni.achievement}</p>
                  <div className="spotlight-meta">
                    <span>{alumni.graduationYear}級 {alumni.department}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>加入我們的大家庭</h2>
            <p>成為校友會會員，享受專屬服務與豐富資源</p>
            <div className="cta-features">
              <div className="feature">
                <BookOpen size={24} />
                <span>專業發展</span>
              </div>
              <div className="feature">
                <Users size={24} />
                <span>人脈網絡</span>
              </div>
              <div className="feature">
                <Calendar size={24} />
                <span>專屬活動</span>
              </div>
              <div className="feature">
                <TrendingUp size={24} />
                <span>教育推動</span>
              </div>
            </div>
            <Link to="/join" className="btn btn-primary btn-large">
              立即加入
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// 輔助函數：轉換分類名稱
const getCategoryName = (category: string) => {
  switch (category) {
    case 'announcement':
      return '公告';
    case 'achievement':
      return '成就';
    case 'news':
      return '新聞';
    default:
      return '消息';
  }
};

export default HomePage; 