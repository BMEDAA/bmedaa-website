# 🚀 部署指南 - 免費部署到Vercel

## 為什麼選擇Vercel？
- ✅ **完全免費** - 個人專案無需付費
- ✅ **自動HTTPS** - 安全加密連線
- ✅ **全球CDN** - 快速載入速度
- ✅ **自動部署** - 推送代碼即自動更新
- ✅ **支援React** - 原生支援

## 📋 部署步驟

### 第1步：準備GitHub倉庫
1. 在GitHub建立新倉庫（例如：`bmedaa-website`）
2. 將專案推送到GitHub：
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bmedaa-website.git
git push -u origin main
```

### 第2步：註冊Vercel
1. 前往 [vercel.com](https://vercel.com)
2. 點擊「Sign Up」
3. 選擇「Continue with GitHub」
4. 授權Vercel存取您的GitHub

### 第3步：部署網站
1. 在Vercel控制台點擊「New Project」
2. 選擇您的`bmedaa-website`倉庫
3. 設定以下配置：
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. 點擊「Deploy」

### 第4步：取得網址
- 部署完成後，您將獲得類似這樣的網址：
  - `https://bmedaa-website.vercel.app`
- 可以在設定中自訂域名

## 🔧 進階設定

### 自訂域名
1. 在Vercel專案設定中點擊「Domains」
2. 輸入您的域名（例如：`bmedaa.org`）
3. 按照指示設定DNS記錄

### 環境變數（如需要）
```bash
# 在Vercel設定頁面添加環境變數
REACT_APP_API_URL=https://your-api.com
REACT_APP_CONTACT_EMAIL=alumni.bmed@gmail.com
```

## 📱 其他推薦平台

### Netlify
1. 前往 [netlify.com](https://netlify.com)
2. 連接GitHub倉庫
3. 設定建置命令：`npm run build`
4. 發佈目錄：`build`

### Firebase Hosting
1. 安裝Firebase CLI：`npm install -g firebase-tools`
2. 初始化：`firebase init hosting`
3. 建置專案：`npm run build`
4. 部署：`firebase deploy`

## 🔐 安全性考量

### HTTPS
- 所有推薦平台都自動提供HTTPS加密

### 環境變數
- 敏感資訊應放在環境變數中
- 前端變數必須以`REACT_APP_`開頭

### CORS設定
- 如需連接後端API，確保正確設定CORS

## 📊 監控和分析

### Vercel Analytics
- 免費提供基本網站分析
- 可查看訪問量和效能指標

### Google Analytics（可選）
- 添加追蹤代碼到`public/index.html`

## 🔄 自動更新

### GitHub Actions（進階）
- 可設定自動測試和部署流程
- 推送代碼後自動更新網站

### 簡單更新流程
1. 修改代碼
2. 推送到GitHub：`git push`
3. Vercel自動檢測並重新部署
4. 2-3分鐘後更新生效

## 🆘 常見問題

### Q: 部署失敗怎麼辦？
A: 檢查建置日誌，通常是依賴問題或路徑錯誤

### Q: 網站速度慢？
A: Vercel有全球CDN，速度應該很快。檢查圖片大小和代碼優化

### Q: 如何備份網站？
A: GitHub倉庫就是最好的備份，定期推送代碼即可

## 📞 技術支援
- Vercel文檔：https://vercel.com/docs
- GitHub教學：https://docs.github.com 