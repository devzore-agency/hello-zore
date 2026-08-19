import api from "./api";

// ======================================================
// ADMIN - GET ALL COMMENTS
// GET /api/comments/admin/all
// ======================================================

const getComments = async (params = {}) => {
  const response = await api.get("/comments/admin/all", {
    params,
  });

  return response.data;
};

// ======================================================
// ADMIN - APPROVE COMMENT
// PATCH /api/comments/:id/approve
// ======================================================

const approveComment = async (id) => {
  if (!id) {
    throw new Error("Comment ID is required.");
  }

  const response = await api.patch(
    `/comments/${id}/approve`
  );

  return response.data;
};

// ======================================================
// ADMIN - DELETE COMMENT
// DELETE /api/comments/:id
// ======================================================

const deleteComment = async (id) => {
  if (!id) {
    throw new Error("Comment ID is required.");
  }

  const response = await api.delete(
    `/comments/${id}`
  );

  return response.data;
};

// ======================================================
// PUBLIC - GET APPROVED COMMENTS FOR POST
// GET /api/comments/:postId
// ======================================================

const getPostComments = async (postId) => {
  if (!postId) {
    throw new Error("Post ID is required.");
  }

  const response = await api.get(
    `/comments/${postId}`
  );

  return response.data;
};

// ======================================================
// PUBLIC - CREATE COMMENT
// POST /api/comments
// ======================================================

const createComment = async (commentData) => {
  if (!commentData) {
    throw new Error("Comment data is required.");
  }

  const response = await api.post(
    "/comments",
    commentData
  );

  return response.data;
};

// ======================================================
// EXPORT
// ======================================================

const commentService = {
  getComments,
  approveComment,
  deleteComment,
  getPostComments,
  createComment,
};

export default commentService;