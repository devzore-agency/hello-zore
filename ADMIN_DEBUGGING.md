# 🔧 Admin Dashboard - Debugging Guide

**If you see 401 (Unauthorized) errors in admin dashboard, follow these steps:**

---

## 🔍 Step 1: Check Console Logs

1. **Open Browser DevTools** (F12)
2. Go to **Console** tab
3. **Clear** old logs (Click trash icon)
4. **Reload** page
5. Look for logs like:
   - ✅ `✅ Cookie 'adminToken' set successfully`
   - ✅ `✅ Token attached to request`
   - ❌ `❌ Cookie 'adminToken' not found`

---

## 🍪 Step 2: Check Cookies

1. Open DevTools (F12)
2. Go to **Application** tab
3. Click **Cookies** → **http://localhost:5174**
4. Look for `adminToken` cookie
5. Should see:
   - **Name:** `adminToken`
   - **Value:** Long JWT token (starts with `eyJ...`)
   - **Expires:** 7 days from now
   - **SameSite:** `Lax`
   - **Path:** `/`

**If NOT there:**
- Token not being saved to cookie ❌
- Check browser privacy settings
- Try clearing browser cache

---

## 🔑 Step 3: Check Login Process

1. Go to http://localhost:5174/admin/login
2. **Clear console** first (trash icon)
3. Enter credentials and click Login
4. **Watch console** for these logs:
   ```
   🔑 Token received from login: eyJ...
   ✅ Cookie 'adminToken' set successfully
   ✅ Token successfully saved to cookie!
   ✅ User info saved: {...}
   ```

**If you don't see these:**
- Login API failing
- Check backend is running (http://localhost:5000/health)
- Check MongoDB connection in backend

---

## 📡 Step 4: Check Backend Connection

1. Open new tab: http://localhost:5000/health
2. Should see:
   ```json
   {
     "success": true,
     "status": "OK",
     "database": "connected"
   }
   ```

**If fails:**
- Backend not running
- Start with: `cd backend && npm start`
- Check MongoDB is running

---

## 🚀 Step 5: Check API Requests

1. Open DevTools → **Network** tab
2. **Clear** logs
3. Reload admin dashboard
4. Look for failed requests (red X)
5. Click on failed request
6. Check **Response** tab for error message

**Common 401 errors:**
- `"Token not found"` - Token not being sent
- `"Invalid token"` - Token corrupted or expired
- `"Token expired"` - Session expired

---

## 📋 Step 6: Full Login Test

### Clear Everything First
```javascript
// Run in Browser Console:
localStorage.clear();
document.cookie = "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
location.reload();
```

### Then Login
1. Refresh page
2. Go to login page
3. Enter admin credentials:
   - Email: `admin@devzore.com`
   - Password: (check createAdmin.js for default)

4. **Watch console** for success logs
5. **Check cookies** (should have adminToken)
6. Should redirect to dashboard

---

## 🔐 Step 7: Verify Token in Header

1. After login, open DevTools → **Network**
2. Click on any API request to dashboard
3. Go to **Headers** → **Request Headers**
4. Look for:
   ```
   Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
   ```

**If missing:**
- Token not being attached to request
- Check `frontend/src/services/api.js` line ~36
- Should read from cookies

---

## 🆘 Common Issues & Solutions

### Issue 1: Cookies Not Saving
```
❌ Cookie 'adminToken' not found
```

**Solution:**
1. Check browser privacy settings allow cookies
2. Try incognito mode
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart browser

### Issue 2: 401 Even After Login
```
GET http://localhost:5000/api/posts/admin/all 401
```

**Solution:**
1. Backend not recognizing token
2. Check token is being sent in Authorization header
3. Verify JWT_SECRET in backend `.env` is correct
4. Restart backend: `cd backend && npm start`

### Issue 3: Backend Not Running
```
❌ Error: Network Error
```

**Solution:**
```bash
# Terminal 1
cd backend
npm install
npm start

# Wait for: ✅ MongoDB Connected
```

### Issue 4: MongoDB Not Connected
```
GET http://localhost:5000/health
database: "disconnected"
```

**Solution:**
```bash
# Terminal (Windows)
mongod

# Terminal (Mac)
brew services start mongodb-community

# Terminal (Linux)
sudo service mongod start

# Then restart backend
```

---

## 🎯 Complete Debug Checklist

- [ ] Backend running (`http://localhost:5000/health` shows connected)
- [ ] MongoDB running (check backend logs for ✅)
- [ ] Can login (no error message)
- [ ] Cookies show in DevTools (Application → Cookies)
- [ ] Authorization header in requests (Network tab)
- [ ] No red errors in console
- [ ] Admin dashboard loads (no 401 errors)

---

## 📞 Still Not Working?

### Check These Files Exist:
- ✅ `frontend/src/utils/cookieManager.js`
- ✅ `frontend/src/services/api.js`
- ✅ `frontend/src/services/authService.js`

### Run These Commands:
```bash
# Backend console
npm list express mongoose jsonwebtoken

# Frontend console
npm list axios react-router-dom

# Check node version
node --version  # Should be v16+
```

### Manual Test Login API

```bash
# In another terminal (with curl installed)
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@devzore.com","password":"yourpassword"}'

# Should return:
# {"success":true,"token":"eyJ...","user":{...}}
```

---

## 🔄 Final Reset

If nothing works, try complete reset:

```bash
# Backend
cd backend
rm node_modules -r
npm install
npm start

# Frontend (new terminal)
cd frontend
rm node_modules -r
npm install
npm run dev

# Clear browser
# DevTools → Application → Clear Site Data → Select All → Clear
```

---

## 💡 Pro Tips

1. **Keep Console Open While Testing**
   - F12 → Console tab
   - See logs in real-time

2. **Use Incognito for Clean Test**
   - Ctrl+Shift+N (new incognito window)
   - No cached data interfering

3. **Check Backend Logs**
   - Watch terminal running backend
   - Should see requests coming in

4. **Network Tab is Your Friend**
   - See exact request/response
   - Check headers and body
   - See 401 error details

---

## 📝 Logs to Screenshot for Help

If asking for help, provide:
1. Screenshot of Console tab (F12)
2. Screenshot of Network tab showing failed request
3. Screenshot of Cookies in Application tab
4. Backend terminal logs
5. Your admin email/password attempts

---

**Status:** Ready to debug! 🔍

Check console now: Open DevTools (F12) and look for the logs!
