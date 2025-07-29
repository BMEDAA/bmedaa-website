import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, GraduationCap, Building, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthForm.css';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    graduationYear: '',
    department: '',
    studentId: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const departments = [
    '數學系',
    '數學教育學位教師教育文憑課程',
    '數學與資訊科技教育學位教師教育文憑課程', 
    '教育學院數學教育組',
    '理學院數學系',
    '教育學院',
    '其他相關課程',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除錯誤訊息
    if (error) setError('');
  };

  const validateForm = () => {
    // 檢查必填欄位
    if (!formData.email || !formData.password || !formData.confirmPassword || 
        !formData.name || !formData.graduationYear || !formData.department || !formData.studentId) {
      setError('請填寫所有必填欄位');
      return false;
    }

    // 電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('請輸入有效的電子郵件地址');
      return false;
    }

    // 密碼強度驗證
    if (formData.password.length < 6) {
      setError('密碼長度至少需要6個字元');
      return false;
    }

    // 確認密碼
    if (formData.password !== formData.confirmPassword) {
      setError('密碼與確認密碼不符');
      return false;
    }

    // 畢業年份驗證
    const currentYear = new Date().getFullYear();
    const gradYear = parseInt(formData.graduationYear);
    if (gradYear < 1950 || gradYear > currentYear + 10) {
      setError('請輸入有效的畢業年份');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    try {
      const success = await register({
        ...formData,
        graduationYear: parseInt(formData.graduationYear),
      });

      if (success) {
        setSuccess(true);
        // 3秒後導向登入頁面
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError('註冊失敗，請稍後再試');
      }
    } catch (err) {
      setError('註冊時發生錯誤，請稍後再試');
    }
  };

  if (success) {
    return (
      <div className="auth-container">
        <div className="auth-card success-card">
          <div className="success-icon">
            <CheckCircle size={64} />
          </div>
          <h1>註冊申請已送出</h1>
          <p>感謝您申請加入校友會！</p>
          <p>我們將會審核您的申請，審核通過後會寄送通知信至您的電子郵件。</p>
          <p>正在為您導向登入頁面...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>加入校友會</h1>
          <p>填寫資料申請成為校友會會員</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">姓名 *</label>
              <div className="input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="請輸入您的真實姓名"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="studentId">學號 *</label>
              <div className="input-wrapper">
                <GraduationCap className="input-icon" size={18} />
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="請輸入學號"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">電子郵件 *</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="請輸入電子郵件地址"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">系所 *</label>
              <div className="input-wrapper">
                <Building className="input-icon" size={18} />
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">請選擇系所</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="graduationYear">畢業年份 *</label>
              <div className="input-wrapper">
                <GraduationCap className="input-icon" size={18} />
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="例：2020"
                  min="1950"
                  max={new Date().getFullYear() + 10}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">密碼 *</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="請設定密碼 (至少6個字元)"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">確認密碼 *</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="請再次輸入密碼"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? '送出申請中...' : '送出申請'}
            </button>
          </div>

          <div className="auth-divider">
            <span>已經是會員了嗎？</span>
          </div>

          <div className="secondary-action">
            <Link to="/login" className="secondary-btn">
              回到登入頁面
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm; 