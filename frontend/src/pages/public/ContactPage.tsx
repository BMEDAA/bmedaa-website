import React from 'react';
import { MapPin, Mail, Instagram, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>聯絡我們</h1>
        <p>香港中文大學數學及數學教育課程校友會聯絡資訊</p>
      </div>
      
      <div className="grid grid-2" style={{ gap: '30px' }}>
        {/* 聯絡資訊卡片 */}
        <div className="card">
          <div className="card-header">
            <h3>📍 聯絡資訊</h3>
          </div>
          <div className="card-content">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* 地址 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <MapPin size={24} style={{ color: '#667eea', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>辦公地址</h4>
                  <p style={{ margin: 0, color: '#5a6c7d', lineHeight: 1.6 }}>
                    香港中文大學何添樓G/F
                  </p>
                </div>
              </div>

              {/* 電子郵件 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <Mail size={24} style={{ color: '#667eea', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>電子郵件</h4>
                  <a 
                    href="mailto:alumni.bmed@gmail.com"
                    style={{ 
                      color: '#667eea', 
                      textDecoration: 'none',
                      fontSize: '1.1rem'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    alumni.bmed@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <Instagram size={24} style={{ color: '#667eea', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>Instagram</h4>
                  <a 
                    href="https://www.instagram.com/cuhk_bmedaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#667eea', 
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    @cuhk_bmedaa
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 聯絡表單 */}
        <div className="card">
          <div className="card-header">
            <h3>💬 發送訊息</h3>
          </div>
          <div className="card-content">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
                  姓名 *
                </label>
                <input 
                  type="text" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ecf0f1',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
                  電子郵件 *
                </label>
                <input 
                  type="email" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ecf0f1',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
                  主旨
                </label>
                <input 
                  type="text"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ecf0f1',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>
                  訊息內容 *
                </label>
                <textarea 
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ecf0f1',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                發送訊息
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 額外資訊 */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-content" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>🕒 回覆時間</h3>
          <p style={{ color: '#7f8c8d', lineHeight: 1.6, fontSize: '1rem' }}>
            我們會在收到您的訊息後 2-3 個工作日內回覆。<br />
            如有緊急事項，請直接致電或發送電子郵件給我們。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 