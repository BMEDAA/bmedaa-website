import React from 'react';
import { ExternalLink, Instagram, GraduationCap, Database, Monitor, Calendar, BookOpen, Users } from 'lucide-react';
import TrainingCalendar from '../../components/TrainingCalendar';

const LinksPage: React.FC = () => {
  const linkCategories = [
    {
      title: '🎓 官方教育資源',
      icon: <GraduationCap size={24} />,
      links: [
        {
          name: '香港中文大學數學及數學教育課程',
          description: '課程介紹、入學要求、申請資訊',
          url: 'https://admission.cuhk.edu.hk/programme/bmedn/',
          icon: <BookOpen size={20} />,
          highlight: true
        }
      ]
    },
    {
      title: '🏛️ 教育局資源',
      icon: <Database size={24} />,
      links: [
        {
          name: '雲端校管系統 (CloudSAMS)',
          description: '全港980所學校使用的學校管理系統',
          url: 'https://www.edb.gov.hk/tc/sch-admin/admin/sch-it-systems/cloudsams/index.html',
          icon: <Monitor size={20} />
        },
        {
          name: '培訓行事曆系統',
          description: '教師專業發展課程及培訓活動',
          url: 'https://tcs.edb.gov.hk/tcs/publicCalendar/start.htm',
          icon: <Calendar size={20} />
        }
      ]
    },
    {
      title: '💻 教育平台',
      icon: <Monitor size={24} />,
      links: [
        {
          name: '香港教育城 (EdCity)',
          description: '一站式專業教育網站及學與教資源平台',
          url: 'https://www.edcity.hk/home/zh-hant/',
          icon: <BookOpen size={20} />
        }
      ]
    },
    {
      title: '📱 社交媒體',
      icon: <Users size={24} />,
      links: [
        {
          name: 'Instagram - @cuhk_bmedaa',
          description: '校友會最新動態、活動資訊及相片分享',
          url: 'https://www.instagram.com/cuhk_bmedaa/',
          icon: <Instagram size={20} />,
          special: 'instagram'
        }
      ]
    }
  ];

  const LinkCard = ({ link }: { link: any }) => {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '20px',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      border: '1px solid #e9ecef',
      background: 'white'
    };

    const getSpecialStyle = () => {
      if (link.special === 'instagram') {
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #E4405F, #C13584)',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 20px rgba(228, 64, 95, 0.3)'
        };
      }
      if (link.highlight) {
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
        };
      }
      return baseStyle;
    };

    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        style={getSpecialStyle()}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = link.special === 'instagram' 
            ? '0 8px 30px rgba(228, 64, 95, 0.4)'
            : link.highlight 
            ? '0 8px 30px rgba(102, 126, 234, 0.4)'
            : '0 4px 15px rgba(0, 0, 0, 0.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = link.special === 'instagram' 
            ? '0 4px 20px rgba(228, 64, 95, 0.3)'
            : link.highlight 
            ? '0 4px 20px rgba(102, 126, 234, 0.3)'
            : 'none';
        }}
      >
        <div style={{ 
          background: link.special === 'instagram' || link.highlight 
            ? 'rgba(255,255,255,0.2)' 
            : '#f8f9fa',
          padding: '12px',
          borderRadius: '8px',
          color: link.special === 'instagram' || link.highlight ? 'white' : '#667eea'
        }}>
          {link.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ 
            margin: '0 0 8px 0',
            color: link.special === 'instagram' || link.highlight ? 'white' : '#2c3e50',
            fontSize: '1.1rem'
          }}>
            {link.name}
          </h4>
          <p style={{ 
            margin: 0,
            color: link.special === 'instagram' || link.highlight 
              ? 'rgba(255,255,255,0.9)' 
              : '#7f8c8d',
            fontSize: '0.9rem',
            lineHeight: '1.5'
          }}>
            {link.description}
          </p>
        </div>
        <ExternalLink 
          size={20} 
          style={{ 
            color: link.special === 'instagram' || link.highlight 
              ? 'rgba(255,255,255,0.8)' 
              : '#7f8c8d' 
          }} 
        />
      </a>
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>常用連結</h1>
        <p>香港中文大學數學及數學教育校友會相關資源與平台</p>
      </div>

      {linkCategories.map((category, index) => (
        <div key={index} className="card" style={{ marginBottom: '30px' }}>
          <div className="card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#667eea' }}>{category.icon}</span>
              <h3 style={{ margin: 0 }}>{category.title}</h3>
            </div>
          </div>
          <div className="card-content">
            <div style={{ display: 'grid', gap: '15px' }}>
              {category.links.map((link, linkIndex) => (
                <LinkCard key={linkIndex} link={link} />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* 培訓課程專區 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={24} style={{ color: '#667eea' }} />
            <h3 style={{ margin: 0 }}>📚 數學/STEM相關培訓課程</h3>
          </div>
          <p style={{ margin: '10px 0 0 0', color: '#7f8c8d', fontSize: '0.9rem' }}>
            自動更新教育局培訓行事曆中的數學及STEM相關課程
          </p>
        </div>
        <div className="card-content">
          <TrainingCalendar />
        </div>
      </div>

      {/* 資源說明 */}
      <div className="card">
        <div className="card-content" style={{ textAlign: 'center', padding: '30px' }}>
          <BookOpen size={48} style={{ color: '#667eea', marginBottom: '15px' }} />
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>持續更新</h3>
          <p style={{ color: '#7f8c8d', fontSize: '1rem', lineHeight: '1.6' }}>
            以上連結定期更新，確保為校友提供最新的教育資源與培訓資訊。
            如有新的有用資源建議，歡迎聯絡校友會。
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinksPage; 