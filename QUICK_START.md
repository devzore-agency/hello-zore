# 🚀 Quick Start Guide - Fixed Version

## Prerequisites
- Node.js v16+ installed
- MongoDB running locally OR MongoDB Atlas account
- Cloudinary account (for image uploads)

---

## 1️⃣ Backend Setup

```bash
cd backend

# Copy env template
cp .env.example .env

# Edit .env with your values
# nano .env  # or use your editor
```

**Edit `.backend/.env`:**
```env
# Make sure to update:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=change_this_to_something_secure
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Install & Run:**
```bash
npm install
npm start

# Should show:
# ✅ MongoDB Connected
# 🚀 Server running on http://localhost:5000
# ❤️ Health check: http://localhost:5000/health
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend

# Copy env template
cp .env.example .env

# Edit .env
```

**Edit `frontend/.env`:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=DevZore Blog
VITE_APP_URL=http://localhost:5173
```

**Install & Run:**
```bash
npm install
npm run dev

# Should show:
#   VITE v... dev server running at:
#   ➜  Local:   http://localhost:5173/
```

---

## 3️⃣ Admin Dashboard Setup (Optional - Different Port)

If you want to run admin dashboard on different port:

**Terminal 3:**
```bash
cd frontend

# Run on port 5174
npm run dev -- --port 5174

# Access at: http://localhost:5174
```

---

## 4️⃣ Testing the Fixes

### Test CORS Fix
1. Open http://localhost:5173 (blog)
2. Open DevTools (F12) → Console
3. Should see NO red CORS errors
4. Blog should load published posts

### Test Image Upload
1. Open http://localhost:5174 (admin) or http://localhost:5173/admin
2. Login with admin credentials
3. Create new post
4. Click "📸 Choose Image" button
5. Select an image from your computer
6. Should compress automatically
7. Image preview should appear

### Test Token/Cookie Security
1. Open http://localhost:5174
2. Login
3. Open DevTools → Application → Cookies
4. Should see `adminToken` cookie
5. On logout, cookie should disappear

---

## 🐛 Common Issues & Fixes

### "Connection refused" on MongoDB
**Solution:** Start MongoDB
```bash
# Windows
mongod

# Mac
brew services start mongodb-community

# Linux
sudo service mongod start
```

### CORS still failing?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Check `.env` FRONTEND_URL matches exactly
4. Restart backend server

### Image upload gives 400 error
1. File must be < 5MB
2. Must be image format (JPEG, PNG, WebP, etc)
3. Check Cloudinary credentials in `.env`
4. Check backend console for error details

### Can't login to admin
1. Make sure backend is running (http://localhost:5000/health)
2. Check .env JWT_SECRET is set
3. Try creating admin user:
   ```bash
   cd backend
   node createAdmin.js
   ```

---

## 📱 Access URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Blog Frontend | http://localhost:5173 | View published posts |
| Admin Dashboard | http://localhost:5174 | Create/edit posts |
| Backend API | http://localhost:5000 | API endpoint |
| Health Check | http://localhost:5000/health | Check server status |

---

## 📚 What Was Fixed

✅ **CORS Errors** - Now fully working  
✅ **Token Management** - Using secure cookies  
✅ **Image Upload** - Auto-compression included  
✅ **Security** - .env files protected  

See `FIXES_APPLIED.md` for detailed explanation.

---

## 🎯 Next: Deploy to Production

When ready to deploy:

1. Push to GitHub (only source code, not .env files)
2. Deploy backend to Heroku/Railway/Vercel
3. Deploy frontend to Vercel/Netlify
4. Set environment variables on each platform
5. Test on staging first!

See deployment guides in `SETUP_GUIDE.md`

---

## 💬 Need Help?

- Check backend logs: Look at terminal running `npm start`
- Check frontend logs: Open browser DevTools (F12)
- Read `FIXES_APPLIED.md` for detailed info
- Check MongoDB connection string format
- Verify Cloudinary account is active

Good luck! 🚀
