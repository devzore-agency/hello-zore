import api from "./api";

/**
 * =========================================================
 * PUBLIC POST ENDPOINTS
 * =========================================================
 */

/**
 * Get all published posts
 *
 * GET /api/posts
 */
const getPosts = async (page = 1, limit = 20, filters = {}) => {
  const response = await api.get("/posts", {
    params: {
      page,
      limit,
      ...filters,
    },
  });

  return response.data;
};


/**
 * Get single published post by slug
 *
 * GET /api/posts/:slug
 */
const getPostBySlug = async (slug) => {
  if (!slug) {
    throw new Error("Blog slug is required.");
  }

  const response = await api.get(
    `/posts/${encodeURIComponent(slug)}`
  );

  return response.data;
};


/**
 * Get featured published posts
 *
 * GET /api/posts/featured
 */
const getFeaturedPosts = async () => {
  const response = await api.get("/posts/featured");

  return response.data;
};


/**
 * Get latest published posts
 *
 * GET /api/posts/latest
 */
const getLatestPosts = async () => {
  const response = await api.get("/posts/latest");

  return response.data;
};


/**
 * =========================================================
 * PUBLIC COMMENT ENDPOINTS
 * =========================================================
 */

/**
 * Get comments for a blog post
 *
 * GET /api/posts/:slug/comments
 */
const getComments = async (slug) => {
  if (!slug) {
    throw new Error("Blog slug is required.");
  }

  const response = await api.get(
    `/posts/${encodeURIComponent(slug)}/comments`
  );

  return response.data;
};


/**
 * Add comment to a blog post
 *
 * POST /api/posts/:slug/comments
 *
 * Example:
 *
 * {
 *   name: "Muhammad",
 *   email: "example@gmail.com",
 *   comment: "Great article!"
 * }
 */
const addComment = async (slug, commentData) => {
  if (!slug) {
    throw new Error("Blog slug is required.");
  }

  if (!commentData) {
    throw new Error("Comment data is required.");
  }

  const response = await api.post(
    `/posts/${encodeURIComponent(slug)}/comments`,
    commentData
  );

  return response.data;
};


/**
 * =========================================================
 * ADMIN POST ENDPOINTS
 * =========================================================
 */

/**
 * Get all posts for admin
 *
 * GET /api/posts/admin/all
 *
 * Includes:
 * - draft
 * - published
 * - scheduled
 */
const getAdminPosts = async (
  page = 1,
  limit = 20,
  status = ""
) => {
  const params = {
    page,
    limit,
  };

  if (status) {
    params.status = status;
  }

  const response = await api.get(
    "/posts/admin/all",
    {
      params,
    }
  );

  return response.data;
};


/**
 * Get single post by MongoDB ID
 *
 * GET /api/posts/admin/:id
 */
const getAdminPostById = async (id) => {
  if (!id) {
    throw new Error("Post ID is required.");
  }

  const response = await api.get(
    `/posts/admin/${id}`
  );

  return response.data;
};


/**
 * Create new post
 *
 * POST /api/posts
 */
const createPost = async (postData) => {
  const response = await api.post(
    "/posts",
    postData
  );

  return response.data;
};


/**
 * Update existing post
 *
 * PUT /api/posts/:id
 */
const updatePost = async (id, postData) => {
  if (!id) {
    throw new Error("Post ID is required.");
  }

  const response = await api.put(
    `/posts/${id}`,
    postData
  );

  return response.data;
};


/**
 * Delete post
 *
 * DELETE /api/posts/:id
 */
const deletePost = async (id) => {
  if (!id) {
    throw new Error("Post ID is required.");
  }

  const response = await api.delete(
    `/posts/${id}`
  );

  return response.data;
};


/**
 * Toggle featured status
 *
 * PATCH /api/posts/:id/toggle-featured
 */
const toggleFeatured = async (id) => {
  if (!id) {
    throw new Error("Post ID is required.");
  }

  const response = await api.patch(
    `/posts/${id}/toggle-featured`
  );

  return response.data;
};


/**
 * =========================================================
 * EXPORT
 * =========================================================
 */

export default {
  // Public Posts
  getPosts,
  getPostBySlug,
  getFeaturedPosts,
  getLatestPosts,

  // Public Comments
  getComments,
  addComment,

  // Admin Posts
  getAdminPosts,
  getAdminPostById,
  createPost,
  updatePost,
  deletePost,
  toggleFeatured,
};