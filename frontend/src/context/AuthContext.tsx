import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types';
import { realMemberData } from '../data/mockData';

// 認證相關的動作類型
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean };

// 認證狀態的初始值
const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

// AuthContext 的型別定義
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: any) => Promise<boolean>;
}

// 建立 Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Reducer 函數
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// AuthProvider 組件
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // 使用真實會員數據進行登入驗證
  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // 模擬 API 呼叫延遲
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 在真實會員數據中查找匹配的帳號
      const memberData = realMemberData.find(
        member => member.email.toLowerCase() === email.toLowerCase() && member.password === password
      );

      if (memberData) {
        const user: User = {
          id: memberData.email,
          email: memberData.email,
          name: memberData.name,
          graduationYear: memberData.graduationYear,
          department: '香港中文大學數學及數學教育課程',
          isActive: true,
          membershipExpiry: new Date('2099-12-31'), // 永久會員
        };

        // 儲存到 localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authToken', 'bmedaa-auth-token');

        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return true;
      } else {
        dispatch({ type: 'LOGIN_FAILURE' });
        return false;
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
  };

  // 登出函數
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    dispatch({ type: 'LOGOUT' });
  };

  // 註冊函數 - 實際上會提交到Google表單
  const register = async (userData: any): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      // 模擬提交延遲
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 註冊成功（實際上會提交到Google表單進行人工審核）
      console.log('新用戶註冊申請:', userData);
      dispatch({ type: 'SET_LOADING', payload: false });
      return true;
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      return false;
    }
  };

  // 檢查本地儲存的認證狀態
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('authToken');

        if (storedUser && storedToken) {
          const user: User = JSON.parse(storedUser);
          dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        }
      } catch (error) {
        console.error('檢查認證狀態時發生錯誤:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
      }
    };

    checkAuthStatus();
  }, []);

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 自訂 Hook 來使用 AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 