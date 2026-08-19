import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import postService from "../services/postService";

const BlogPost = ({ isDark = true }) => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ======================================================
  // FETCH POSTS
  // ======================================================

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await postService.getPosts();

        console.log("Blog API Response:", response);

        let posts = [];

        if (Array.isArray(response)) {
          posts = response;
        } else if (Array.isArray(response?.data)) {
          posts = response.data;
        } else if (Array.isArray(response?.data?.posts)) {
          posts = response.data.posts;
        } else if (Array.isArray(response?.posts)) {
          posts = response.posts;
        }

        console.log("Final Posts:", posts);

        if (isMounted) {
          setAllPosts(posts);
        }
      } catch (err) {
        console.error("Fetch blog posts error:", err);

        if (isMounted) {
          const message =
            err?.response?.data?.message ||
            "Failed to load blog posts.";

          setError(message);
          setAllPosts([]);

          toast.error("Could not load blog posts.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  // ======================================================
  // OPEN BLOG
  // ======================================================

  const handleOpenBlog = (post) => {
    console.log("Opening Blog:", post);

    if (!post) {
      console.error("No blog post selected.");
      return;
    }

    // IMPORTANT:
    // slug should come from backend
    const slug = post?.slug;

    if (!slug) {
      console.error("This blog does not have a slug:", post);

      toast.error("This blog does not have a valid URL.");
      return;
    }

    navigate(`/blog/${slug}`);
  };

  // ======================================================
  // CATEGORIES
  // ======================================================

  const categories = useMemo(() => {
    const categoryNames = allPosts
      .map((post) => {
        if (
          post?.category &&
          typeof post.category === "object"
        ) {
          return post.category?.name;
        }

        return post?.category;
      })
      .filter(
        (category) =>
          typeof category === "string" &&
          category.trim() !== ""
      );

    return ["All", ...new Set(categoryNames)];
  }, [allPosts]);

  // ======================================================
  // FILTER POSTS
  // ======================================================

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return allPosts;
    }

    return allPosts.filter((post) => {
      const category =
        post?.category &&
        typeof post.category === "object"
          ? post.category?.name
          : post?.category;

      return category === activeCategory;
    });
  }, [allPosts, activeCategory]);

  // ======================================================
  // CATEGORY NAME
  // ======================================================

  const getCategoryName = (post) => {
    if (
      post?.category &&
      typeof post.category === "object"
    ) {
      return post.category?.name || "Uncategorized";
    }

    return post?.category || "Uncategorized";
  };

  // ======================================================
  // DATE
  // ======================================================

  const formatDate = (date) => {
    if (!date) return "—";

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

  // ======================================================
  // POST KEY
  // ======================================================

  const getPostKey = (post, index) => {
    return (
      post?._id ||
      post?.id ||
      post?.slug ||
      `blog-${index}`
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
        <div className="text-center">
          <div
            className={`w-14 h-14 rounded-full border-4 mx-auto mb-5 animate-spin ${
              isDark
                ? "border-white/10 border-t-purple-500"
                : "border-gray-200 border-t-purple-600"
            }`}
          />

          <p
            className={`text-sm font-medium ${
              isDark
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Loading blog posts...
          </p>
        </div>
      </div>
    );
  }

  // ======================================================
  // MAIN
  // ======================================================

  return (
    <div
      className={`min-h-screen font-sans ${
        isDark
          ? "bg-[#030303] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* BACKGROUND */}

      {isDark && (
        <>
          <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        </>
      )}

      {/* PAGE */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}

        <section className="mb-12 pt-4">
          <span className="text-purple-500 text-[11px] font-black uppercase tracking-[0.4em] block mb-2">
            DevZore Insights
          </span>

          <h1 className="text-3xl lg:text-5xl font-black tracking-tighter italic mb-4">
            TECHNICAL{" "}
            <span
              className={
                isDark
                  ? "text-gray-500"
                  : "text-gray-400"
              }
            >
              BLOGS
            </span>
          </h1>

          <p
            className={`text-base max-w-2xl leading-relaxed ${
              isDark
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Exploring the frontiers of full-stack
            engineering, cloud architecture, and
            high-performance software design.
          </p>
        </section>

        {/* CATEGORIES */}

        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === category
                  ? isDark
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-black"
                  : isDark
                  ? "bg-white/5 text-gray-500 border-white/5 hover:border-purple-500/50 hover:text-white"
                  : "bg-gray-100 text-gray-600 border-gray-300 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ERROR */}

        {error && (
          <div
            className={`p-6 rounded-2xl mb-10 border ${
              isDark
                ? "bg-red-500/10 border-red-500/20 text-red-400"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            <p className="font-bold">{error}</p>

            <p className="text-sm mt-2 opacity-80">
              Please refresh the page and try again.
            </p>
          </div>
        )}

        {/* EMPTY */}

        {!error &&
          filteredPosts.length === 0 && (
            <div
              className={`text-center py-24 px-6 rounded-3xl border border-dashed ${
                isDark
                  ? "border-white/10 bg-white/[0.02]"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="text-5xl mb-5">
                📝
              </div>

              <h2
                className={`text-xl font-bold ${
                  isDark
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                No blog posts yet
              </h2>

              <p
                className={`text-sm mt-2 ${
                  isDark
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
                Published blog posts will appear here.
              </p>
            </div>
          )}

        {/* BLOG GRID */}

        {filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post, index) => {
              const postKey = getPostKey(post, index);

              return (
                <article
                  key={postKey}
                  onClick={() =>
                    handleOpenBlog(post)
                  }
                  className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col cursor-pointer ${
                    isDark
                      ? "bg-[#080808] border-white/5 hover:border-purple-600/40 hover:bg-[#0c0c0c]"
                      : "bg-gray-50 border-gray-200 hover:border-purple-500 hover:bg-gray-100"
                  }`}
                >
                  {/* IMAGE */}

                  <div className="h-60 overflow-hidden relative bg-gradient-to-br from-purple-600 to-blue-600">
                    {post?.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={
                          post?.coverImageAlt ||
                          post?.title ||
                          "DevZore blog"
                        }
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40">
                        <span className="text-5xl">
                          📝
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex px-3 py-2 rounded-lg bg-black/60 text-white text-[9px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10">
                        {getCategoryName(post)}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-7 flex flex-col flex-grow">

                    <h2
                      className={`text-xl font-bold mb-4 leading-tight transition-colors group-hover:text-purple-500 ${
                        isDark
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {post?.title ||
                        "Untitled Post"}
                    </h2>

                    <p
                      className={`text-sm mb-8 line-clamp-3 leading-relaxed ${
                        isDark
                          ? "text-gray-500"
                          : "text-gray-600"
                      }`}
                    >
                      {post?.excerpt ||
                        "Read this article to learn more about modern software engineering and technology."}
                    </p>

                    <div
                      className={`mt-auto flex items-center justify-between pt-5 border-t ${
                        isDark
                          ? "border-white/5"
                          : "border-gray-200"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest ${
                          isDark
                            ? "text-gray-600"
                            : "text-gray-500"
                        }`}
                      >
                        {formatDate(
                          post?.createdAt
                        )}
                      </span>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleOpenBlog(post);
                        }}
                        className={`text-[10px] font-black uppercase tracking-widest transition-transform hover:translate-x-1 ${
                          isDark
                            ? "text-purple-500"
                            : "text-purple-600"
                        }`}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* NEWSLETTER */}

        {!error &&
          filteredPosts.length > 0 && (
            <section
              className={`mt-28 p-10 lg:p-20 rounded-[3rem] border relative overflow-hidden text-center ${
                isDark
                  ? "bg-gradient-to-tr from-purple-900/20 to-blue-900/20 border-white/10"
                  : "bg-gradient-to-tr from-purple-100 to-blue-100 border-purple-200"
              }`}
            >
              <div className="relative z-10">

                <h2 className="text-3xl lg:text-5xl font-black mb-5 italic uppercase tracking-tighter">
                  Stay{" "}
                  <span className="text-purple-500">
                    Engineered
                  </span>
                </h2>

                <p
                  className={`text-base mb-8 max-w-xl mx-auto ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Get monthly engineering insights
                  and architecture patterns directly
                  in your inbox.
                </p>

                <form
                  onSubmit={(event) =>
                    event.preventDefault()
                  }
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className={`flex-grow rounded-xl px-5 py-4 outline-none text-sm ${
                      isDark
                        ? "bg-black border border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500"
                        : "bg-white border border-gray-300 text-black focus:border-purple-500"
                    }`}
                  />

                  <button
                    type="submit"
                    className="bg-purple-600 text-white font-black px-8 py-4 rounded-xl hover:bg-purple-700 transition-all text-xs uppercase tracking-widest"
                  >
                    Join Circle
                  </button>
                </form>

              </div>
            </section>
          )}
      </div>
    </div>
  );
};

export default BlogPost;