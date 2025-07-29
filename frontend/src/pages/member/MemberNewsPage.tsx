import React, { useState } from 'react';
import { Bell, Calendar, Users, Award, BookOpen, Star, TrendingUp, Clock } from 'lucide-react';

interface MemberNews {
  id: string;
  title: string;
  content: string;
  summary: string;
  category: 'urgent' | 'general' | 'event' | 'professional';
  date: Date;
  isImportant: boolean;
  attachments?: string[];
}

const MemberNewsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'urgent' | 'general' | 'event' | 'professional'>('all');

  const memberNews: MemberNews[] = [
    {
      id: '1',
      title: '🎉 2025年會員大會及新幹事會選舉通知',
      content: '各位親愛的校友，香港中文大學數學及數學教育校友會將於2025年8月25日(星期一)晚上6時30分於香港中文大學何添樓B5舉行會員大會及新一屆幹事會選舉。大會將討論2025-2027年度工作計劃、財務報告，以及選舉新一屆幹事會成員。歡迎所有會員踴躍參與，行使您的投票權，共同決定校友會的未來發展方向。',
      summary: '8月25日何添樓B5舉行會員大會及幹事會選舉',
      category: 'urgent',
      date: new Date('2025-01-20'),
      isImportant: true,
      attachments: ['BMEDAA 2025-2027 工作計劃.pdf']
    },
    {
      id: '2',
      title: '📋 會員資料更新提醒',
      content: '為了確保校友會能夠及時向各位發送最新資訊，請各位會員定期更新個人聯絡資料，包括電郵地址、手提電話號碼及現職資訊。更新方式：1) 登入會員專區自行更新 2) 致電秘書處 3) 電郵至alumni.bmed@gmail.com。已更新資料的會員將優先獲得活動通知及專業發展機會。',
      summary: '請定期更新個人聯絡資料以獲得最新資訊',
      category: 'general',
      date: new Date('2025-01-15'),
      isImportant: false
    },
    {
      id: '3',
      title: '🍽️ OCAMP食宵聯誼活動',
      content: '繼會員大會後，校友會將於8月22日晚上6時30分在泰源大排檔舉辦OCAMP食宵聯誼活動。這是一個輕鬆愉快的聚會，讓校友們在非正式的環境中交流心得、分享近況。費用為每位$100，包括晚餐及飲品。名額有限，請儘早報名。現已有18位校友報名參加，歡迎更多校友加入我們的大家庭！',
      summary: '8月22日泰源大排檔聯誼聚餐，費用$100',
      category: 'event',
      date: new Date('2025-01-18'),
      isImportant: true
    },
    {
      id: '4',
      title: '📚 數學教育專業發展工作坊',
      content: '校友會將與教育局合作，為會員提供一系列數學教育專業發展工作坊，包括「電子學習在數學教學的應用」、「STEM教育課程設計」等。工作坊將邀請資深數學教師及專家分享最新教學法及實踐經驗。會員可免費參加，非會員需繳付費用。詳情將於稍後公布，請密切留意校友會通訊。',
      summary: '即將推出數學教育專業發展工作坊，會員免費參加',
      category: 'professional',
      date: new Date('2025-01-12'),
      isImportant: false
    }
  ];

  const filteredNews = memberNews.filter(news => {
    if (filter === 'all') return true;
    return news.category === filter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'urgent': return <Bell size={20} />;
      case 'event': return <Calendar size={20} />;
      case 'professional': return <BookOpen size={20} />;
      default: return <Users size={20} />;
    }
  };

  const getCategoryStyle = (category: string, isImportant: boolean) => {
    const baseStyle = {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    };

    if (isImportant) {
      return { ...baseStyle, background: '#e74c3c', color: 'white' };
    }

    const styles = {
      urgent: { ...baseStyle, background: '#f39c12', color: 'white' },
      event: { ...baseStyle, background: '#9b59b6', color: 'white' },
      professional: { ...baseStyle, background: '#3498db', color: 'white' },
      general: { ...baseStyle, background: '#95a5a6', color: 'white' }
    };

    return styles[category as keyof typeof styles] || styles.general;
  };

  const getCategoryText = (category: string) => {
    const texts = {
      urgent: '緊急通知',
      event: '活動資訊',
      professional: '專業發展',
      general: '一般消息'
    };
    return texts[category as keyof typeof texts] || '一般消息';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>會員快訊</h1>
        <p>香港中文大學數學及數學教育校友會會員專屬消息與通知</p>
      </div>

      {/* 統計卡片 */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <TrendingUp size={32} style={{ marginBottom: '10px' }} />
          <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>{memberNews.length}</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>總消息數</p>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #f093fb, #f5576c)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <Bell size={32} style={{ marginBottom: '10px' }} />
          <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>
            {memberNews.filter(n => n.isImportant).length}
          </h3>
          <p style={{ margin: 0, opacity: 0.9 }}>重要通知</p>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
          color: 'white',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <Calendar size={32} style={{ marginBottom: '10px' }} />
          <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>
            {memberNews.filter(n => n.category === 'event').length}
          </h3>
          <p style={{ margin: 0, opacity: 0.9 }}>活動消息</p>
        </div>
      </div>

      {/* 篩選按鈕 */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { key: 'all', label: '全部消息', icon: <Star size={16} /> },
            { key: 'urgent', label: '緊急通知', icon: <Bell size={16} /> },
            { key: 'event', label: '活動資訊', icon: <Calendar size={16} /> },
            { key: 'professional', label: '專業發展', icon: <BookOpen size={16} /> },
            { key: 'general', label: '一般消息', icon: <Users size={16} /> }
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                borderRadius: '20px',
                border: 'none',
                background: filter === key ? '#667eea' : '#f8f9fa',
                color: filter === key ? 'white' : '#5a6c7d',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 新聞列表 */}
      <div style={{ display: 'grid', gap: '20px' }}>
        {filteredNews.map((news) => (
          <div key={news.id} className="card" style={{
            borderLeft: news.isImportant ? '4px solid #e74c3c' : '4px solid #667eea'
          }}>
            <div className="card-content" style={{ padding: '25px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '15px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <h3 style={{ 
                  margin: 0, 
                  color: '#2c3e50', 
                  fontSize: '1.3rem',
                  lineHeight: '1.4',
                  flex: 1
                }}>
                  {news.title}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                  <div style={getCategoryStyle(news.category, news.isImportant)}>
                    {getCategoryIcon(news.category)}
                    {getCategoryText(news.category)}
                  </div>
                  {news.isImportant && (
                    <Star size={20} style={{ color: '#f39c12' }} />
                  )}
                </div>
              </div>

              <p style={{ 
                color: '#7f8c8d', 
                fontSize: '0.95rem', 
                marginBottom: '15px',
                fontWeight: '500'
              }}>
                {news.summary}
              </p>

              <p style={{ 
                color: '#5a6c7d', 
                lineHeight: '1.6', 
                marginBottom: '20px',
                fontSize: '1rem'
              }}>
                {news.content}
              </p>

              {news.attachments && (
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#2c3e50', fontSize: '0.9rem', marginBottom: '8px' }}>附件：</h4>
                  {news.attachments.map((attachment, index) => (
                    <div key={index} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#f8f9fa',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: '#5a6c7d'
                    }}>
                      <BookOpen size={14} />
                      {attachment}
                    </div>
                  ))}
                </div>
              )}

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid #f1f3f4',
                fontSize: '0.85rem',
                color: '#7f8c8d'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} />
                  發布日期：{formatDate(news.date)}
                </div>
                <div>
                  校友會秘書處
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="card">
          <div className="card-content" style={{ textAlign: 'center', padding: '40px' }}>
            <Bell size={48} style={{ color: '#bdc3c7', marginBottom: '15px' }} />
            <h3 style={{ color: '#7f8c8d', marginBottom: '10px' }}>暫無相關消息</h3>
            <p style={{ color: '#95a5a6' }}>目前沒有符合篩選條件的會員消息</p>
          </div>
        </div>
      )}

      {/* 聯絡資訊 */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-content" style={{ textAlign: 'center', padding: '30px' }}>
          <Users size={48} style={{ color: '#667eea', marginBottom: '15px' }} />
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>保持聯繫</h3>
          <p style={{ color: '#7f8c8d', fontSize: '1rem', lineHeight: '1.6' }}>
            如有任何查詢或建議，歡迎聯絡校友會秘書處：<br/>
            電郵：alumni.bmed@gmail.com<br/>
            Instagram：@cuhk_bmedaa
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberNewsPage; 