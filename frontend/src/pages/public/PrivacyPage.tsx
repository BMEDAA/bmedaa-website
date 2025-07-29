import React from 'react';
import { Shield, Eye, Database, Settings, Globe, Phone } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>隱私政策</h1>
        <p>香港中文大學數學及數學教育校友會（BMEDAA）隱私政策</p>
      </div>
      
      {/* 政策概述 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={24} style={{ color: '#667eea' }} />
            <h2>政策聲明</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#5a6c7d' }}>
            香港中文大學數學及數學教育校友會（下稱「BMEDAA」）承諾確保所有透過本會網站（下稱「本網站」）收集的個人資料，均嚴格遵守香港特別行政區《個人資料（私隱）條例》的有關條文處理。
          </p>
        </div>
      </div>

      {/* 收集資料 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Database size={24} style={{ color: '#667eea' }} />
            <h2>收集資料</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#5a6c7d' }}>
            BMEDAA會使用小型文字檔案（cookies）及網站信標（page tagging）記錄本網站的瀏覽情況，但不會收集任何足以辨識使用者身分的資料。
          </p>
        </div>
      </div>

      {/* 小型文字檔案 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Settings size={24} style={{ color: '#667eea' }} />
            <h2>小型文字檔案（Cookies）</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px', color: '#5a6c7d' }}>
            當使用者瀏覽本網站時，小型文字檔案會儲存於使用者的電腦或設備內。這些檔案通常包含匿名且獨特的識別符，用以辨識個別設備，但不會收集任何個人資料，亦不具備辨識個別使用者的功能。BMEDAA使用小型文字檔案收集的統計資料包括瀏覽人次及使用者對本網站服務的喜好。
          </p>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>使用者選擇</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#5a6c7d' }}>
              你可選擇接受或拒絕儲存小型文字檔案。如拒絕儲存小型文字檔案，可能無法使用本網站的某些功能，例如儲存你的瀏覽偏好或登入某些網上服務。
            </p>
          </div>
        </div>
      </div>

      {/* 網站信標 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Eye size={24} style={{ color: '#667eea' }} />
            <h2>網站信標（Page Tagging）</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px', color: '#5a6c7d' }}>
            BMEDAA使用JavaScript及像素標籤（pixel tags）收集本網站的使用模式統計資料，以及追蹤本會網上活動的成效。像素標籤是放置於特定網頁上的透明圖檔，用以收集瀏覽數據。收集的數據經整合及分析後，會用於改善本網站的易用性及提供的服務，但不會用於收集個人資料或足以辨識個別使用者的資料。
          </p>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>JavaScript設定</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#5a6c7d' }}>
              你可關閉設備上的JavaScript，關閉JavaScript不會影響你瀏覽本網站，但可能無法使用某些功能，例如改變文字大小或特定互動功能。
            </p>
          </div>
        </div>
      </div>

      {/* 提供個人資料 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Database size={24} style={{ color: '#667eea' }} />
            <h2>提供個人資料</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px', color: '#5a6c7d' }}>
            BMEDAA可能會於不同期間及為個別原因，邀請你自願提供個人資料，例如姓名、電話號碼、郵寄地址或電郵地址。本會在邀請你提供資料時，會清楚列明收集資料的目的和用途，並告知你如何查閱或改正所提供的個人資料。除非法律許可或要求，BMEDAA不會在未經你同意的情況下向第三方透露你的個人資料。
          </p>
          <div style={{ background: '#e8f5e8', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>安全保護</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#5a6c7d', marginBottom: '10px' }}>
              本網站使用保密插口層（SSL）通訊協定傳送網上登記的資料，以確保你的個人資料得到保護。
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#5a6c7d' }}>
              BMEDAA會將你提供的個人資料保密，只有獲得授權的人士才可查閱。
            </p>
          </div>
        </div>
      </div>

      {/* 搜尋服務 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Globe size={24} style={{ color: '#667eea' }} />
            <h2>搜尋服務</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#5a6c7d' }}>
            本網站的搜尋服務由第三方獨立服務提供商支援。該服務提供商已確認在提供搜尋結果時，不會收集任何可識別個人身分的資料。該服務提供商可能會將從搜尋活動中獲得的匿名資料提供予BMEDAA，作網站流量分析之用。BMEDAA不會將從搜尋活動收集的數據與任何個人身分資料配對。
          </p>
        </div>
      </div>

      {/* 聊天機械人功能 */}
      <div className="card">
        <div className="card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={24} style={{ color: '#667eea' }} />
            <h2>聊天機械人功能</h2>
          </div>
        </div>
        <div className="card-content">
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '15px', color: '#5a6c7d' }}>
            本網站的聊天機械人功能（如適用）不會要求用戶提供任何可識別個人身分的資料。
          </p>
          <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#856404', margin: '0' }}>
              <strong>重要提醒：</strong>為保障你的個人資料私隱，建議用戶在使用聊天機械人功能時，避免提供任何可識別個人身分的資料。
            </p>
          </div>
        </div>
      </div>

      {/* 聯絡資訊 */}
      <div className="card">
        <div className="card-content" style={{ textAlign: 'center', padding: '30px' }}>
          <p style={{ fontSize: '0.9rem', color: '#7f8c8d', lineHeight: '1.6' }}>
            如對本隱私政策有任何疑問，請聯絡：<br />
            <strong>香港中文大學數學及數學教育校友會</strong><br />
            電郵：alumni.bmed@gmail.com<br />
            地址：香港中文大學何添樓G/F
          </p>
          <p style={{ fontSize: '0.85rem', color: '#95a5a6', marginTop: '20px' }}>
            本隱私政策最後更新日期：{new Date().toLocaleDateString('zh-TW')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 