import React from 'react';
import { ExternalLink, UserPlus, FileText, Clock } from 'lucide-react';

const JoinPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>加入香港中文大學數學及數學教育課程校友會</h1>
        <p>歡迎成為我們大家庭的一員，共同推動數學教育發展</p>
      </div>
      
      {/* 申請須知 */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div className="card-header">
          <h3>📋 申請須知</h3>
        </div>
        <div className="card-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <UserPlus size={24} style={{ color: '#667eea', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>申請資格</h4>
                <p style={{ margin: 0, color: '#5a6c7d', lineHeight: 1.6 }}>
                  所有畢業於香港中文大學數學及數學教育課程的校友均可申請加入
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <FileText size={24} style={{ color: '#667eea', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>所需文件</h4>
                <p style={{ margin: 0, color: '#5a6c7d', lineHeight: 1.6 }}>
                  請準備畢業證書或相關證明文件以供審核
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <Clock size={24} style={{ color: '#667eea', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>審核時間</h4>
                <p style={{ margin: 0, color: '#5a6c7d', lineHeight: 1.6 }}>
                  申請提交後，我們會在2-3個工作日內進行審核並回覆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google表單區域 */}
      <div className="card">
        <div className="card-header">
          <h3>📝 入會申請表</h3>
        </div>
        <div className="card-content">
          {/* 外部連結選項 */}
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <p style={{ marginBottom: '20px', color: '#5a6c7d' }}>
              請點擊下方按鈕開啟申請表格，或使用下方的嵌入式表單：
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk22CYBwlwCsepXiNQFK6aclK8BT-PIyG35Fz7qY4jAHy2cw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '15px 25px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
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
              <FileText size={20} />
              開啟申請表格
              <ExternalLink size={16} />
            </a>
          </div>

          {/* 嵌入式表單 */}
          <div style={{ 
            border: '2px solid #ecf0f1', 
            borderRadius: '12px', 
            overflow: 'hidden',
            background: '#f8f9fa'
          }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdk22CYBwlwCsepXiNQFK6aclK8BT-PIyG35Fz7qY4jAHy2cw/viewform?embedded=true" 
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              style={{ display: 'block' }}
              title="香港中文大學數學及數學教育課程校友會入會申請表"
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