import React from 'react';
import { Users, Target, History, Award, Shield, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>關於我們</h1>
        <p>了解香港中文大學數學及數學教育校友會的宗旨、歷史與組織架構</p>
      </div>
      
      {/* 宗旨 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Target size={24} style={{ color: '#667eea' }} />
            <h2>宗旨</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#2c3e50' }}>
            香港中文大學數學及數學教育校友會（以下簡稱「BMEDAA」）以非牟利社團形式成立，旨在團結香港中文大學數學及數學教育課程的校友，促進校友之間的聯繫與合作，並推動數學及數學教育相關的學術、文娛及社會活動。本會致力於傳承香港中文大學的校史與精神，守望數學及數學教育領域的發展，並為校友提供交流平台，共同為學術及社會作出貢獻。
          </p>
          
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>具體宗旨包括：</h3>
          <ul style={{ color: '#5a6c7d', lineHeight: '1.8', fontSize: '1rem' }}>
            <li>舉辦學術講座、數學教育活動及文娛活動，促進校友與學界之間的交流。</li>
            <li>參與香港中文大學的各項活動，加強校友與母校的聯繫。</li>
            <li>支持數學及數學教育的發展，提升相關領域的專業水平及社會影響力。</li>
          </ul>
        </div>
      </div>

      {/* 歷史 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <History size={24} style={{ color: '#667eea' }} />
            <h2>歷史</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#5a6c7d' }}>
            BMEDAA由香港中文大學數學及數學教育課程的校友組成，成立於非牟利社團形式，旨在凝聚校友力量，弘揚母校數學及數學教育的精神與傳統。多年來，本會積極組織各類活動，包括學術研討會、文娛聚會及校友聯誼活動，促進校友之間的互動，並與香港中文大學保持緊密聯繫。本會的發展植根於香港中文大學數學系的卓越學術傳統，承載著校友對母校的深厚感情及對數學教育的熱忱。
          </p>
        </div>
      </div>

      {/* 組織架構 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={24} style={{ color: '#667eea' }} />
            <h2>組織架構</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '25px', color: '#5a6c7d' }}>
            BMEDAA的運作由幹事會負責，幹事會由會員選舉產生，成員包括主席、副主席、司庫、秘書等職位，負責策劃及執行本會各項活動。
          </p>
          
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} />
              2023-2025年度幹事會名單
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <div style={{ padding: '15px', background: 'white', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                <strong style={{ color: '#2c3e50' }}>主席</strong>
                <p style={{ margin: '5px 0 0 0', color: '#5a6c7d' }}>鄭百喬先生<br />Mr. Cheng Pak Kiu</p>
              </div>
              <div style={{ padding: '15px', background: 'white', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                <strong style={{ color: '#2c3e50' }}>副主席</strong>
                <p style={{ margin: '5px 0 0 0', color: '#5a6c7d' }}>吳偉文先生<br />Mr. Ng Wai Man</p>
              </div>
              <div style={{ padding: '15px', background: 'white', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                <strong style={{ color: '#2c3e50' }}>司庫</strong>
                <p style={{ margin: '5px 0 0 0', color: '#5a6c7d' }}>蔡俊杰先生<br />Mr. Tsoi Chun Kit</p>
              </div>
              <div style={{ padding: '15px', background: 'white', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                <strong style={{ color: '#2c3e50' }}>秘書</strong>
                <p style={{ margin: '5px 0 0 0', color: '#5a6c7d' }}>馮濼穎女士<br />Ms. Fung Lok Wing</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>組織管理</h3>
            <ul style={{ color: '#5a6c7d', lineHeight: '1.8', fontSize: '1rem' }}>
              <li>幹事會成員任期為兩年，通過會員大會選舉產生，確保本會運作公平透明。</li>
              <li>會員大會是本會的最高決策機構，擁有選舉、被選舉、提名及表決等權利。</li>
              <li>特別幹事會與幹事會享有同等地位，幹事會會議需至少三人出席，每項決定需經出席成員一致同意或多數通過。</li>
            </ul>
          </div>

          <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={20} />
              會員權利與義務
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>會員資格</h4>
                <p style={{ color: '#5a6c7d', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  凡香港中文大學數學及數學教育課程的校友，均可申請成為本會會員，經幹事會審批後正式加入。
                </p>
              </div>
              <div>
                <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>會員權利</h4>
                <p style={{ color: '#5a6c7d', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  會員享有平等權利，包括選舉、被選舉、提名及表決權。
                </p>
              </div>
              <div>
                <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>會員義務</h4>
                <p style={{ color: '#5a6c7d', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  會員應遵守會章及細則，積極參與本會活動，並支持本會的宗旨及發展。
                </p>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginTop: '25px', color: '#5a6c7d', fontStyle: 'italic' }}>
            BMEDAA通過完善的組織架構及清晰的會章，確保會務運作順暢，並為校友提供一個有活力及凝聚力的交流平台。
          </p>
        </div>
      </div>

      {/* 聯絡資訊 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={24} style={{ color: '#667eea' }} />
            <h2>聯絡我們</h2>
          </div>
        </div>
        <div className="card-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>📍 地址</h4>
              <p style={{ color: '#5a6c7d' }}>香港中文大學何添樓G/F</p>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>📧 電郵</h4>
              <p style={{ color: '#5a6c7d' }}>alumni.bmed@gmail.com</p>
            </div>
            <div>
              <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>📱 社交媒體</h4>
              <a 
                href="https://www.instagram.com/cuhk_bmedaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#667eea', textDecoration: 'none' }}
              >
                @cuhk_bmedaa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 