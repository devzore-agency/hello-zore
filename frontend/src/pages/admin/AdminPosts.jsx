import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import postService from "../../services/postService";

const AdminPosts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // =====================================================
  // Extract posts from API response
  // =====================================================

  const extractPosts = (response) => {
    if (Array.isArray(response)) {
      return response;
    }

    if (Array.isArray(response?.data)) {
      return response.data;
    }

    if (Array.isArray(response?.posts)) {
      return response.posts;
    }

    // In case backend returns:
    // { data: { posts: [] } }
    if (Array.isArray(response?.data?.posts)) {
      return response.data.posts;
    }

    return [];
  };

  // =====================================================
  // Get Post ID safely
  // =====================================================

  const getPostId = (post) => {
    return post?._id || post?.id || null;
  };

  // =====================================================
  // Load Admin Posts
  // =====================================================

  const loadPosts = useCallback(async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await postService.getAdminPosts(1, 100);

      const list = extractPosts(response);

      setPosts(list);
    } catch (error) {
      console.error("Load admin posts error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load posts."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // =====================================================
  // Initial Load
  // =====================================================

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  // =====================================================
  // Delete Post
  // =====================================================

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("Invalid post ID.");
      return;
    }

    const post = posts.find(
      (item) => getPostId(item) === id
    );

    const title = post?.title || "this post";

    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await postService.deletePost(id);

      setPosts((previousPosts) =>
        previousPosts.filter(
          (item) => getPostId(item) !== id
        )
      );

      toast.success("Post deleted successfully.");
    } catch (error) {
      console.error("Delete post error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to delete post."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =====================================================
  // Edit Post
  // =====================================================

  const handleEdit = (id) => {
    if (!id) {
      toast.error("Invalid post ID.");
      return;
    }

    navigate(`/admin/posts/edit/${id}`);
  };

  // =====================================================
  // Status Badge
  // =====================================================

  const getStatusClass = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-700";

      case "scheduled":
        return "bg-blue-100 text-blue-700";

      case "draft":
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  // =====================================================
  // Format Date
  // =====================================================

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // =====================================================
  // Render
  // =====================================================

  return (
    <div>
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Posts
          </h1>

          <p className="text-slate-500 mt-1">
            Create and manage your blog posts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Refresh */}

          <button
            type="button"
            onClick={() => loadPosts(true)}
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

            {refreshing ? "Refreshing..." : "Refresh"}
          </button>

          {/* Create */}

          <Link
            to="/admin/posts/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition"
          >
            <span className="text-lg leading-none">
              +
            </span>

            Create Post
          </Link>
        </div>
      </div>

      {/* =================================================
          STATS
      ================================================= */}

      {!loading && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-sm">
            <span className="font-semibold text-slate-900">
              {posts.length}
            </span>

            {posts.length === 1 ? "Post" : "Posts"}
          </div>
        </div>
      )}

      {/* =================================================
          TABLE
      ================================================= */}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            {/* =================================================
                TABLE HEADER
            ================================================= */}

            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-left">
                <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Post
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Category
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Views
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            {/* =================================================
                TABLE BODY
            ================================================= */}

            <tbody>
              {/* =================================================
                  LOADING
              ================================================= */}

              {loading && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-16"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-7 h-7 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin mb-3" />

                      <p className="text-slate-400">
                        Loading posts...
                      </p>
                    </div>
                  </td>
                </tr>
              )}

              {/* =================================================
                  POSTS
              ================================================= */}

              {!loading &&
                posts.map((post) => {
                  const id = getPostId(post);

                  const categoryName =
                    post?.category?.name ||
                    (typeof post?.category === "string"
                      ? post.category
                      : "Uncategorized");

                  const status =
                    post?.status || "draft";

                  return (
                    <tr
                      key={id || post.slug || post.title}
                      className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70 transition"
                    >
                      {/* =================================================
                          POST
                      ================================================= */}

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {/* Cover Image */}

                          <div className="w-16 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                            {post?.coverImage ? (
                              <img
                                src={post.coverImage}
                                alt={
                                  post.coverImageAlt ||
                                  post.title ||
                                  "Post cover"
                                }
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(event) => {
                                  event.currentTarget.style.display =
                                    "none";
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                                No Image
                              </div>
                            )}
                          </div>

                          {/* Title */}

                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 line-clamp-1">
                              {post?.title || "Untitled"}
                            </p>

                            <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                              {post?.slug || "No slug"}
                            </p>

                            {post?.featured && (
                              <span className="inline-flex mt-2 px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-semibold">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* =================================================
                          CATEGORY
                      ================================================= */}

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {categoryName}
                      </td>

                      {/* =================================================
                          STATUS
                      ================================================= */}

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusClass(
                            status
                          )}`}
                        >
                          {status}
                        </span>
                      </td>

                      {/* =================================================
                          VIEWS
                      ================================================= */}

                      <td className="px-6 py-5 text-sm text-slate-500">
                        {typeof post?.views === "number"
                          ? post.views.toLocaleString()
                          : "0"}
                      </td>

                      {/* =================================================
                          DATE
                      ================================================= */}

                      <td className="px-6 py-5 text-sm text-slate-500">
                        {formatDate(
                          post?.createdAt
                        )}
                      </td>

                      {/* =================================================
                          ACTIONS
                      ================================================= */}

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-end gap-2">
                          {/* Edit */}

                          <button
                            type="button"
                            onClick={() =>
                              handleEdit(id)
                            }
                            disabled={
                              !id ||
                              deletingId === id
                            }
                            className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Edit
                          </button>

                          {/* Delete */}

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(id)
                            }
                            disabled={
                              !id ||
                              deletingId === id
                            }
                            className="px-3 py-2 rounded-lg text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {deletingId === id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

              {/* =================================================
                  EMPTY
              ================================================= */}

              {!loading &&
                posts.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-16 px-6"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl mb-4">
                          ✎
                        </div>

                        <p className="font-semibold text-slate-700">
                          No posts yet
                        </p>

                        <p className="text-sm text-slate-400 mt-1">
                          Create your first blog post.
                        </p>

                        <Link
                          to="/admin/posts/new"
                          className="mt-5 px-4 py-2.5 rounded-lg bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition"
                        >
                          Create Post
                        </Link>
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;