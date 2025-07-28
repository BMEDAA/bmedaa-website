import React from 'react';
import { mockNews } from '../../data/mockData';

const NewsPage: React.FC = () => {
  const publicNews = mockNews.filter(news => news.isPublic);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>最新資訊</h1>
        <p>瀏覽香港中文大學數學及數學教育課程校友會的最新公告和新聞動態</p>
      </div>
      
      {publicNews.length > 0 ? (
        <div style={{ display: 'grid', gap: '30px' }}>
          {publicNews.map((news) => (
            <article key={news.id} className="card">
              <div className="card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <span style={{
                    background: '#667eea',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {news.category === 'announcement' ? '公告' : '消息'}
                  </span>
                  <span style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                    {news.publishDate.toLocaleDateString('zh-TW')}
                  </span>
                </div>
                
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  lineHeight: 1.4
                }}>
                  {news.title}
                </h2>
                
                <p style={{ 
                  color: '#5a6c7d', 
                  lineHeight: 1.6,
                  marginBottom: '15px',
                  fontSize: '1rem'
                }}>
                  {news.content}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {news.tags.map((tag) => (
                    <span key={tag} style={{
                      background: '#ecf0f1',
                      color: '#5a6c7d',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="card-content" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>暫無最新消息</h3>
            <p style={{ color: '#7f8c8d' }}>請稍後再來查看最新的校友會資訊。</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage; 