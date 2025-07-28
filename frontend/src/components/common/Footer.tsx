import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: '最新資訊', path: '/news' },
    { title: '活動', path: '/events' },
    { title: '加入校友會', path: '/join' },
    { title: '聯絡我們', path: '/contact' },
  ];

  const memberLinks = [
    { title: '會員中心', path: '/member' },
    { title: '會員快訊', path: '/member/news' },
    { title: '專屬活動', path: '/member/events' },
    { title: '討論論壇', path: '/member/forum' },
  ];

  const resourceLinks = [
    { title: '校友風采', path: '/spotlight' },
    { title: '出版刊物', path: '/publications' },
    { title: '常見問題', path: '/faq' },
    { title: '捐款與贊助', path: '/donate' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 主要內容區 */}
        <div className="footer-content">
          {/* 校友會資訊 */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">🎓</div>
              <div className="footer-logo-text">
                <h3>BMEDAA校友會</h3>
                <span>數學及數學教育課程校友會</span>
              </div>
            </div>
            <p className="footer-description">
              團結所有畢業於「香港中文大學數學及數學教育課程」的校友，
              加強守望相助精神及協助提高校友的專業水平。
            </p>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/cuhk_bmedaa/" 
                className="social-link" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* 快速連結 */}
          <div className="footer-section">
            <h4>快速連結</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 會員專區 */}
          <div className="footer-section">
            <h4>會員專區</h4>
            <ul className="footer-links">
              {memberLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 校友資源 */}
          <div className="footer-section">
            <h4>校友資源</h4>
            <ul className="footer-links">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div className="footer-section">
            <h4>聯絡我們</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>香港中文大學何添樓G/F</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>alumni.bmed@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版權區 */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} 香港中文大學數學及數學教育課程校友會. 版權所有.</p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">隱私政策</Link>
              <Link to="/terms" className="footer-bottom-link">使用條款</Link>
              <Link to="/sitemap" className="footer-bottom-link">網站地圖</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 