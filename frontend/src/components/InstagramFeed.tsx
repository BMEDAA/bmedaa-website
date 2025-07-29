import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, RefreshCw } from 'lucide-react';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 手動添加的近期活動（基於Instagram內容）
  const manualPosts = [
    {
      id: '1',
      caption: '🏫各位校友會會員，校友會將第一次會員大會暨8月22號舉行，完結後將好好作件事Ocamp食宵🍽️',
      media_url: '/api/placeholder/600/600',
      permalink: 'https://www.instagram.com/cuhk_bmedaa/',
      timestamp: '2025-01-20T10:00:00Z',
      media_type: 'IMAGE' as const,
      event_details: {
        title: '會員大會暨OCAMP食宵',
        date: 'Aug 22, 2025',
        time: '6:30 pm',
        location_meeting: '香港中文大學',
        location_dinner: '泰源大排檔',
        fee: '$100'
      }
    },
    {
      id: '2',
      caption: '📚 數學教育研討會圓滿結束！感謝各位校友的熱烈參與...',
      media_url: '/api/placeholder/600/600',
      permalink: 'https://www.instagram.com/cuhk_bmedaa/',
      timestamp: '2025-01-15T14:00:00Z',
      media_type: 'IMAGE' as const
    },
    {
      id: '3',
      caption: '🎓 歡迎新加入的校友們！讓我們一起為數學教育發展努力...',
      media_url: '/api/placeholder/600/600',
      permalink: 'https://www.instagram.com/cuhk_bmedaa/',
      timestamp: '2025-01-10T16:00:00Z',
      media_type: 'IMAGE' as const
    }
  ];

  // 模擬從Instagram API獲取數據
  const fetchInstagramPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // 實際使用時需要替換為真實的Instagram API調用
      // const response = await fetch('/api/instagram-feed');
      // const data = await response.json();
      
      // 模擬API延遲
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 使用手動添加的帖子
      setPosts(manualPosts);
    } catch (err) {
      setError('無法獲取Instagram內容，請稍後再試');
      // 回退到手動帖子
      setPosts(manualPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="instagram-feed">
      <div className="feed-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Instagram size={24} style={{ color: '#E4405F' }} />
          <h3 style={{ margin: 0, color: '#2c3e50' }}>最新活動動態</h3>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={fetchInstagramPosts}
            disabled={loading}
            style={{
              background: 'none',
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RefreshCw size={16} style={{ 
              animation: loading ? 'spin 1s linear infinite' : 'none' 
            }} />
            更新
          </button>
          
          <a
            href="https://www.instagram.com/cuhk_bmedaa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#E4405F',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}
          >
            關注我們 <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#7f8c8d' }}>
          載入中...
        </div>
      )}

      {error && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          color: '#e74c3c',
          background: '#fdf2f2',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}

      <div className="posts-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {posts.slice(0, 3).map((post) => (
          <div key={post.id} style={{
            border: '1px solid #e9ecef',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            {/* 圖片區域 */}
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              📱
            </div>
            
            {/* 內容區域 */}
            <div style={{ padding: '15px' }}>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.5',
                color: '#2c3e50',
                marginBottom: '10px'
              }}>
                {post.caption.length > 100 
                  ? `${post.caption.substring(0, 100)}...` 
                  : post.caption
                }
              </p>
              
              {/* 活動詳情（如果有） */}
              {(post as any).event_details && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '12px',
                  borderRadius: '6px',
                  marginBottom: '10px'
                }}>
                  <h4 style={{ 
                    margin: '0 0 8px 0', 
                    color: '#2c3e50',
                    fontSize: '1rem'
                  }}>
                    {(post as any).event_details.title}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#5a6c7d' }}>
                    <p style={{ margin: '2px 0' }}>📅 {(post as any).event_details.date}</p>
                    <p style={{ margin: '2px 0' }}>⏰ {(post as any).event_details.time}</p>
                    <p style={{ margin: '2px 0' }}>📍 會議：{(post as any).event_details.location_meeting}</p>
                    <p style={{ margin: '2px 0' }}>🍽️ 聚餐：{(post as any).event_details.location_dinner}</p>
                    <p style={{ margin: '2px 0' }}>💰 費用：{(post as any).event_details.fee}</p>
                  </div>
                </div>
              )}
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: '#7f8c8d'
              }}>
                <span>{formatDate(post.timestamp)}</span>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#E4405F',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  查看原文 <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram整合說明 */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#5a6c7d'
      }}>
        <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>Instagram整合說明</h4>
        <p style={{ marginBottom: '10px' }}>
          目前展示的是手動更新的內容。要實現自動同步Instagram帖子，可以考慮以下方案：
        </p>
        <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>Instagram Basic Display API</strong>：需要Facebook開發者帳號和用戶授權</li>
          <li><strong>第三方服務</strong>：如Zapier、IFTTT等自動化工具</li>
          <li><strong>Instagram嵌入代碼</strong>：使用Instagram官方的嵌入功能</li>
          <li><strong>定期手動更新</strong>：當前採用的方案，確保內容準確性</li>
        </ul>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default InstagramFeed; 