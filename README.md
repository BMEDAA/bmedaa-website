# 香港中文大學數學及數學教育課程校友會官方網站

## 📋 專案概述

香港中文大學數學及數學教育課程校友會官方網站，採用現代化技術架構建立，提供公開資訊和會員專屬服務。

**使命宗旨**：團結所有畢業於「香港中文大學數學及數學教育課程」的校友，加強守望相助精神及協助提高校友的專業水平，並以其專業知識推動香港數學教育發展。

## ⚡ 快速開始

### 開發環境啟動
```bash
cd frontend
npm install
npm start
```

### 生產版本建置
```bash
cd frontend
npm run build
```

## 🏗️ 技術架構

- **前端框架**: React 19.1.0 + TypeScript
- **路由管理**: React Router
- **狀態管理**: Context API
- **樣式方案**: CSS Modules
- **圖示庫**: Lucide React
- **部署平台**: Vercel (推薦)

## 🎯 功能特色

### 公開區域
- ✅ 校友會簡介和宗旨
- ✅ 最新資訊和公告
- ✅ 活動資訊
- ✅ 入會申請 (整合Google表單)
- ✅ 會章和幹事會名單
- ✅ 聯絡資訊

### 會員專區
- ✅ 會員登入系統
- ✅ 個人資料管理
- ✅ 會員專屬活動
- ✅ 內部資料下載
- ✅ 討論論壇

## 👥 會員管理

目前系統包含 **27位真實會員資料**，支援以下功能：
- 會員登入驗證
- 繳費狀態管理
- 畢業年份分類
- 個人資料維護

### 測試帳號
- **帳號**: 1415ds5y04@gmail.com **密碼**: 65488448
- **帳號**: bairen2122@gmail.com **密碼**: 51112137

## 📊 網站統計

- 👥 **100+** 校友成員
- 📅 **3+** 年度活動
- 🏆 **2年** 服務經驗
- 🎯 **數學教育** 推動發展

## 📢 重要公告

**會員大會通知**：2025年8月22日(週五) 18:00-20:00
- 地點：稍後公布
- 議程：選舉新一屆幹事會
- 請各位會員撥冗出席

## 🔗 官方連結

- **Instagram**: [@cuhk_bmedaa](https://www.instagram.com/cuhk_bmedaa/)
- **電子郵件**: alumni.bmed@gmail.com
- **辦公地址**: 香港中文大學何添樓G/F

## 🚀 部署指南

### 1. 創建GitHub倉庫
```bash
# 在GitHub創建新倉庫: BMEDAA/bmedaa-website
```

### 2. 推送代碼
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/bmedaa-website.git
git push -u origin main
```

### 3. Vercel部署
1. 前往 [vercel.com](https://vercel.com)
2. 連接GitHub帳號
3. 選擇 `bmedaa-website` 倉庫
4. 設定：
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. 點擊 **Deploy**

### 4. 自訂域名（可選）
- 在Vercel設定中添加自訂域名
- 設定DNS記錄指向Vercel

## 📁 專案結構

```
bmedaa-website/
├── frontend/                 # React應用程式
│   ├── src/
│   │   ├── components/      # 共用元件
│   │   ├── pages/          # 頁面元件
│   │   ├── context/        # Context API
│   │   ├── data/           # 模擬資料
│   │   └── types/          # TypeScript類型
│   ├── public/             # 靜態資源
│   └── package.json        # 專案相依性
├── DEPLOYMENT.md           # 部署指南
├── account info.csv        # 會員資料
└── README.md              # 專案說明
```

## 🔧 開發指南

### 環境需求
- Node.js 16+ 
- npm 8+

### 本地開發
```bash
# 克隆專案
git clone https://github.com/BMEDAA/bmedaa-website.git
cd bmedaa-website

# 安裝相依性
cd frontend
npm install

# 啟動開發伺服器
npm start
```

### 建置發布
```bash
# 建置生產版本
npm run build

# 測試建置結果
npx serve -s build
```

## 📝 更新日誌

### v1.0.0 (2025-01-28)
- ✅ 完成基本網站架構
- ✅ 整合真實會員資料
- ✅ 實現Google表單入會申請
- ✅ 響應式設計完成
- ✅ 會員登入系統
- ✅ 公開資料管理
- ✅ Instagram連結整合

### 下一步規劃
- 🔄 整合後端API
- 📧 郵件通知系統
- 💳 線上繳費功能
- 📊 數據分析面板
- 🔍 進階搜索功能

## 🆘 技術支援

### 常見問題
- **Q**: 如何重設密碼？
- **A**: 請聯絡秘書處 alumni.bmed@gmail.com

- **Q**: 網站無法正常顯示？
- **A**: 請清除瀏覽器快取或使用無痕模式

### 聯絡方式
- **技術問題**: 透過GitHub Issues回報
- **內容更新**: 聯絡秘書處
- **緊急事項**: alumni.bmed@gmail.com

## 📄 授權條款

© 2025 香港中文大學數學及數學教育課程校友會. 版權所有.

---

**開發團隊**: BMEDAA技術委員會  
**最後更新**: 2025年1月28日
