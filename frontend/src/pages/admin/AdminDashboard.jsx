import { useEffect, useState } from "react";
import postService from "../../services/postService";
import categoryService from "../../services/categoryService";
import commentService from "../../services/commentService";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    posts: 0,
    categories: 0,
    comments: 0,
    published: 0,
  });

  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const extractArray = (data) => {
    if (Array.isArray(data)) return data;

    return (
      data?.posts ||
      data?.categories ||
      data?.comments ||
      data?.data ||
      []
    );
  };

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        console.log("📊 Loading dashboard data...");

        // Load each separately to avoid full failure if one fails
        let postsData = [];
        let categoriesData = [];
        let commentsData = [];

        try {
          const postsResult = await postService.getPosts();
          postsData = extractArray(postsResult);
          console.log("✅ Posts loaded:", postsData.length);
        } catch (err) {
          console.error("❌ Posts load error:", err);
          // Fallback to empty array
        }

        try {
          const catsResult = await categoryService.getCategories();
          categoriesData = extractArray(catsResult);
          console.log("✅ Categories loaded:", categoriesData.length);
        } catch (err) {
          console.error("❌ Categories load error:", err);
        }

        try {
          const commentsResult = await commentService.getComments();
          commentsData = extractArray(commentsResult);
          console.log("✅ Comments loaded:", commentsData.length);
        } catch (err) {
          console.error("❌ Comments load error:", err);
        }

        const published = postsData.filter(
          (post) =>
            post.status === "published" ||
            post.published === true
        );

        setStats({
          posts: postsData.length,
          categories: categoriesData.length,
          comments: commentsData.length,
          published: published.length,
        });

        setRecentPosts(postsData.slice(0, 5));
        console.log("✅ Dashboard stats updated");
      } catch (error) {
        console.error(
          "❌ Dashboard error:",
          error
        );
        // Keep the current state if something goes wrong
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const statCards = [
    {
      title: "Total Posts",
      value: stats.posts,
      icon: "✎",
    },
    {
      title: "Published",
      value: stats.published,
      icon: "✓",
    },
    {
      title: "Categories",
      value: stats.categories,
      icon: "▤",
    },
    {
      title: "Comments",
      value: stats.comments,
      icon: "◌",
    },
  ];

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Manage your DevZore website content.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {statCards.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-slate-200 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-2">
                  {loading ? "—" : card.value}
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl text-slate-700">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="px-5 sm:px-6 py-5 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg text-slate-900">
              Recent Posts
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Latest content added to your website.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Title
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Category
                </th>

                <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {!loading &&
                recentPosts.map((post) => (
                  <tr
                    key={post._id || post.id}
                    className="border-t border-slate-100"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">
                        {post.title || "Untitled"}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {post.category?.name ||
                        post.category ||
                        "Uncategorized"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          post.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {post.status || "draft"}
                      </span>
                    </td>
                  </tr>
                ))}

              {!loading &&
                recentPosts.length === 0 && (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-12 text-center text-slate-400"
                    >
                      No posts found.
                    </td>
                  </tr>
                )}

              {loading && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    Loading...
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

export default AdminDashboard;