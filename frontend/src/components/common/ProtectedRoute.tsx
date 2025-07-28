import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // 如果正在載入認證狀態，顯示載入畫面
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>載入中...</p>
        </div>
      </div>
    );
  }

  // 如果未登入，重導向到登入頁面，並保存原本要訪問的路徑
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 如果已登入，顯示受保護的內容
  return <>{children}</>;
};

export default ProtectedRoute; 