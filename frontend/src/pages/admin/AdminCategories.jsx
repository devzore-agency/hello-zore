import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import categoryService from "../../services/categoryService";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [editingId, setEditingId] = useState(null);

  // =====================================================
  // LOAD CATEGORIES
  // =====================================================

  const loadCategories = async () => {
    try {
      setLoading(true);

      const response = await categoryService.getCategories();

      /*
        Backend response:

        {
          success: true,
          data: [...]
        }
      */

      let list = [];

      if (Array.isArray(response?.data)) {
        list = response.data;
      } else if (Array.isArray(response)) {
        list = response;
      } else if (Array.isArray(response?.categories)) {
        list = response.categories;
      }

      setCategories(list);
    } catch (error) {
      console.error("Load categories error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load categories."
      );

      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    loadCategories();
  }, []);

  // =====================================================
  // CREATE / UPDATE CATEGORY
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    // Name validation
    if (!trimmedName) {
      toast.error("Category name is required.");
      return;
    }

    if (trimmedName.length > 50) {
      toast.error(
        "Category name cannot be more than 50 characters."
      );
      return;
    }

    if (trimmedDescription.length > 200) {
      toast.error(
        "Description cannot be more than 200 characters."
      );
      return;
    }

    try {
      setSubmitting(true);

      // =================================================
      // UPDATE
      // =================================================

      if (editingId) {
        await categoryService.updateCategory(editingId, {
          name: trimmedName,
          description: trimmedDescription,
        });

        toast.success(
          "Category updated successfully."
        );
      }

      // =================================================
      // CREATE
      // =================================================

      else {
        await categoryService.createCategory({
          name: trimmedName,
          description: trimmedDescription,
        });

        toast.success(
          "Category created successfully."
        );
      }

      // Reset form
      setName("");
      setDescription("");
      setEditingId(null);

      // Reload categories from database
      await loadCategories();
    } catch (error) {
      console.error(
        "Category submit error:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
          "Failed to save category."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // =====================================================
  // EDIT CATEGORY
  // =====================================================

  const handleEdit = (category) => {
    const id = category?._id || category?.id;

    if (!id) {
      toast.error("Invalid category ID.");
      return;
    }

    setEditingId(id);
    setName(category?.name || "");
    setDescription(category?.description || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // CANCEL EDIT
  // =====================================================

  const handleCancelEdit = () => {
    setEditingId(null);
    setName("");
    setDescription("");
  };

  // =====================================================
  // DELETE CATEGORY
  // =====================================================

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("Invalid category ID.");
      return;
    }

    const category = categories.find(
      (item) =>
        (item?._id || item?.id) === id
    );

    if (!category) {
      toast.error("Category not found.");
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${category.name}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await categoryService.deleteCategory(id);

      toast.success(
        "Category deleted successfully."
      );

      // If deleted category was being edited
      if (editingId === id) {
        handleCancelEdit();
      }

      // Reload database data
      await loadCategories();
    } catch (error) {
      console.error(
        "Delete category error:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
          "Failed to delete category."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="w-full">
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Categories
        </h1>

        <p className="text-slate-500 mt-1">
          Organize your blog posts.
        </p>
      </div>

      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
        {/* =================================================
            ADD / EDIT CATEGORY
        ================================================= */}

        <div className="bg-white border border-slate-200 rounded-2xl p-5 h-fit">
          {/* Form Header */}

          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-lg text-slate-900">
              {editingId
                ? "Edit Category"
                : "Add Category"}
            </h2>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={submitting}
                className="text-sm text-slate-500 hover:text-slate-900 transition disabled:opacity-50"
              >
                Cancel
              </button>
            )}
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* NAME */}

            <div>
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name
              </label>

              <input
                id="category-name"
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="React"
                maxLength={50}
                disabled={submitting}
                autoComplete="off"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 disabled:bg-slate-50 disabled:cursor-not-allowed"
              />

              <div className="text-right text-xs text-slate-400 mt-1">
                {name.length}/50
              </div>
            </div>

            {/* DESCRIPTION */}

            <div>
              <label
                htmlFor="category-description"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Description
              </label>

              <textarea
                id="category-description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows={4}
                maxLength={200}
                placeholder="Category description..."
                disabled={submitting}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 disabled:bg-slate-50 disabled:cursor-not-allowed"
              />

              <div className="text-right text-xs text-slate-400 mt-1">
                {description.length}/200
              </div>
            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting
                ? editingId
                  ? "Updating..."
                  : "Adding..."
                : editingId
                ? "Update Category"
                : "Add Category"}
            </button>

            {/* CANCEL BUTTON */}

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={submitting}
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* =================================================
            CATEGORY LIST
        ================================================= */}

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          {/* LIST HEADER */}

          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-lg text-slate-900">
                All Categories
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                {categories.length}{" "}
                {categories.length === 1
                  ? "category"
                  : "categories"}
              </p>
            </div>

            <button
              type="button"
              onClick={loadCategories}
              disabled={loading}
              className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Refresh"}
            </button>
          </div>

          {/* =================================================
              LOADING
          ================================================= */}

          {loading ? (
            <div className="py-16 text-center">
              <div className="inline-block w-6 h-6 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin mb-3" />

              <p className="text-slate-400">
                Loading categories...
              </p>
            </div>
          ) : categories.length === 0 ? (
            /* =================================================
               EMPTY
            ================================================= */

            <div className="py-16 text-center px-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-xl">
                ≡
              </div>

              <h3 className="font-semibold text-slate-700">
                No categories found
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                Create your first category using
                the form.
              </p>
            </div>
          ) : (
            /* =================================================
               CATEGORY ITEMS
            ================================================= */

            <div className="divide-y divide-slate-100">
              {categories.map((category) => {
                const id =
                  category?._id ||
                  category?.id;

                return (
                  <div
                    key={id}
                    className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-slate-50/70 transition"
                  >
                    {/* CATEGORY INFO */}

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold text-slate-900">
                          {category?.name ||
                            "Unnamed Category"}
                        </h3>

                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                          {category?.postCount ||
                            0}{" "}
                          posts
                        </span>
                      </div>

                      <p className="text-sm text-slate-500 mt-1 break-words">
                        {category?.description ||
                          "No description"}
                      </p>

                      {category?.slug && (
                        <p className="text-xs text-slate-400 mt-2">
                          /{category.slug}
                        </p>
                      )}
                    </div>

                    {/* ACTIONS */}

                    <div className="flex items-center gap-2 shrink-0">
                      {/* EDIT */}

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(category)
                        }
                        disabled={
                          deletingId === id ||
                          submitting
                        }
                        className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Edit
                      </button>

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(id)
                        }
                        disabled={
                          deletingId === id ||
                          submitting
                        }
                        className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {deletingId === id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;