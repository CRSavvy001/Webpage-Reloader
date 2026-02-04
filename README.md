# 🔄 Pushover Auto-Reload Web App

A web application that loads Pushover in an iframe and automatically reloads it every 2 minutes. **Works perfectly on mobile!**

## 🎯 Why This Solution?

- ✅ **Works on ANY mobile browser** (no userscript needed)
- ✅ **Visual countdown timer** showing time until next reload
- ✅ **Status console** showing all reload activity
- ✅ **Reliable** - runs from a server, not browser extension
- ✅ **Easy to deploy** on Railway from your mobile phone

## 📱 How to Upload to GitHub from Mobile

### Option 1: GitHub Mobile App (Easiest)

1. **Download** GitHub app from App Store or Google Play
2. **Sign in** to your GitHub account
3. Tap **"+"** → **"New repository"**
4. Name it: `pushover-auto-reload`
5. Make it **Public** (or Private)
6. Tap **"Create repository"**
7. Tap **"Add file"** → **"Create new file"**
8. **Create each file** by copying content:
   - File 1: Name = `package.json`, paste content, commit
   - File 2: Name = `server.js`, paste content, commit
   - File 3: Name = `index.html`, paste content, commit
   - File 4: Name = `README.md`, paste this file, commit

### Option 2: Mobile Web Browser

1. Go to **github.com** on your mobile browser
2. **Sign in**
3. Tap **"+"** (top right) → **"New repository"**
4. Name: `pushover-auto-reload`
5. Tap **"Create repository"**
6. Tap **"creating a new file"** link
7. **For each file:**
   - Enter filename (e.g., `package.json`)
   - Paste the file content
   - Scroll down, tap **"Commit new file"**
   - Repeat for all 4 files

## 🚀 How to Deploy on Railway

### Step-by-Step from Mobile:

1. **Go to** https://railway.app on your mobile browser
2. **Sign up** or log in (can use GitHub login)
3. Tap **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. **Authorize** Railway to access your GitHub
6. Select your **`pushover-auto-reload`** repository
7. Railway will **auto-detect** Node.js and deploy
8. Wait **1-2 minutes** for deployment
9. Tap **"Settings"**
10. Tap **"Generate Domain"**
11. **Copy your URL** (e.g., `https://your-app.railway.app`)

### 🎉 You're Done!

Visit your Railway URL on your mobile phone. You'll see:
- Pushover loaded in the page
- Green countdown timer (top-right)
- Status console (bottom)
- Auto-reload every 2 minutes!

## 📖 How to Use

1. **Open your Railway URL** on mobile
2. **Log in to Pushover** (it's loaded in the iframe)
3. **Leave the tab open** (can minimize browser)
4. The page will **auto-reload every 2 minutes**
5. Your notifications stay fresh!

## 🎨 Features

### Visual Countdown Timer (Top-Right)
- Shows time remaining: `2:00`, `1:59`, `1:58`...
- **Green** when more than 30 seconds
- **Yellow** when 30 seconds or less
- **Red** when 10 seconds or less

### Status Console (Bottom)
- Shows all activity:
  - ✅ System started
  - ⏰ Next reload time
  - 📱 Pushover loaded
  - 🔄 Reloading...
- Tap **"Hide Status"** button to hide/show

## ⚙️ Customization

### Change Reload Interval

Edit `index.html`, find this line:
```javascript
const RELOAD_INTERVAL = 120000; // 2 minutes
```

**Change to:**
- 1 minute: `60000`
- 3 minutes: `180000`
- 5 minutes: `300000`
- 10 minutes: `600000`

Then commit and Railway will auto-redeploy!

## 🔧 Local Testing (Optional)

If you have Node.js installed:

```bash
npm install
npm start
```

Visit http://localhost:3000

## 📂 Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Main page with iframe and auto-reload logic |
| `server.js` | Express server for Railway |
| `package.json` | Node.js dependencies |
| `README.md` | This documentation |

## 🌟 Advantages Over Browser Extensions

| Feature | Extension | This App |
|---------|-----------|----------|
| Works on mobile | ❌ Limited | ✅ Always |
| No installation | ❌ Required | ✅ Just a URL |
| Visual feedback | ⚠️ Maybe | ✅ Always |
| Cross-browser | ❌ Limited | ✅ All browsers |
| Easy updates | ❌ Reinstall | ✅ Auto-deploy |

## 📱 Mobile Tips

1. **Add to Home Screen** for quick access:
   - Android: Menu → "Add to Home screen"
   - iOS: Share → "Add to Home Screen"

2. **Keep tab active** (don't close it)

3. **Allow notifications** when Pushover asks

4. The page works even if you **switch to other tabs**

## 🆘 Troubleshooting

### Issue: "Pushover not loading"
**Fix:** Check if Railway deployment is running. Visit the /health endpoint.

### Issue: "Timer not counting down"
**Fix:** Refresh the page. Check Railway logs for errors.

### Issue: "Not reloading after 2 minutes"
**Fix:** Make sure the tab is not put to sleep by your browser. Keep it as an active tab.

### Issue: "Can't see Pushover login"
**Fix:** Pushover uses iframe protection. If it doesn't load, you may need to log in directly at client.pushover.net first, then visit your Railway app.

## 🔐 Security Note

This app loads Pushover in an iframe. Your credentials stay secure with Pushover's servers. The app just refreshes the iframe - no data is stored or intercepted.

## 📊 How It Works

```
┌─────────────────────────────────┐
│   Your Railway App              │
│                                 │
│  ┌──────────────────────────┐  │
│  │  Timer (2:00)            │  │
│  └──────────────────────────┘  │
│                                 │
│  ┌──────────────────────────┐  │
│  │                          │  │
│  │  Pushover (in iframe)    │  │
│  │                          │  │
│  │  [Auto-reloads every     │  │
│  │   2 minutes]             │  │
│  │                          │  │
│  └──────────────────────────┘  │
│                                 │
│  ┌──────────────────────────┐  │
│  │  Status Console          │  │
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

## 🎓 What You Learned

- ✅ Uploading code to GitHub from mobile
- ✅ Deploying apps to Railway
- ✅ Using iframes for auto-reload
- ✅ Creating web apps for mobile

## 💡 Future Ideas

- Add custom reload intervals via URL parameter
- Multiple notification services support
- PWA capabilities for offline access
- Dark/light theme toggle

---

**Enjoy fresh Pushover notifications! 🔔**

Made with ❤️ for mobile users
