
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import commentService from "../../services/commentService";

const AdminComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [approvingId, setApprovingId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // ======================================================
  // Extract comments safely from API response
  // ======================================================

  const extractComments = (response) => {
    if (Array.isArray(response)) {
      return response;
    }

    if (Array.isArray(response?.data)) {
      return response.data;
    }

    if (Array.isArray(response?.comments)) {
      return response.comments;
    }

    if (Array.isArray(response?.data?.comments)) {
      return response.data.comments;
    }

    return [];
  };

  // ======================================================
  // Load Comments
  // ======================================================

  const loadComments = async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await commentService.getComments();

      const list = extractComments(response);

      setComments(list);
    } catch (error) {
      console.error("Load comments error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load comments."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ======================================================
  // Initial Load
  // ======================================================

  useEffect(() => {
    loadComments();
  }, []);

  // ======================================================
  // Approve Comment
  // ======================================================

  const handleApprove = async (id) => {
    if (!id) {
      toast.error("Invalid comment ID.");
      return;
    }

    try {
      setApprovingId(id);

      const response =
        await commentService.approveComment(id);

      const updatedComment = response?.data;

      setComments((prevComments) =>
        prevComments.map((comment) => {
          const commentId =
            comment._id || comment.id;

          if (commentId !== id) {
            return comment;
          }

          return (
            updatedComment || {
              ...comment,
              isApproved: true,
              isSpam: false,
            }
          );
        })
      );

      toast.success(
        "Comment approved successfully."
      );
    } catch (error) {
      console.error(
        "Approve comment error:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
          "Failed to approve comment."
      );
    } finally {
      setApprovingId(null);
    }
  };

  // ======================================================
  // Delete Comment
  // ======================================================

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("Invalid comment ID.");
      return;
    }

    const comment = comments.find(
      (item) =>
        (item._id || item.id) === id
    );

    const commenterName =
      comment?.name || "this comment";

    const confirmed = window.confirm(
      `Are you sure you want to delete the comment from "${commenterName}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await commentService.deleteComment(id);

      setComments((prevComments) =>
        prevComments.filter(
          (item) =>
            (item._id || item.id) !== id
        )
      );

      toast.success(
        "Comment deleted successfully."
      );
    } catch (error) {
      console.error(
        "Delete comment error:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
          "Failed to delete comment."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ======================================================
  // Format Date
  // ======================================================

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }
    );
  };

  // ======================================================
  // Get Comment Content
  // ======================================================

  const getCommentContent = (comment) => {
    return (
      comment?.content ||
      comment?.comment ||
      "No comment content"
    );
  };

  // ======================================================
  // Get Post Title
  // ======================================================

  const getPostTitle = (comment) => {
    if (
      comment?.post &&
      typeof comment.post === "object"
    ) {
      return (
        comment.post?.title ||
        comment.post?.slug ||
        "Unknown Post"
      );
    }

    return "Blog Post";
  };

  // ======================================================
  // Render
  // ======================================================

  return (
    <div>
      {/* ==================================================
          Header
      ================================================== */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Comments
          </h1>

          <p className="text-slate-500 mt-1">
            Manage comments submitted by visitors.
          </p>
        </div>

        {/* Refresh Button */}

        <button
          type="button"
          onClick={() => loadComments(true)}
          disabled={loading || refreshing}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span
            className={
              refreshing
                ? "inline-block animate-spin"
                : ""
            }
          >
            ↻
          </span>

          {refreshing
            ? "Refreshing..."
            : "Refresh"}
        </button>
      </div>

      {/* ==================================================
          Stats
      ================================================== */}

      {!loading && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-sm">
            <span className="font-semibold text-slate-900">
              {comments.length}
            </span>

            {comments.length === 1
              ? "Comment"
              : "Comments"}
          </div>
        </div>
      )}

      {/* ==================================================
          Comments Container
      ================================================== */}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {/* ==================================================
            Loading
        ================================================== */}

        {loading && (
          <div className="py-16 flex flex-col items-center justify-center">
            <div className="w-7 h-7 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin mb-3" />

            <p className="text-slate-400">
              Loading comments...
            </p>
          </div>
        )}

        {/* ==================================================
            Empty State
        ================================================== */}

        {!loading &&
          comments.length === 0 && (
            <div className="py-16 px-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl mb-4">
                💬
              </div>

              <p className="font-semibold text-slate-700">
                No comments found
              </p>

              <p className="text-sm text-slate-400 mt-1">
                Comments submitted by visitors
                will appear here.
              </p>
            </div>
          )}

        {/* ==================================================
            Comments List
        ================================================== */}

        {!loading &&
          comments.length > 0 && (
            <div className="divide-y divide-slate-100">
              {comments.map((comment) => {
                const id =
                  comment._id ||
                  comment.id;

                const isDeleting =
                  deletingId === id;

                const isApproving =
                  approvingId === id;

                return (
                  <div
                    key={id}
                    className="p-5 sm:p-6 hover:bg-slate-50/50 transition"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                      {/* ==================================================
                          Comment Information
                      ================================================== */}

                      <div className="min-w-0 flex-1">
                        {/* Name + Email */}

                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-semibold text-slate-900">
                            {comment.name ||
                              "Anonymous"}
                          </h3>

                          {comment.email && (
                            <span className="text-xs text-slate-400 break-all">
                              {comment.email}
                            </span>
                          )}
                        </div>

                        {/* Post */}

                        <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                            Post:{" "}
                            {getPostTitle(
                              comment
                            )}
                          </span>
                        </div>

                        {/* Comment */}

                        <p className="text-sm text-slate-700 mt-4 leading-6 whitespace-pre-wrap break-words">
                          {getCommentContent(
                            comment
                          )}
                        </p>

                        {/* Status */}

                        <div className="flex flex-wrap items-center gap-2 mt-4">
                          {comment.isApproved ? (
                            <span className="inline-flex px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                              Approved
                            </span>
                          ) : (
                            <span className="inline-flex px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                              Pending
                            </span>
                          )}

                          {comment.isSpam && (
                            <span className="inline-flex px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                              Spam
                            </span>
                          )}
                        </div>

                        {/* Date */}

                        <p className="text-xs text-slate-400 mt-3">
                          {formatDate(
                            comment.createdAt
                          )}
                        </p>
                      </div>

                      {/* ==================================================
                          Action Buttons
                      ================================================== */}

                      <div className="flex flex-wrap gap-2 flex-shrink-0">
                        {/* Approve Button */}

                        {!comment.isApproved && (
                          <button
                            type="button"
                            onClick={() =>
                              handleApprove(id)
                            }
                            disabled={
                              isApproving ||
                              isDeleting
                            }
                            className="px-3 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isApproving
                              ? "Approving..."
                              : "Approve"}
                          </button>
                        )}

                        {/* Delete Button */}

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(id)
                          }
                          disabled={
                            isDeleting ||
                            isApproving
                          }
                          className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isDeleting
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
      </div>
    </div>
  );
};

export default AdminComments;
