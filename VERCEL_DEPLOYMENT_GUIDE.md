# DevZore Blog - Vercel Deployment Guide

## 📋 Project Architecture

Your project uses **3 main components**:

1. **Frontend** (Port 5173) - React + Vite application
2. **Admin Dashboard** (Port 5174) - Separate admin interface
3. **Backend API** (Port 5000) - Express.js with MongoDB

## ⚠️ Important: Vercel Limitations

**Vercel is optimized for serverless deployment**, which has limitations for your backend:

- ❌ **File System Persistence**: Uploaded files are lost on redeployment
- ✅ **API Functions**: Work great but limited to 60s execution time
- ✅ **Database**: MongoDB Atlas works perfectly

## 🎯 Recommended Deployment Strategy

### Option 1: Best Solution - Using Railway or Render for Backend

**Deploy Frontend on Vercel** + **Backend on Railway/Render**

This is the RECOMMENDED approach because:
- File uploads persist properly
- Full server capabilities
- Separate scaling
- Better for production

#### Step 1: Deploy Frontend to Vercel

```bash
# 1. Login to Vercel
npm install -g vercel
vercel login

# 2. Go to frontend directory
cd frontend

# 3. Deploy
vercel --prod

# You'll be asked:
# - Project name: devzore-frontend (or your choice)
# - Directory: ./
# - Environment: next/react
```

#### Step 2: Deploy Backend to Railway

**Sign up at https://railway.app**

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. From backend directory
cd backend

# 4. Create and deploy
railway init
railway up

# 5. Set environment variables in Railway dashboard:
# - MONGODB_URI (use MongoDB Atlas connection string)
# - JWT_SECRET (your secret key)
# - PORT (Railway will set this automatically)
```

#### Step 3: Update Frontend API URL

In `frontend/src/services/api.js`:

```javascript
const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
});
```

Create `.env.production` in frontend:

```
VITE_API_BASE_URL=https://your-railway-backend.railway.app/api
```

---

### Option 2: Backend on Vercel (Serverless)

**⚠️ Limitations**: File uploads won't persist!

If you still want to use Vercel for everything, use **AWS S3** or **similar storage** instead of local files.

#### Setup:

1. **Create `vercel.json` in backend:**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "JWT_SECRET": "@jwt_secret"
  }
}
```

2. **Update server.js for Vercel:**

```javascript
// At the end of server.js, export for Vercel
export default app;
```

3. **Deploy:**

```bash
# From backend directory
vercel --prod
```

---

## 🚀 Complete Setup (Option 1 - RECOMMENDED)

### Prerequisites

- Vercel account (free at vercel.com)
- Railway account (free at railway.app)
- MongoDB Atlas account (free at mongodb.com)

### Step-by-Step

#### 1️⃣ Prepare MongoDB

```bash
# Create MongoDB Atlas cluster:
# 1. Go to mongodb.com
# 2. Create free account
# 3. Create cluster (free tier available)
# 4. Get connection string like:
# mongodb+srv://username:password@cluster.mongodb.net/devzore_blog?retryWrites=true&w=majority
```

Update `.env`:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devzore_blog
JWT_SECRET=your-super-secret-key-change-this
PORT=5000
```

#### 2️⃣ Deploy Frontend

```bash
# Install Vercel CLI
npm install -g vercel

# Go to frontend
cd frontend

# Deploy
vercel --prod

# Note the deployment URL (e.g., https://devzore-frontend.vercel.app)
```

#### 3️⃣ Deploy Backend to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Go to backend
cd backend

# Initialize project
railway init

# Set environment variables in Railway dashboard:
# MONGODB_URI = mongodb+srv://...
# JWT_SECRET = your-secret
# NODE_ENV = production
# FRONTEND_URL = https://devzore-frontend.vercel.app
# ADMIN_URL = https://devzore-admin.vercel.app (if separate)

# Deploy
railway up
```

After deployment, Railway will give you a URL like: `https://your-service-production.up.railway.app`

#### 4️⃣ Update Frontend Environment

Create `frontend/.env.production`:

```
VITE_API_BASE_URL=https://your-service-production.up.railway.app/api
```

Update `frontend/src/services/api.js`:

```javascript
const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
});
```

Re-deploy frontend:

```bash
cd frontend
vercel --prod
```

---

## 📝 CORS Configuration for Production

In `backend/server.js`, update allowed origins:

```javascript
const allowedOrigins = [
  "https://devzore-frontend.vercel.app",
  "https://devzore-admin.vercel.app",
  "https://devzore.com",
  "https://www.devzore.com",
];
```

---

## 🖼️ Image Upload Storage Solutions

### Current: Local File System (Development)
- ✅ Works locally
- ❌ Doesn't persist on Vercel
- ✅ Good for Railway/Render

### Production Options:

#### A) Railway/Render (Recommended)
- Uses local file system
- Persistent storage
- No additional cost
- Works as-is!

#### B) AWS S3 (If using Vercel)
- Persistent
- Scalable
- Costs money
- Requires code changes

```javascript
// Install AWS SDK
npm install aws-sdk

// Update upload.js to use S3 instead of local files
```

#### C) Cloudinary (Back to Paid)
- Easy to implement
- Costs money
- No local files needed

---

## 🔄 Development vs Production

### Local Development (Port 3 servers)

```bash
# Terminal 1: Backend
cd backend
npm run dev  # Runs on :5000

# Terminal 2: Frontend  
cd frontend
npm run dev  # Runs on :5173

# Terminal 3: Admin
cd admin (if separate)
npm run dev  # Runs on :5174
```

### Production (All on Vercel/Railway)

```
Frontend: https://your-app.vercel.app
Backend:  https://your-backend.railway.app
Admin:    https://your-admin.vercel.app (separate deploy)
```

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas account created & connection string ready
- [ ] Vercel account created
- [ ] Railway account created
- [ ] Environment variables set in .env
- [ ] .env.production created for frontend
- [ ] CORS origins updated in backend server.js
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway
- [ ] Frontend .env updated with backend URL
- [ ] Images upload correctly on production
- [ ] All APIs responding correctly

---

## 🐛 Troubleshooting

### Images not uploading on Vercel

**Problem**: Vercel serverless functions have read-only file system.

**Solution**: Deploy backend to Railway instead (see Option 1)

### CORS errors in production

**Fix**: Add your production URLs to `allowedOrigins` in `backend/server.js`

### Slow image uploads

**Reason**: WebP compression happens on server

**Solution**: Increase timeout in Vercel function configuration or use Railway

### Database connection timeout

**Fix**:
1. Add your IP to MongoDB Atlas whitelist
2. Use MongoDB Atlas connection string
3. Check MONGODB_URI in .env

---

## 📊 Cost Breakdown

| Service | Free Tier | Cost |
|---------|-----------|------|
| Vercel Frontend | ✅ Generous | $0 for most apps |
| Railway Backend | ✅ $5 credit/month | ~$5-15/month |
| MongoDB Atlas | ✅ Generous (512MB) | $0 for small projects |
| **Total** | | **~$5-15/month** |

---

## 🎓 Need Help?

1. **Vercel Docs**: https://vercel.com/docs
2. **Railway Docs**: https://docs.railway.app
3. **MongoDB Atlas**: https://docs.atlas.mongodb.com
4. **Express Deployment**: https://expressjs.com/en/advanced/best-practice-performance.html

---

## 🚀 Quick Start Command

```bash
# After everything is set up:

# Local development (run all 3 in separate terminals)
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
cd frontend && npm run dev

# Terminal 3:
cd admin && npm run dev

# Then visit:
# Frontend: http://localhost:5173
# Admin: http://localhost:5174
# API: http://localhost:5000
```

---

**Last Updated**: August 2026
**Status**: Ready for Production ✅
