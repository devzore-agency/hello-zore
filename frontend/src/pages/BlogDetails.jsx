import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import postService from "../services/postService";
import commentService from "../services/commentService";

const BlogDetails = ({ isDark = true }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ======================================================
  // BLOG STATE
  // ======================================================

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ======================================================
  // COMMENTS STATE
  // ======================================================

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState("");

  // IMPORTANT:
  // Backend schema uses "content", NOT "comment"
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [commentSubmitting, setCommentSubmitting] = useState(false);

  // ======================================================
  // FETCH BLOG
  // ======================================================

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        console.log("Fetching blog slug:", slug);

        const response = await postService.getPostBySlug(slug);

        console.log("Single Blog Response:", response);

        const blog =
          response?.data?.post ||
          response?.data ||
          response?.post ||
          response;

        if (!blog || typeof blog !== "object") {
          throw new Error("Invalid blog data.");
        }

        if (!blog?._id) {
          console.error("Blog ID missing:", blog);
          throw new Error("Blog post ID is missing.");
        }

        console.log("Blog ID:", blog._id);

        setPost(blog);
      } catch (err) {
        console.error("Fetch single blog error:", err);

        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Blog post not found.";

        setError(message);

        toast.error("Unable to load blog.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  // ======================================================
  // FETCH COMMENTS
  // ======================================================

  useEffect(() => {
    const fetchComments = async () => {
      if (!post?._id) {
        return;
      }

      try {
        setCommentsLoading(true);
        setCommentsError("");

        console.log(
          "Fetching comments for post ID:",
          post._id
        );

        const response =
          await commentService.getPostComments(post._id);

        console.log(
          "Comments Response:",
          response
        );

        let commentList = [];

        if (Array.isArray(response)) {
          commentList = response;
        } else if (Array.isArray(response?.data)) {
          commentList = response.data;
        } else if (
          Array.isArray(response?.data?.comments)
        ) {
          commentList = response.data.comments;
        } else if (
          Array.isArray(response?.comments)
        ) {
          commentList = response.comments;
        }

        setComments(commentList);
      } catch (err) {
        console.error(
          "Fetch comments error:",
          err
        );

        const message =
          err?.response?.data?.message ||
          "Unable to load comments.";

        setCommentsError(message);
        setComments([]);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [post?._id]);

  // ======================================================
  // DATE FORMAT
  // ======================================================

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  // ======================================================
  // CATEGORY
  // ======================================================

  const categoryName =
    post?.category &&
    typeof post.category === "object"
      ? post.category?.name
      : post?.category;

  // ======================================================
  // AUTHOR NAME
  // ======================================================

  const authorName =
    post?.author &&
    typeof post.author === "object"
      ? post.author?.name
      : post?.author;

  // ======================================================
  // COMMENT INPUT CHANGE
  // ======================================================

  const handleCommentChange = (event) => {
    const { name, value } = event.target;

    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ======================================================
  // SUBMIT COMMENT
  // ======================================================

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    // --------------------------------------------------
    // CHECK POST ID
    // --------------------------------------------------

    if (!post?._id) {
      console.error(
        "Post ID missing:",
        post
      );

      toast.error(
        "Blog post ID is missing."
      );

      return;
    }

    // --------------------------------------------------
    // GET FORM VALUES
    // --------------------------------------------------

    const name =
      commentForm.name.trim();

    const email =
      commentForm.email.trim();

    const content =
      commentForm.content.trim();

    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (!name) {
      toast.error(
        "Please enter your name."
      );

      return;
    }

    if (!email) {
      toast.error(
        "Please enter your email."
      );

      return;
    }

    if (!content) {
      toast.error(
        "Please write a comment."
      );

      return;
    }

    // Backend schema requires minimum 10 characters
    if (content.length < 10) {
      toast.error(
        "Comment must be at least 10 characters."
      );

      return;
    }

    if (content.length > 500) {
      toast.error(
        "Comment cannot exceed 500 characters."
      );

      return;
    }

    // --------------------------------------------------
    // CREATE COMMENT DATA
    // --------------------------------------------------
    // IMPORTANT:
    //
    // Backend Comment Schema:
    //
    // post
    // name
    // email
    // content
    //
    // NOT:
    //
    // postId
    // comment
    // --------------------------------------------------

    const commentData = {
      post: post._id,
      name,
      email,
      content,
    };

    console.log(
      "Submitting Comment Data:",
      commentData
    );

    try {
      setCommentSubmitting(true);

      const response =
        await commentService.createComment(
          commentData
        );

      console.log(
        "Create Comment Response:",
        response
      );

      toast.success(
        "Comment submitted successfully!"
      );

      // Clear form
      setCommentForm({
        name: "",
        email: "",
        content: "",
      });

      /*
       * Comment default isApproved = false.
       *
       * Therefore it normally will NOT appear
       * immediately in public comments.
       *
       * Admin has to approve it first.
       */
    } catch (err) {
      console.error(
        "Create comment error:",
        err
      );

      console.error(
        "Backend response:",
        err?.response?.data
      );

      const message =
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[0]?.msg ||
        err?.message ||
        "Unable to submit comment.";

      toast.error(message);
    } finally {
      setCommentSubmitting(false);
    }
  };

  // ======================================================
  // COMMENT AUTHOR
  // ======================================================

  const getCommentAuthorName = (
    comment
  ) => {
    if (comment?.name) {
      return comment.name;
    }

    if (
      comment?.user &&
      typeof comment.user === "object"
    ) {
      return (
        comment.user?.name ||
        comment.user?.username ||
        "Anonymous"
      );
    }

    if (
      typeof comment?.user === "string"
    ) {
      return comment.user;
    }

    return "Anonymous";
  };

  // ======================================================
  // COMMENT DATE
  // ======================================================

  const getCommentDate = (
    comment
  ) => {
    return (
      comment?.createdAt ||
      comment?.date ||
      comment?.updatedAt
    );
  };

  // ======================================================
  // LOADING
  // ======================================================

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark
            ? "bg-[#030303] text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="text-center px-6">
          <div
            className={`w-14 h-14 rounded-full border-4 mx-auto mb-5 animate-spin ${
              isDark
                ? "border-white/10 border-t-purple-500"
                : "border-gray-200 border-t-purple-600"
            }`}
          />

          <p
            className={
              isDark
                ? "text-gray-400"
                : "text-gray-600"
            }
          >
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  // ======================================================
  // BLOG ERROR
  // ======================================================

  if (error || !post) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center px-6 ${
          isDark
            ? "bg-[#030303] text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">
            😕
          </div>

          <h1 className="text-3xl font-black mb-4">
            Blog Not Found
          </h1>

          <p
            className={`mb-8 ${
              isDark
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            {error ||
              "The requested blog could not be found."}
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/blog")
            }
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // ======================================================
  // MAIN
  // ======================================================

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        isDark
          ? "bg-[#030303] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      {isDark && (
        <>
          <div className="fixed top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />

          <div className="fixed bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />
        </>
      )}

      {/* ==================================================
          CONTENT
      ================================================== */}

      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        {/* BACK */}

        <button
          type="button"
          onClick={() =>
            navigate("/blog")
          }
          className={`mb-8 sm:mb-10 flex items-center gap-2 text-sm font-bold transition ${
            isDark
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-black"
          }`}
        >
          ← Back to Blogs
        </button>

        {/* ==================================================
            CATEGORY / DATE / READ TIME / VIEWS
        ================================================== */}

        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 flex-wrap">

          {categoryName && (
            <span className="bg-purple-600 text-white text-[9px] sm:text-[10px] font-black px-3 sm:px-4 py-2 rounded-full uppercase tracking-widest">
              {categoryName}
            </span>
          )}

          <span
            className={`text-[10px] sm:text-xs uppercase tracking-widest ${
              isDark
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            {formatDate(
              post?.createdAt
            )}
          </span>

          {post?.readTime && (
            <>
              <span className="text-gray-600">
                •
              </span>

              <span
                className={`text-[10px] sm:text-xs ${
                  isDark
                    ? "text-gray-500"
                    : "text-gray-600"
                }`}
              >
                {post.readTime} read
              </span>
            </>
          )}

          {post?.views !== undefined && (
            <>
              <span className="text-gray-600">
                •
              </span>

              <span
                className={`text-[10px] sm:text-xs ${
                  isDark
                    ? "text-gray-500"
                    : "text-gray-600"
                }`}
              >
                {post.views} views
              </span>
            </>
          )}
        </div>

        {/* ==================================================
            TITLE
        ================================================== */}

        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 sm:mb-8 break-words ${
            isDark
              ? "text-white"
              : "text-black"
          }`}
        >
          {post?.title ||
            "Untitled Post"}
        </h1>

        {/* ==================================================
            EXCERPT
        ================================================== */}

        {post?.excerpt && (
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-4xl ${
              isDark
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            {post.excerpt}
          </p>
        )}

        {/* ==================================================
            COVER IMAGE
        ================================================== */}

        {post?.coverImage && (
          <div className="w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-[2rem] overflow-hidden mb-10 sm:mb-12 bg-gray-900">

            <img
              src={post.coverImage}
              alt={
                post?.coverImageAlt ||
                post?.title ||
                "Blog cover"
              }
              className="w-full h-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display =
                  "none";
              }}
            />

          </div>
        )}

        {/* ==================================================
            AUTHOR
        ================================================== */}

        <div
          className={`flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 pb-6 sm:pb-8 border-b ${
            isDark
              ? "border-white/10"
              : "border-gray-200"
          }`}
        >

          {post?.author &&
          typeof post.author === "object" &&
          post.author?.avatar ? (
            <img
              src={post.author.avatar}
              alt={
                authorName ||
                "Author"
              }
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shrink-0"
              onError={(event) => {
                event.currentTarget.style.display =
                  "none";
              }}
            />
          ) : (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-black shrink-0">
              DZ
            </div>
          )}

          <div className="min-w-0">

            <h3
              className={`font-bold truncate ${
                isDark
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {authorName ||
                "DevZore Team"}
            </h3>

            {post?.author &&
              typeof post.author ===
                "object" &&
              post.author?.bio && (
                <p
                  className={`text-xs sm:text-sm mt-1 line-clamp-2 ${
                    isDark
                      ? "text-gray-500"
                      : "text-gray-600"
                  }`}
                >
                  {post.author.bio}
                </p>
              )}

          </div>
        </div>

        {/* ==================================================
            BLOG CONTENT
        ================================================== */}

        <article
          className={`blog-content w-full overflow-hidden text-base sm:text-lg leading-[1.8] ${
            isDark
              ? "text-gray-300"
              : "text-gray-700"
          }`}
          dangerouslySetInnerHTML={{
            __html:
              post?.content ||
              "<p>No content available.</p>",
          }}
        />

        {/* ==================================================
            COMMENTS SECTION
        ================================================== */}

        <section
          className={`mt-16 sm:mt-20 pt-8 sm:pt-10 border-t ${
            isDark
              ? "border-white/10"
              : "border-gray-200"
          }`}
        >

          {/* COMMENT HEADING */}

          <div className="mb-8">

            <h2 className="text-2xl sm:text-3xl font-black">
              Comments
            </h2>

            <p
              className={`text-sm mt-2 ${
                isDark
                  ? "text-gray-500"
                  : "text-gray-600"
              }`}
            >
              Share your thoughts about this article.
            </p>

          </div>

          {/* ==================================================
              COMMENT FORM
          ================================================== */}

          <form
            onSubmit={
              handleCommentSubmit
            }
            className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl border mb-10 ${
              isDark
                ? "bg-white/[0.02] border-white/10"
                : "bg-gray-50 border-gray-200"
            }`}
          >

            <h3 className="text-lg sm:text-xl font-bold mb-5">
              Leave a Comment
            </h3>

            {/* NAME + EMAIL */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

              {/* NAME */}

              <div>

                <label
                  htmlFor="comment-name"
                  className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Name
                </label>

                <input
                  id="comment-name"
                  type="text"
                  name="name"
                  value={
                    commentForm.name
                  }
                  onChange={
                    handleCommentChange
                  }
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={60}
                  disabled={
                    commentSubmitting
                  }
                  required
                  className={`w-full px-4 py-3.5 rounded-xl outline-none border text-sm transition ${
                    isDark
                      ? "bg-black border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500"
                      : "bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-purple-500"
                  }`}
                />

              </div>

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="comment-email"
                  className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Email
                </label>

                <input
                  id="comment-email"
                  type="email"
                  name="email"
                  value={
                    commentForm.email
                  }
                  onChange={
                    handleCommentChange
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={120}
                  disabled={
                    commentSubmitting
                  }
                  required
                  className={`w-full px-4 py-3.5 rounded-xl outline-none border text-sm transition ${
                    isDark
                      ? "bg-black border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500"
                      : "bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-purple-500"
                  }`}
                />

              </div>

            </div>

            {/* COMMENT */}

            <div className="mb-5">

              <label
                htmlFor="comment-content"
                className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDark
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Comment
              </label>

              <textarea
                id="comment-content"
                name="content"
                value={
                  commentForm.content
                }
                onChange={
                  handleCommentChange
                }
                placeholder="Write your comment..."
                rows={6}
                minLength={10}
                maxLength={500}
                disabled={
                  commentSubmitting
                }
                required
                className={`w-full px-4 py-3.5 rounded-xl outline-none border text-sm transition resize-y ${
                  isDark
                    ? "bg-black border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500"
                    : "bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-purple-500"
                }`}
              />

              <div
                className={`flex justify-between mt-2 text-xs ${
                  isDark
                    ? "text-gray-600"
                    : "text-gray-500"
                }`}
              >
                <span>
                  Minimum 10 characters
                </span>

                <span>
                  {commentForm.content.length}/500
                </span>
              </div>

            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={
                commentSubmitting
              }
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition"
            >
              {commentSubmitting
                ? "Submitting..."
                : "Post Comment"}
            </button>

            <p
              className={`text-xs mt-4 ${
                isDark
                  ? "text-gray-600"
                  : "text-gray-500"
              }`}
            >
              Your comment may need admin
              approval before appearing
              publicly.
            </p>

          </form>

          {/* ==================================================
              COMMENTS LIST
          ================================================== */}

          <div>

            <div className="flex items-center justify-between gap-4 mb-6">

              <h3 className="text-xl sm:text-2xl font-black">
                {comments.length}{" "}
                {comments.length === 1
                  ? "Comment"
                  : "Comments"}
              </h3>

            </div>

            {/* LOADING */}

            {commentsLoading && (
              <div
                className={`py-10 text-center ${
                  isDark
                    ? "text-gray-500"
                    : "text-gray-600"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 mx-auto mb-3 animate-spin ${
                    isDark
                      ? "border-white/10 border-t-purple-500"
                      : "border-gray-200 border-t-purple-600"
                  }`}
                />

                Loading comments...
              </div>
            )}

            {/* ERROR */}

            {!commentsLoading &&
              commentsError && (
                <div
                  className={`p-5 rounded-xl border ${
                    isDark
                      ? "bg-red-500/10 border-red-500/20 text-red-400"
                      : "bg-red-50 border-red-200 text-red-700"
                  }`}
                >
                  {commentsError}
                </div>
              )}

            {/* EMPTY */}

            {!commentsLoading &&
              !commentsError &&
              comments.length === 0 && (
                <div
                  className={`py-10 px-5 text-center rounded-2xl border border-dashed ${
                    isDark
                      ? "border-white/10 bg-white/[0.02]"
                      : "border-gray-300 bg-gray-50"
                  }`}
                >
                  <div className="text-4xl mb-3">
                    💬
                  </div>

                  <h4 className="font-bold mb-2">
                    No comments yet
                  </h4>

                  <p
                    className={`text-sm ${
                      isDark
                        ? "text-gray-500"
                        : "text-gray-600"
                    }`}
                  >
                    Be the first to share
                    your thoughts.
                  </p>
                </div>
              )}

            {/* COMMENTS */}

            {!commentsLoading &&
              comments.length > 0 && (
                <div className="space-y-4">

                  {comments.map(
                    (
                      comment,
                      index
                    ) => {
                      const commentKey =
                        comment?._id ||
                        comment?.id ||
                        `comment-${index}`;

                      return (
                        <div
                          key={
                            commentKey
                          }
                          className={`p-5 sm:p-6 rounded-2xl border ${
                            isDark
                              ? "bg-white/[0.02] border-white/10"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >

                          <div className="flex items-start gap-3 sm:gap-4">

                            {/* AVATAR */}

                            <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-sm">
                              {getCommentAuthorName(
                                comment
                              )
                                .charAt(
                                  0
                                )
                                .toUpperCase()}
                            </div>

                            {/* CONTENT */}

                            <div className="min-w-0 flex-1">

                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mb-2">

                                <h4
                                  className={`font-bold break-words ${
                                    isDark
                                      ? "text-white"
                                      : "text-black"
                                  }`}
                                >
                                  {getCommentAuthorName(
                                    comment
                                  )}
                                </h4>

                                {getCommentDate(
                                  comment
                                ) && (
                                  <span
                                    className={`text-[10px] sm:text-xs shrink-0 ${
                                      isDark
                                        ? "text-gray-600"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {formatDate(
                                      getCommentDate(
                                        comment
                                      )
                                    )}
                                  </span>
                                )}

                              </div>

                              <p
                                className={`text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words ${
                                  isDark
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {comment?.content ||
                                  comment?.comment ||
                                  comment?.text ||
                                  ""}
                              </p>

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )}

                </div>
              )}

          </div>

        </section>

      </main>

      {/* ==================================================
          BLOG CSS
      ================================================== */}

      <style>{`
        .blog-content {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          font-weight: 800;
          line-height: 1.3;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-content h1 {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
        }

        .blog-content h2 {
          font-size: clamp(1.5rem, 4vw, 1.8rem);
        }

        .blog-content h3 {
          font-size: clamp(1.25rem, 3vw, 1.4rem);
        }

        .blog-content p {
          margin-bottom: 1.25rem;
        }

        .blog-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .blog-content ol {
          list-style: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
        }

        .blog-content a {
          color: #a855f7;
          text-decoration: underline;
          overflow-wrap: anywhere;
        }

        .blog-content blockquote {
          border-left: 4px solid #9333ea;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
        }

        .blog-content img {
          display: block;
          max-width: 100%;
          width: auto;
          height: auto;
          border-radius: 1rem;
          margin: 1.5rem auto;
        }

        .blog-content pre {
          max-width: 100%;
          overflow-x: auto;
          padding: 1rem;
          border-radius: 0.75rem;
          background: #111;
          margin: 1.5rem 0;
        }

        .blog-content code {
          font-family: monospace;
          overflow-wrap: anywhere;
        }

        .blog-content table {
          display: block;
          max-width: 100%;
          overflow-x: auto;
          border-collapse: collapse;
        }

        .blog-content iframe {
          max-width: 100%;
        }

        @media (max-width: 640px) {
          .blog-content p {
            margin-bottom: 1rem;
          }

          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4 {
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;