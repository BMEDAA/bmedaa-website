import React from 'react';
import { ExternalLink, FileText, Download } from 'lucide-react';

const DataPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>公開資料</h1>
        <p>查看財務報告和組織相關文件</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h3>📁 文件資料庫</h3>
        </div>
        <div className="card-content">
          <p>本會所有公開文件和資料都可在以下連結中查閱：</p>
          
          <div style={{ marginTop: '20px' }}>
            <a 
              href="https://drive.google.com/drive/u/3/folders/1Kp3oRLMPrvL373ZpgVTnBZQdKbuKr-df"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '15px 25px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FileText size={20} />
              前往 Google Drive 文件庫
              <ExternalLink size={16} />
            </a>
          </div>
          
          <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>📋 文件包含內容：</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} style={{ color: '#667eea' }} />
                年度財務報告
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} style={{ color: '#667eea' }} />
                年度活動報告
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} style={{ color: '#667eea' }} />
                組織章程文件
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} style={{ color: '#667eea' }} />
                會議紀錄摘要
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} style={{ color: '#667eea' }} />
                法定申報文件
              </li>
            </ul>
          </div>
          
          <div style={{ marginTop: '20px', padding: '15px', background: '#e3f2fd', borderRadius: '8px', border: '1px solid #bbdefb' }}>
            <p style={{ margin: 0, color: '#1565c0' }}>
              <strong>📝 注意事項：</strong> 部分敏感文件可能需要申請權限才能查看。如有疑問，請聯絡校友會秘書處。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage; 