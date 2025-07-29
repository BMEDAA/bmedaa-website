import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { mockEvents } from '../../data/mockData';

const EventsPage: React.FC = () => {
  const publicEvents = mockEvents.filter(event => event.isPublic);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>活動</h1>
        <p>查看香港中文大學數學及數學教育課程校友會即將舉辦的活動和過往活動記錄</p>
      </div>
      
      {publicEvents.length > 0 ? (
        <div style={{ display: 'grid', gap: '30px' }}>
          {publicEvents.map((event) => (
            <div key={event.id} className="card">
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
                    {(() => {
                      switch(event.category) {
                        case 'lecture': return '講座';
                        case 'gathering': return '聚會';
                        case 'workshop': return '工作坊';
                        case 'competition': return '比賽';
                        default: return '活動';
                      }
                    })()}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7f8c8d', fontSize: '0.9rem' }}>
                    <Calendar size={16} />
                    <span>{event.startDate.toLocaleDateString('zh-TW')}</span>
                  </div>
                </div>
                
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  lineHeight: 1.4
                }}>
                  {event.title}
                </h2>
                
                <p style={{ 
                  color: '#5a6c7d', 
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  fontSize: '1rem'
                }}>
                  {event.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a6c7d' }}>
                    <Clock size={16} />
                    <span>
                      {event.startDate.toLocaleDateString('zh-TW')} 
                      {event.endDate && event.endDate.getTime() !== event.startDate.getTime() && 
                        ` - ${event.endDate.toLocaleDateString('zh-TW')}`
                      }
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a6c7d' }}>
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a6c7d' }}>
                    <Users size={16} />
                    <span>{event.registeredCount}/{event.capacity} 人</span>
                  </div>
                </div>

                {event.attachments && event.attachments.length > 0 && (
                  <div style={{ borderTop: '1px solid #ecf0f1', paddingTop: '15px' }}>
                    <h4 style={{ marginBottom: '10px', color: '#2c3e50' }}>相關文件:</h4>
                    {event.attachments.map((attachment, index) => (
                      <a 
                        key={index}
                        href={attachment.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          background: '#f8f9fa',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          color: '#667eea',
                          fontSize: '0.9rem',
                          marginRight: '10px',
                          marginBottom: '10px',
                          border: '1px solid #e9ecef'
                        }}
                      >
                        📎 {attachment.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <p style={{ textAlign: 'center', color: '#7f8c8d', padding: '40px' }}>
            暫無公開活動資訊
          </p>
        </div>
      )}
    </div>
  );
};

export default EventsPage; 