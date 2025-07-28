import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthForm.css';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除錯誤訊息
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 基本驗證
    if (!formData.email || !formData.password) {
      setError('請填寫所有必填欄位');
      return;
    }

    // 電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('請輸入有效的電子郵件地址');
      return;
    }

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate('/member'); // 登入成功後導向會員中心
      } else {
        setError('電子郵件或密碼錯誤，請重新嘗試');
      }
    } catch (err) {
      setError('登入時發生錯誤，請稍後再試');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>會員登入</h1>
          <p>歡迎回來！請登入您的校友會帳號</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">電子郵件</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="請輸入您的電子郵件"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="請輸入您的密碼"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? '登入中...' : '登入'}
            </button>
          </div>

          <div className="auth-links">
            <Link to="/forgot-password" className="forgot-password-link">
              忘記密碼？
            </Link>
          </div>

          <div className="auth-divider">
            <span>還不是會員嗎？</span>
          </div>

          <div className="secondary-action">
            <Link to="/register" className="secondary-btn">
              註冊新帳號
            </Link>
          </div>
        </form>

        {/* 測試帳號資訊 */}
        <div className="demo-info">
          <h3>測試帳號範例</h3>
          <p><strong>帳號：</strong>1415ds5y04@gmail.com</p>
          <p><strong>密碼：</strong>65488448</p>
          <p><strong>或：</strong>bairen2122@gmail.com / 51112137</p>
          <p style={{ fontSize: '0.85rem', color: '#6c757d', marginTop: '10px' }}>
            * 請使用您的真實校友會帳號和密碼登入
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 