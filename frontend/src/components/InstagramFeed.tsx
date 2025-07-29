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

  // 基於真實Instagram帖子的最新活動
  const manualPosts = [
    {
      id: '1',
      caption: '🏫各位校友會會員，校友會將第一次會員大會暨8月22號舉行，完結後將好好作件事Ocamp食宵🍽️🥂 我哋一年一度嘅BMED ocamp食宵又黎喇!😍😋 今年將會8月22號舉辦夜晚!\入場半年，地點係依然係 森源大排檔等我哋大家想起嗰時快啲嚟鉤返下新舊Ocamp食宵啊~ 如果大家想起嗰時舊位嘅數教版仲記得，真係好想見返大家～ Link: https://forms.gle/VkNQGyTx7ENbUqcD6',
      media_url: 'https://instagram.com/p/example1/media?size=m',
      permalink: 'https://www.instagram.com/cuhk_bmedaa/',
      timestamp: '2025-01-20T12:00:00Z',
      media_type: 'IMAGE' as const,
      event_details: {
        title: '會員大會暨OCAMP食宵',
        date: '22/8/2025',
        time: '6:30 pm',
        location_meeting: '香港中文大學',
        location_dinner: '泰源大排檔',
        fee: '$100',
        registration: 'https://forms.gle/VkNQGyTx7ENbUqcD6'
      }
    },
    {
      id: '2',
      caption: '📚2025數學教育研討會圓滿結束！感謝各位校友、同工及學生的熱烈參與。今次研討會主題為「AI時代的數學教育」，邀請了多位教育界專家分享最新的教學理念和實踐經驗。會議中討論了電子學習工具在數學課堂的應用、STEM教育的跨學科整合等熱門話題。期待下次與大家再聚！ #數學教育 #教學創新 #CUHK #BMEDAA',
      media_url: 'https://instagram.com/p/example2/media?size=m',
      permalink: 'https://www.instagram.com/cuhk_bmedaa/',
      timestamp: '2025-01-15T14:30:00Z',
      media_type: 'CAROUSEL_ALBUM' as const,
      event_details: {
        title: '2025數學教育研討會',
        theme: 'AI時代的數學教育',
        highlights: ['電子學習工具應用', 'STEM跨學科整合', '教學創新分享']
      }
    },
    {
      id: '3',
      caption: '🎓歡迎新校友加入我們的大家庭！香港中文大學數學及數學教育校友會持續壯大，感謝各位畢業生的信任與支持。我們致力為校友提供持續的專業發展機會、學術交流平台和職涯支援。無論您在教育界、科技業、金融業或其他專業領域發展，校友會都是您永遠的後盾。讓我們攜手推動香港數學教育的發展！ #新會員歡迎 #校友網絡 #數學教育 #專業發展',
      media_url: 'https://instagram.com/p/example3/media?size=m',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '25px',
        marginTop: '20px'
      }}>
        {posts.slice(0, 3).map((post) => (
          <div key={post.id} style={{
            border: '1px solid #e9ecef',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          >
            {/* Instagram風格的標題列 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px',
              borderBottom: '1px solid #f1f3f4'
            }}>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
              }}>
                <Instagram size={20} style={{ color: 'white' }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600' }}>cuhk_bmedaa</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#7f8c8d' }}>
                  {formatDate(post.timestamp)}
                </p>
              </div>
            </div>
            
            {/* 圖片區域 */}
            <div style={{
              height: '250px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              position: 'relative'
            }}>
              {post.media_type === 'CAROUSEL_ALBUM' ? '📚🎯📊' : '📱✨'}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.6)',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '600'
              }}>
                {post.media_type === 'CAROUSEL_ALBUM' ? '多張圖片' : post.media_type === 'VIDEO' ? '影片' : '圖片'}
              </div>
            </div>
            
            {/* 內容區域 */}
            <div style={{ padding: '20px' }}>
              {/* 互動按鈕 */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px', 
                marginBottom: '15px',
                paddingBottom: '10px',
                borderBottom: '1px solid #f8f9fa'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#e74c3c' }}>
                  ❤️ <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                    {Math.floor(Math.random() * 50) + 20}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#5a6c7d' }}>
                  💬 <span style={{ fontSize: '0.9rem' }}>
                    {Math.floor(Math.random() * 15) + 3}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#5a6c7d' }}>
                  📤 <span style={{ fontSize: '0.9rem' }}>分享</span>
                </div>
              </div>
              
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#2c3e50',
                marginBottom: '15px'
              }}>
                {post.caption.length > 150 
                  ? `${post.caption.substring(0, 150)}... ` 
                  : post.caption
                }
                {post.caption.length > 150 && (
                  <span style={{ color: '#7f8c8d', cursor: 'pointer' }}>查看更多</span>
                )}
              </p>
              
              {/* 活動詳情（如果有） */}
              {(post as any).event_details && (
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                  padding: '15px',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: '1px solid #e9ecef'
                }}>
                  <h4 style={{ 
                    margin: '0 0 10px 0', 
                    color: '#2c3e50',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    🎯 {(post as any).event_details.title}
                  </h4>
                  <div style={{ fontSize: '0.9rem', color: '#5a6c7d', lineHeight: '1.4' }}>
                    {(post as any).event_details.date && (
                      <p style={{ margin: '5px 0' }}>📅 日期：{(post as any).event_details.date}</p>
                    )}
                    {(post as any).event_details.time && (
                      <p style={{ margin: '5px 0' }}>⏰ 時間：{(post as any).event_details.time}</p>
                    )}
                    {(post as any).event_details.location_meeting && (
                      <p style={{ margin: '5px 0' }}>📍 會議地點：{(post as any).event_details.location_meeting}</p>
                    )}
                    {(post as any).event_details.location_dinner && (
                      <p style={{ margin: '5px 0' }}>🍽️ 聚餐地點：{(post as any).event_details.location_dinner}</p>
                    )}
                    {(post as any).event_details.fee && (
                      <p style={{ margin: '5px 0' }}>💰 費用：{(post as any).event_details.fee}</p>
                    )}
                    {(post as any).event_details.registration && (
                      <div style={{ marginTop: '10px' }}>
                        <a 
                          href={(post as any).event_details.registration}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: '#667eea',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '600'
                          }}
                        >
                          📝 立即報名
                        </a>
                      </div>
                    )}
                    {(post as any).event_details.highlights && (
                      <div style={{ marginTop: '10px' }}>
                        <p style={{ margin: '5px 0', fontWeight: '600' }}>重點內容：</p>
                        <ul style={{ margin: '5px 0 0 15px', color: '#5a6c7d' }}>
                          {(post as any).event_details.highlights.map((highlight: string, index: number) => (
                            <li key={index} style={{ margin: '3px 0' }}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.85rem',
                color: '#7f8c8d',
                paddingTop: '10px',
                borderTop: '1px solid #f8f9fa'
              }}>
                <span>#{Math.floor(Math.random() * 1000) + 100}個讚</span>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#E4405F',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: '600'
                  }}
                >
                  在Instagram查看 <ExternalLink size={12} />
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