import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const LinksPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>常用連結</h1>
        <p>香港中文大學數學及數學教育校友會相關連結</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h3>🔗 官方社交媒體</h3>
        </div>
        <div className="card-content">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a 
              href="https://www.instagram.com/cuhk_bmedaa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                background: 'linear-gradient(135deg, #E4405F, #C13584)',
                color: 'white',
                padding: '20px 30px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(228, 64, 95, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(228, 64, 95, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(228, 64, 95, 0.3)';
              }}
            >
              <Instagram size={32} />
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '700' }}>Instagram</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>@cuhk_bmedaa</div>
              </div>
              <ExternalLink size={20} />
            </a>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <p style={{ color: '#7f8c8d', lineHeight: 1.6 }}>
              關注我們的Instagram帳號，獲取最新活動資訊、校友動態和數學教育相關內容。
            </p>
          </div>
        </div>
      </div>

      {/* 其他連結區域 */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-header">
          <h3>🏫 相關機構</h3>
        </div>
        <div className="card-content">
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ color: '#7f8c8d', fontSize: '1.1rem', lineHeight: 1.6 }}>
              更多相關連結正在整理中，敬請期待...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage; 