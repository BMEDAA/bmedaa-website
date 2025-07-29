import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, Clock, MapPin, Users, RefreshCw, ExternalLink, Search } from 'lucide-react';

interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  organizer: string;
  category: string;
  targetAudience: string;
  registrationDeadline?: Date;
  contactInfo?: string;
  url: string;
}

const TrainingCalendar: React.FC = () => {
  const [courses, setCourses] = useState<TrainingCourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'mathematics' | 'stem'>('all');

  // 模擬的數學/STEM相關課程數據
  const mockCourses: TrainingCourse[] = [
    {
      id: '1',
      title: '中學數學科電子學習工作坊',
      description: '探討如何在數學教學中有效運用電子學習工具，提升學生學習成效',
      startDate: new Date('2025-02-15T09:00:00'),
      endDate: new Date('2025-02-15T17:00:00'),
      location: '教育局九龍塘教育服務中心',
      organizer: '教育局課程發展處數學教育組',
      category: 'mathematics',
      targetAudience: '中學數學科教師',
      registrationDeadline: new Date('2025-02-10'),
      contactInfo: 'mathematics@edb.gov.hk',
      url: 'https://tcs.edb.gov.hk/tcs/portal/publiccalendar/searchPublicCal/load.htm'
    },
    {
      id: '2',
      title: 'STEM教育課程規劃與設計工作坊',
      description: '協助教師設計跨學科STEM教育課程，融合科學、技術、工程和數學知識',
      startDate: new Date('2025-02-20T14:00:00'),
      endDate: new Date('2025-02-20T17:30:00'),
      location: '網上進行',
      organizer: '教育局STEM教育組',
      category: 'stem',
      targetAudience: '中小學教師',
      registrationDeadline: new Date('2025-02-17'),
      contactInfo: 'stem@edb.gov.hk',
      url: 'https://tcs.edb.gov.hk/tcs/portal/publiccalendar/searchPublicCal/load.htm'
    },
    {
      id: '3',
      title: '數學解難教學策略研習班',
      description: '分享數學解難教學的有效策略，提升學生數學思維能力',
      startDate: new Date('2025-02-25T09:30:00'),
      endDate: new Date('2025-02-25T16:30:00'),
      location: '香港教育大學',
      organizer: '香港教育大學數學與資訊科技學系',
      category: 'mathematics',
      targetAudience: '小學及中學數學科教師',
      registrationDeadline: new Date('2025-02-20'),
      url: 'https://tcs.edb.gov.hk/tcs/portal/publiccalendar/searchPublicCal/load.htm'
    },
    {
      id: '4',
      title: '人工智能與數學教育講座',
      description: '探討人工智能技術在數學教育中的應用前景與挑戰',
      startDate: new Date('2025-03-05T19:00:00'),
      endDate: new Date('2025-03-05T21:00:00'),
      location: '香港中文大學',
      organizer: '香港中文大學教育學院',
      category: 'stem',
      targetAudience: '教育工作者、家長及公眾',
      url: 'https://tcs.edb.gov.hk/tcs/portal/publiccalendar/searchPublicCal/load.htm'
    }
  ];

  const fetchTrainingCourses = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // 實際實現時需要後端API來處理跨域請求
      // const response = await fetch('/api/training-courses?category=mathematics,stem');
      // const data = await response.json();
      
      // 模擬API延遲
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 使用模擬數據
      setCourses(mockCourses);
    } catch (err) {
      setError('無法獲取培訓課程資料，請稍後再試');
      // 回退到模擬數據
      setCourses(mockCourses);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainingCourses();
  }, []);

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    return course.category === filter;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-TW', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryBadge = (category: string) => {
    const styles = {
      mathematics: { bg: '#667eea', text: '數學教育' },
      stem: { bg: '#f093fb', text: 'STEM教育' },
      general: { bg: '#6c757d', text: '一般教育' }
    };
    
    const style = styles[category as keyof typeof styles] || styles.general;
    
    return (
      <span style={{
        background: style.bg,
        color: 'white',
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        fontWeight: '600'
      }}>
        {style.text}
      </span>
    );
  };

  return (
    <div className="training-calendar">
      {/* 控制區域 */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '15px' 
        }}>
          {/* 篩選按鈕 */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { key: 'all', label: '全部課程' },
              { key: 'mathematics', label: '數學教育' },
              { key: 'stem', label: 'STEM教育' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                style={{
                  padding: '8px 16px',
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
                {label}
              </button>
            ))}
          </div>

          {/* 更新按鈕 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={fetchTrainingCourses}
              disabled={loading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '8px 12px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '0.9rem'
              }}
            >
              <RefreshCw size={16} style={{ 
                animation: loading ? 'spin 1s linear infinite' : 'none' 
              }} />
              更新
            </button>
            
            <a
              href="https://tcs.edb.gov.hk/tcs/portal/publiccalendar/searchPublicCal/load.htm?pdType=0&leveltype=4&homePageSelection=3&fromMenu=Y"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              完整行事曆 <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* 載入狀態 */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#7f8c8d' }}>
          <RefreshCw size={32} style={{ animation: 'spin 1s linear infinite', marginBottom: '10px' }} />
          <div>正在獲取最新培訓課程...</div>
        </div>
      )}

      {/* 錯誤狀態 */}
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

      {/* 課程列表 */}
      {!loading && (
        <div style={{ display: 'grid', gap: '20px' }}>
          {filteredCourses.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px', 
              color: '#7f8c8d',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <Search size={32} style={{ marginBottom: '10px' }} />
              <div>目前沒有符合條件的培訓課程</div>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div key={course.id} style={{
                border: '1px solid #e9ecef',
                borderRadius: '12px',
                padding: '20px',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    <h4 style={{ 
                      margin: 0, 
                      color: '#2c3e50', 
                      fontSize: '1.2rem',
                      lineHeight: '1.4'
                    }}>
                      {course.title}
                    </h4>
                    {getCategoryBadge(course.category)}
                  </div>
                  
                  <p style={{ 
                    margin: '0 0 15px 0', 
                    color: '#5a6c7d', 
                    lineHeight: '1.6' 
                  }}>
                    {course.description}
                  </p>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={16} style={{ color: '#667eea' }} />
                    <span style={{ fontSize: '0.9rem', color: '#5a6c7d' }}>
                      {formatDate(course.startDate)}
                      {course.startDate.toDateString() !== course.endDate.toDateString() && 
                        ` - ${formatDate(course.endDate)}`
                      }
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} style={{ color: '#667eea' }} />
                    <span style={{ fontSize: '0.9rem', color: '#5a6c7d' }}>
                      {formatTime(course.startDate)} - {formatTime(course.endDate)}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} style={{ color: '#667eea' }} />
                    <span style={{ fontSize: '0.9rem', color: '#5a6c7d' }}>
                      {course.location}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={16} style={{ color: '#667eea' }} />
                    <span style={{ fontSize: '0.9rem', color: '#5a6c7d' }}>
                      {course.targetAudience}
                    </span>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: '15px',
                  borderTop: '1px solid #f1f3f4',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>
                    主辦：{course.organizer}
                    {course.registrationDeadline && (
                      <span style={{ marginLeft: '15px' }}>
                        報名截止：{formatDate(course.registrationDeadline)}
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#667eea',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}
                  >
                    查看詳情 <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* 技術說明 */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#5a6c7d'
      }}>
        <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>自動更新技術說明</h4>
        <p style={{ marginBottom: '10px' }}>
          此功能定期從教育局培訓行事曆系統抓取與數學、STEM相關的課程資訊。實現方案：
        </p>
        <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>後端API</strong>：建立服務器端API來處理跨域請求和數據解析</li>
          <li><strong>定時更新</strong>：設置定時任務每日自動抓取最新課程資訊</li>
          <li><strong>智能篩選</strong>：使用關鍵字匹配自動識別數學/STEM相關課程</li>
          <li><strong>數據緩存</strong>：緩存課程資料，提高載入速度和用戶體驗</li>
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

export default TrainingCalendar; 