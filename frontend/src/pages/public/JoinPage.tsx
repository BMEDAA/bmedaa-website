import React from 'react';
import { ExternalLink, UserPlus, FileText, Clock } from 'lucide-react';

const JoinPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>加入香港中文大學數學及數學教育校友會</h1>
        <p>歡迎所有香港中文大學數學及數學教育相關畢業生加入我們的大家庭</p>
      </div>
      
      {/* 申請須知 */}
      <div className="card">
        <div className="card-header">
          <h2>申請須知</h2>
        </div>
        <div className="card-content">
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>申請資格</h3>
              <p>凡香港中文大學數學及數學教育相關課程的畢業生，均可申請成為本會會員。</p>
            </div>
            
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>審核流程</h3>
              <p>申請提交後，幹事會將在2-4週內完成審核程序，並透過電郵通知審核結果。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google 表單 */}
      <div className="card">
        <div className="card-header">
          <h2>線上申請表格</h2>
        </div>
        <div className="card-content">
          <p style={{ marginBottom: '20px', color: '#5a6c7d' }}>
            請填寫以下申請表格，我們會盡快處理您的申請：
          </p>
          
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk22CYBwlwCsepXiNQFK6aclK8BT-PIyG35Fz7qY4jAHy2cw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                display: 'inline-block',
                background: '#667eea',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              開啟申請表格
            </a>
          </div>
          
          <div style={{ 
            width: '100%', 
            height: '600px', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdk22CYBwlwCsepXiNQFK6aclK8BT-PIyG35Fz7qY4jAHy2cw/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="香港中文大學數學及數學教育校友會入會申請表"
            >
              載入中…
            </iframe>
          </div>
        </div>
      </div>

      {/* 會員福利 */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-header">
          <h3>🎯 會員福利</h3>
        </div>
        <div className="card-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>🤝 專業網絡</h4>
              <p style={{ color: '#5a6c7d', margin: 0, lineHeight: 1.6 }}>
                與同樣專精數學教育的校友建立聯繫，拓展專業人脈
              </p>
            </div>
            
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>📚 學術資源</h4>
              <p style={{ color: '#5a6c7d', margin: 0, lineHeight: 1.6 }}>
                獲得最新的數學教育研究資訊和教學資源
              </p>
            </div>
            
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>🎓 專業發展</h4>
              <p style={{ color: '#5a6c7d', margin: 0, lineHeight: 1.6 }}>
                參與專業研討會和工作坊，提升教學能力
              </p>
            </div>
            
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>🏆 榮譽認可</h4>
              <p style={{ color: '#5a6c7d', margin: 0, lineHeight: 1.6 }}>
                獲得校友會榮譽會員證書和相關認可
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 聯絡資訊 */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-content" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>❓ 有疑問？</h3>
          <p style={{ color: '#7f8c8d', lineHeight: 1.6, fontSize: '1rem' }}>
            如對申請程序有任何疑問，歡迎聯絡我們：<br />
            <strong>電郵：</strong>
            <a href="mailto:alumni.bmed@gmail.com" style={{ color: '#667eea', textDecoration: 'none' }}>
              alumni.bmed@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinPage; 