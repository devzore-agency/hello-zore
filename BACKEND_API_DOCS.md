# DevZore Backend API Documentation

## 🔧 Fixed Issues

✅ **POST create**: Properly saves draft posts
✅ **PUT update**: Now tracks status changes for category postCount
✅ **GET admin/all**: Shows all posts (draft + published)
✅ **GET admin/:id**: Fetch post by MongoDB ID for editing
✅ **GET /**: Shows only published posts on public blog
✅ **Response format**: Consistent across all endpoints

---

## 📋 API Endpoints (Complete)

### PUBLIC ENDPOINTS (No Auth Required)

#### 1. Get All Published Posts
```
GET /api/posts
```
**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 10)
- `category` (optional, slug)
- `tag` (optional)
- `search` (optional, text search)
- `featured` (optional, boolean)
- `sort` (optional, default: -publishedAt)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d5ec49c1234567890abcde",
      "title": "Post Title",
      "slug": "post-title-1234",
      "excerpt": "Short description",
      "coverImage": "https://...",
      "coverImageAlt": "Alt text",
      "author": { "_id": "...", "name": "...", "avatar": "..." },
      "category": { "_id": "...", "name": "Tech", "slug": "tech" },
      "status": "published",
      "publishedAt": "2024-08-12T10:00:00Z",
      "featured": false,
      "readTime": 5,
      "views": 100,
      "createdAt": "2024-08-12T09:00:00Z",
      "updatedAt": "2024-08-12T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "pages": 3,
    "limit": 10
  }
}
```

#### 2. Get Featured Posts
```
GET /api/posts/featured
```
**Returns:** 6 featured published posts

#### 3. Get Latest Posts
```
GET /api/posts/latest
```
**Returns:** 3 latest published posts

#### 4. Get Single Post by Slug
```
GET /api/posts/:slug
```
**Example:** `GET /api/posts/my-blog-post`

**Response:**
```json
{
  "success": true,
  "data": { ...full post with content... },
  "related": [ ...3 related posts... ]
}
```

---

### ADMIN ENDPOINTS (Requires JWT + Admin Role)

#### 1. Get All Posts (Draft + Published)
```
GET /api/posts/admin/all
Headers: Authorization: Bearer <token>
```
**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 20)
- `status` (optional: draft, published, scheduled)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "title": "Draft Post",
      "slug": "draft-post-1234",
      "status": "draft",
      "createdAt": "2024-08-12T09:00:00Z",
      ...
    }
  ],
  "pagination": { ... }
}
```

#### 2. Get Single Post by ID
```
GET /api/posts/admin/:id
Headers: Authorization: Bearer <token>
```
**Example:** `GET /api/posts/admin/60d5ec49c1234567890abcde`

**Response:**
```json
{
  "success": true,
  "data": { ...full post including content... }
}
```

#### 3. Create Post
```
POST /api/posts
Headers: 
  Authorization: Bearer <token>
  Content-Type: application/json

Body: {
  "title": "My New Post",
  "slug": "my-new-post",
  "excerpt": "This is a short excerpt",
  "content": "<h1>Post Content</h1><p>Full HTML content...</p>",
  "coverImage": "https://example.com/image.jpg",
  "coverImageAlt": "Image description",
  "category": "60d5ec49c1234567890abcde",
  "status": "draft",
  "seoTitle": "SEO Title (max 70 chars)",
  "seoDescription": "SEO Description (max 160 chars)",
  "seoKeywords": "keyword1, keyword2",
  "tags": ["tag1", "tag2"],
  "featured": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "60d5ec49c1234567890abcde",
    "title": "My New Post",
    "status": "draft",
    "createdAt": "2024-08-12T10:00:00Z",
    ...
  }
}
```

#### 4. Update Post
```
PUT /api/posts/:id
Headers:
  Authorization: Bearer <token>
  Content-Type: application/json

Body: {
  "title": "Updated Title",
  "status": "published",
  ...any fields to update
}
```

**Key Feature:** When changing `status` from draft to published:
- ✅ `publishedAt` is auto-set
- ✅ `category.postCount` is incremented
- ✅ Post appears on public blog

When changing from published to draft:
- ✅ `category.postCount` is decremented
- ✅ Post is hidden from public blog

**Response:**
```json
{
  "success": true,
  "data": { ...updated post... }
}
```

#### 5. Delete Post
```
DELETE /api/posts/:id
Headers: Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Post deleted"
}
```

#### 6. Toggle Featured
```
PATCH /api/posts/:id/toggle-featured
Headers: Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": { ...post with featured: true/false... }
}
```

---

## 🔐 Authentication

### Login
```
POST /api/auth/login
Content-Type: application/json

Body: {
  "email": "admin@devzore.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "name": "Admin Name",
    "email": "admin@devzore.com",
    "role": "admin"
  }
}
```

### Usage of Token
Include in Authorization header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## 🚀 Workflow: Create & Publish Post

### Step 1: Create Draft Post
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Blog Post",
    "excerpt": "Short description",
    "content": "<p>Full content here</p>",
    "category": "60d5ec49c1234567890abcde",
    "status": "draft"
  }'
```

### Step 2: Post appears in Admin Dashboard
```bash
curl http://localhost:5000/api/posts/admin/all \
  -H "Authorization: Bearer <token>"
# Returns all posts including draft
```

### Step 3: Edit & Publish Post
```bash
curl -X PUT http://localhost:5000/api/posts/<post_id> \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "published"
  }'
```

### Step 4: Post appears on Public Blog
```bash
curl http://localhost:5000/api/posts
# Now returns the published post
```

---

## 📊 Post Schema

```javascript
{
  title: String (required, max 200),
  slug: String (required, unique),
  excerpt: String (required, max 300),
  content: String (required, HTML),
  coverImage: String (optional, URL),
  coverImageAlt: String (optional),
  author: ObjectId (required, ref User),
  category: ObjectId (required, ref Category),
  tags: [String],
  status: String (enum: draft, published, scheduled, default: draft),
  publishedAt: Date (auto-set when status=published),
  featured: Boolean (default: false),
  readTime: Number (auto-calculated),
  views: Number (default: 0),
  likes: Number (default: 0),
  seoTitle: String (max 70),
  seoDescription: String (max 160),
  seoKeywords: String,
  tableOfContents: Array,
  createdAt: Date,
  updatedAt: Date
}
```

---

## ✅ Status Meanings

| Status | Public Blog | Admin List | Can Edit | Can Publish |
|--------|-------------|------------|----------|-------------|
| `draft` | ❌ Hidden | ✅ Visible | ✅ Yes | ✅ Yes |
| `published` | ✅ Visible | ✅ Visible | ✅ Yes | ✅ Yes |
| `scheduled` | ❌ Hidden | ✅ Visible | ✅ Yes | ⏳ Auto-publish |

---

## 🔍 Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Title required",
  "errors": [
    { "path": "title", "msg": "Title required" }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Not authorized — no token"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Admin access required"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Post not found"
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## 🧪 Testing with cURL

### Get all published posts
```bash
curl http://localhost:5000/api/posts
```

### Get draft posts (admin only)
```bash
curl http://localhost:5000/api/posts/admin/all?status=draft \
  -H "Authorization: Bearer <token>"
```

### Create post
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test",
    "excerpt": "Test",
    "content": "<p>Test</p>",
    "category": "ID_HERE",
    "status": "draft"
  }'
```

---

## 📝 SEO Impact

✅ **Not affected by backend changes:**
- Blog schema structure
- Published post visibility
- SEO meta fields (seoTitle, seoDescription, seoKeywords)
- Sitemap generation
- Open Graph tags
- Structured data (FAQ, Breadcrumb, HowTo, etc.)

---

## ⚡ Performance

✅ **Optimizations included:**
- MongoDB indexes on: status, publishedAt, category, tags
- Full-text search index
- Pagination support
- Select specific fields (exclude content from lists)
- Lean queries where applicable

---

## 🔄 Workflow Summary

```
Admin Dashboard
    ↓
Create Post (draft)
    ↓
Edit Post metadata
    ↓
Add content in editor
    ↓
Change status → published
    ↓
POST /api/posts/:id (PUT with status: published)
    ↓
Backend: Sets publishedAt, updates category postCount
    ↓
Frontend: Refetch admin list (shows updated post)
    ↓
Public blog: GET /api/posts (includes published post)
    ↓
User visits: devzore.com/blog
    ↓
Post visible with full content
```

---

**Status:** ✅ Backend fully fixed and documented
**Last Updated:** August 12, 2024
**Version:** 1.0
