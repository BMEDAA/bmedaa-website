import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Lock, Users } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ForumPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>討論論壇</h1>
          <p>會員專屬討論區，請先登入以參與討論</p>
        </div>
        
        <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
          <Lock size={64} style={{ color: '#667eea', marginBottom: '20px' }} />
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>會員專屬功能</h2>
          <p style={{ color: '#7f8c8d', marginBottom: '30px', fontSize: '1.1rem' }}>
            討論論壇僅限校友會會員使用，請先登入您的會員帳號
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/login" 
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#667eea',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              <Users size={18} />
              立即登入
            </Link>
            
            <Link 
              to="/join" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#667eea',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                border: '2px solid #667eea'
              }}
            >
              申請加入
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>討論論壇</h1>
        <p>校友專屬討論區，分享經驗與交流心得</p>
      </div>
      
      <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
        <MessageCircle size={64} style={{ color: '#667eea', marginBottom: '20px' }} />
        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>論壇功能開發中</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '30px', fontSize: '1.1rem' }}>
          我們正在為校友們建設更完善的討論平台，敬請期待！
        </p>
        
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>即將推出的功能</h3>
          <ul style={{ textAlign: 'left', color: '#5a6c7d', lineHeight: '1.8' }}>
            <li>📚 學術討論區</li>
            <li>💼 職涯發展交流</li>
            <li>🎯 專業工作坊分享</li>
            <li>🤝 校友互助平台</li>
            <li>📖 教學心得分享</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForumPage; 