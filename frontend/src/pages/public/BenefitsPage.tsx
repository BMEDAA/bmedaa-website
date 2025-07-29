import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Star, Users, Percent, BookOpen, Coffee, Award, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const BenefitsPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const publicBenefits = [
    {
      icon: <BookOpen size={32} />,
      title: '學術資源',
      description: '免費參與公開學術講座及研討會',
      category: '學術發展'
    },
    {
      icon: <Users size={32} />,
      title: '校友網絡',
      description: '與同領域校友建立聯繫，拓展人脈',
      category: '人際網絡'
    },
    {
      icon: <Award size={32} />,
      title: '專業認證',
      description: '獲得校友會會員證書及相關認可',
      category: '專業資格'
    }
  ];

  const memberBenefits = [
    {
      icon: <Gift size={32} />,
      title: '會員專屬禮品',
      description: '每年度會員紀念品及特製文具用品',
      category: '福利品',
      highlight: true
    },
    {
      icon: <Percent size={32} />,
      title: '合作機構優惠',
      description: '指定書店、培訓機構、餐廳等合作優惠',
      category: '生活優惠'
    },
    {
      icon: <Coffee size={32} />,
      title: '專屬活動',
      description: '會員專屬聚會、工作坊及文娱活動',
      category: '專屬服務'
    },
    {
      icon: <Star size={32} />,
      title: '優先報名',
      description: '各類活動及課程優先報名權',
      category: '專屬服務'
    },
    {
      icon: <BookOpen size={32} />,
      title: '專業發展',
      description: '免費參與會員專屬培訓課程',
      category: '專業發展'
    },
    {
      icon: <Heart size={32} />,
      title: '互助支援',
      description: '職業諮詢、學術交流及生活互助',
      category: '社群支援'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>福利品與服務</h1>
        <p>探索香港中文大學數學及數學教育校友會為會員提供的專屬福利與服務</p>
      </div>
      
      {/* 公開福利 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={24} style={{ color: '#667eea' }} />
            <h2>公開福利</h2>
          </div>
        </div>
        <div className="card-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {publicBenefits.map((benefit, index) => (
              <div key={index} style={{
                padding: '20px',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                textAlign: 'center',
                background: '#f8f9fa'
              }}>
                <div style={{ color: '#667eea', marginBottom: '15px' }}>
                  {benefit.icon}
                </div>
                <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>{benefit.title}</h4>
                <p style={{ color: '#5a6c7d', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
                <span style={{
                  display: 'inline-block',
                  background: '#667eea',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  marginTop: '10px'
                }}>
                  {benefit.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 會員專屬福利 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Gift size={24} style={{ color: '#667eea' }} />
            <h2>會員專屬福利</h2>
          </div>
        </div>
        <div className="card-content">
          {!isAuthenticated && (
            <div style={{ 
              background: '#e3f2fd', 
              padding: '20px', 
              borderRadius: '8px', 
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <p style={{ color: '#1976d2', marginBottom: '15px', fontSize: '1.1rem' }}>
                以下福利僅限校友會會員享用，請先登入查看完整內容
              </p>
              <Link 
                to="/login" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#667eea',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                立即登入
              </Link>
            </div>
          )}
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {memberBenefits.map((benefit, index) => (
              <div key={index} style={{
                padding: '20px',
                border: benefit.highlight ? '2px solid #667eea' : '1px solid #e9ecef',
                borderRadius: '8px',
                textAlign: 'center',
                background: benefit.highlight ? '#f0f4ff' : 'white',
                position: 'relative'
              }}>
                {benefit.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#667eea',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    熱門福利
                  </div>
                )}
                <div style={{ color: '#667eea', marginBottom: '15px' }}>
                  {benefit.icon}
                </div>
                <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>{benefit.title}</h4>
                <p style={{ 
                  color: isAuthenticated ? '#5a6c7d' : '#95a5a6', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.6',
                  filter: isAuthenticated ? 'none' : 'blur(2px)'
                }}>
                  {benefit.description}
                </p>
                <span style={{
                  display: 'inline-block',
                  background: benefit.highlight ? '#667eea' : '#6c757d',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  marginTop: '10px'
                }}>
                  {benefit.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 申請會員 */}
      {!isAuthenticated && (
        <div className="card">
          <div className="card-content" style={{ textAlign: 'center', padding: '40px' }}>
            <Gift size={64} style={{ color: '#667eea', marginBottom: '20px' }} />
            <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>成為會員，享受更多福利</h2>
            <p style={{ color: '#7f8c8d', marginBottom: '30px', fontSize: '1.1rem' }}>
              加入香港中文大學數學及數學教育校友會，與同窗好友重聚，享受專屬福利與服務
            </p>
            
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/join" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#667eea',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}
              >
                <Users size={20} />
                立即申請加入
              </Link>
              
              <Link 
                to="/about" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#667eea',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid #667eea',
                  fontSize: '1.1rem'
                }}
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 會員專屬資訊 */}
      {isAuthenticated && (
        <div className="card">
          <div className="card-content" style={{ textAlign: 'center', padding: '30px' }}>
            <Star size={48} style={{ color: '#ffc107', marginBottom: '15px' }} />
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>感謝您的支持</h3>
            <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>
              如有任何福利相關問題，請聯絡：alumni.bmed@gmail.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitsPage; 