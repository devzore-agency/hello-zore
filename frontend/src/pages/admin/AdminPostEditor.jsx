import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import postService from "../../services/postService";
import categoryService from "../../services/categoryService";
import uploadService from "../../services/uploadService";

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  // =====================================================
  // STATE
  // =====================================================

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(isEditMode);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    coverImageAlt: "",
    category: "",
    status: "draft",
    featured: false,
    tags: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
  });

  // Track whether slug was manually edited
  const [slugManuallyEdited, setSlugManuallyEdited] =
    useState(false);

  // =====================================================
  // TIPTAP EDITOR
  // =====================================================

  const editor = useEditor({
    extensions: [
      StarterKit,

      Image.configure({
        inline: false,
        allowBase64: false,
      }),

      TiptapLink.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),

      Placeholder.configure({
        placeholder: "Write your blog content here...",
      }),
    ],

    content: "",

    editorProps: {
      attributes: {
        class:
          "prose prose-slate max-w-none min-h-[350px] focus:outline-none p-5",
      },
    },
  });

  // =====================================================
  // SLUG GENERATOR
  // =====================================================

  const generateSlug = (value = "") => {
    return value
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // =====================================================
  // IMAGE UPLOAD HANDLER
  // =====================================================

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    try {
      setUploadingImage(true);

      // 📤 Upload and compress image
      const response = await uploadService.uploadImage(file);

      if (response.success && response.url) {
        // ✅ Set image URL
        setFormData((prev) => ({
          ...prev,
          coverImage: response.url,
        }));

        toast.success("Image uploaded successfully!");
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to upload image"
      );
    } finally {
      setUploadingImage(false);
      
      // Reset input
      event.target.value = "";
    }
  };

  // =====================================================
  // LOAD CATEGORIES
  // =====================================================

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response =
          await categoryService.getCategories();

        const list = Array.isArray(response)
          ? response
          : response?.data ||
            response?.categories ||
            [];

        setCategories(list);
      } catch (error) {
        console.error(
          "Load categories error:",
          error
        );

        toast.error(
          error?.response?.data?.message ||
            "Failed to load categories."
        );
      }
    };

    loadCategories();
  }, []);

  // =====================================================
  // LOAD POST FOR EDIT
  // =====================================================

  useEffect(() => {
    if (!isEditMode || !id) {
      setPageLoading(false);
      return;
    }

    let cancelled = false;

    const loadPost = async () => {
      try {
        setPageLoading(true);

        console.log("📖 Loading post:", id);

        const response = await postService.getAdminPostById(id);

        const post =
          response?.data ||
          response?.post ||
          response;

        if (!post || !post._id) {
          throw new Error("Post not found.");
        }

        if (cancelled) {
          return;
        }

        console.log("✅ Post loaded:", post.title);

        setFormData({
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          coverImage: post.coverImage || "",
          coverImageAlt: post.coverImageAlt || "",

          category:
            post.category?._id ||
            post.category ||
            "",

          status: post.status || "draft",

          featured: Boolean(post.featured),

          tags: Array.isArray(post.tags)
            ? post.tags.join(", ")
            : post.tags || "",

          seoTitle: post.seoTitle || "",
          seoDescription: post.seoDescription || "",
          seoKeywords: post.seoKeywords || "",
        });

        // Existing slug should be considered manually controlled
        // in edit mode.
        setSlugManuallyEdited(Boolean(post.slug));
      } catch (error) {
        if (cancelled) {
          return;
        }

        console.error("❌ Load post error:", error);

        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to load post.";

        toast.error(message);

        navigate("/admin/posts");
      } finally {
        if (!cancelled) {
          setPageLoading(false);
        }
      }
    };

    loadPost();

    return () => {
      cancelled = true;
    };
  }, [id, isEditMode, navigate]);

  // =====================================================
  // SET LOADED CONTENT INTO TIPTAP
  // =====================================================

  useEffect(() => {
    if (!editor || !isEditMode || !formData.content) {
      return;
    }

    try {
      editor.commands.setContent(formData.content, false);
      console.log("✅ Editor content set");
    } catch (error) {
      console.error("⚠️ Editor content error:", error);
      toast.error("Error loading editor content");
    }
  }, [editor, formData.content, isEditMode]);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((previous) => ({
      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // =====================================================
  // TITLE CHANGE
  // =====================================================

  const handleTitleChange = (event) => {
    const title = event.target.value;

    setFormData((previous) => ({
      ...previous,

      title,

      // Automatically update slug
      // until user manually edits slug.
      slug: slugManuallyEdited
        ? previous.slug
        : generateSlug(title),
    }));
  };

  // =====================================================
  // SLUG CHANGE
  // =====================================================

  const handleSlugChange = (event) => {
    const value = event.target.value;

    setSlugManuallyEdited(true);

    setFormData((previous) => ({
      ...previous,
      slug: generateSlug(value),
    }));
  };

  // =====================================================
  // ADD LINK
  // =====================================================

  const addLink = () => {
    if (!editor) return;

    const previousUrl =
      editor.getAttributes("link")?.href || "";

    const url = window.prompt(
      "Enter URL",
      previousUrl || "https://"
    );

    if (url === null) return;

    const cleanUrl = url.trim();

    if (!cleanUrl) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .unsetLink()
        .run();

      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: cleanUrl,
      })
      .run();
  };

  // =====================================================
  // ADD IMAGE
  // =====================================================

  const addImage = () => {
    if (!editor) return;

    const url = window.prompt(
      "Enter image URL"
    );

    if (!url) return;

    const cleanUrl = url.trim();

    if (!cleanUrl) return;

    editor
      .chain()
      .focus()
      .setImage({
        src: cleanUrl,
      })
      .run();
  };

  // =====================================================
  // ERROR MESSAGE
  // =====================================================

  const getErrorMessage = (error) => {
    const responseData =
      error?.response?.data;

    // Backend message
    if (responseData?.message) {
      return responseData.message;
    }

    // Express validator errors
    if (
      Array.isArray(responseData?.errors) &&
      responseData.errors.length > 0
    ) {
      return responseData.errors
        .map(
          (item) =>
            item?.msg ||
            item?.message ||
            "Validation error"
        )
        .join(", ");
    }

    // Axios error
    if (error?.message) {
      return error.message;
    }

    return "Failed to save post.";
  };

  // =====================================================
  // VALIDATE FORM
  // =====================================================

  const validateForm = () => {
    // Title
    if (!formData.title.trim()) {
      toast.error(
        "Post title is required."
      );

      return false;
    }

    // Excerpt
    if (!formData.excerpt.trim()) {
      toast.error(
        "Post excerpt is required."
      );

      return false;
    }

    // Category
    if (!formData.category) {
      toast.error(
        "Please select a category."
      );

      return false;
    }

    // Editor
    if (!editor) {
      toast.error(
        "Editor is not ready."
      );

      return false;
    }

    const html =
      editor.getHTML().trim();

    const text =
      editor.getText().trim();

    // Content
    if (
      !text &&
      !html.includes("<img")
    ) {
      toast.error(
        "Post content is required."
      );

      return false;
    }

    // SEO title
    if (formData.seoTitle.length > 70) {
      toast.error(
        "SEO title cannot exceed 70 characters."
      );

      return false;
    }

    // SEO description
    if (
      formData.seoDescription.length > 160
    ) {
      toast.error(
        "SEO description cannot exceed 160 characters."
      );

      return false;
    }

    return true;
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = async (
    selectedStatus
  ) => {
    if (loading) return;

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // -----------------------------------------------
      // Content
      // -----------------------------------------------

      const content =
        editor.getHTML();

      // -----------------------------------------------
      // Tags
      // -----------------------------------------------

      const tags = formData.tags
        .split(",")
        .map((tag) =>
          tag.trim().toLowerCase()
        )
        .filter(Boolean);

      // -----------------------------------------------
      // Slug
      // -----------------------------------------------

      const finalSlug =
        formData.slug.trim()
          ? generateSlug(formData.slug)
          : generateSlug(formData.title);

      // -----------------------------------------------
      // Post Data
      // -----------------------------------------------

      const postData = {
        title: formData.title.trim(),

        slug: finalSlug,

        excerpt:
          formData.excerpt.trim(),

        content,

        coverImage:
          formData.coverImage.trim(),

        coverImageAlt:
          formData.coverImageAlt.trim(),

        category:
          formData.category,

        status:
          selectedStatus,

        featured:
          Boolean(formData.featured),

        tags,

        seoTitle:
          formData.seoTitle.trim(),

        seoDescription:
          formData.seoDescription.trim(),

        seoKeywords:
          formData.seoKeywords.trim(),
      };

      console.log(
        "Submitting post:",
        postData
      );

      // =================================================
      // UPDATE
      // =================================================

      if (isEditMode) {
        await postService.updatePost(
          id,
          postData
        );

        if (
          selectedStatus ===
          "published"
        ) {
          toast.success(
            "Post updated and published successfully!"
          );
        } else if (
          selectedStatus ===
          "scheduled"
        ) {
          toast.success(
            "Post updated and scheduled successfully!"
          );
        } else {
          toast.success(
            "Post updated successfully!"
          );
        }
      }

      // =================================================
      // CREATE
      // =================================================

      else {
        await postService.createPost(
          postData
        );

        if (
          selectedStatus ===
          "published"
        ) {
          toast.success(
            "Post published successfully!"
          );
        } else if (
          selectedStatus ===
          "scheduled"
        ) {
          toast.success(
            "Post scheduled successfully!"
          );
        } else {
          toast.success(
            "Post saved as draft successfully!"
          );
        }
      }

      // =================================================
      // REDIRECT
      // =================================================

      navigate("/admin/posts");
    } catch (error) {
      console.error(
        "Save post error:",
        error
      );

      toast.error(
        getErrorMessage(error)
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // PAGE LOADING
  // =====================================================

  if (pageLoading) {
    return (
      <div className="py-20 text-center text-slate-500">
        Loading post...
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div>
      {/* =================================================
          HEADER
          ================================================= */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isEditMode
              ? "Edit Post"
              : "Create Post"}
          </h1>

          <p className="text-slate-500 mt-1">
            Write and manage your blog
            content.
          </p>
        </div>

        <Link
          to="/admin/posts"
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50 transition"
        >
          ← Back to Posts
        </Link>
      </div>

      {/* =================================================
          MAIN GRID
          ================================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        {/* =================================================
            MAIN CONTENT
            ================================================= */}

        <div className="space-y-6">
          {/* =================================================
              POST INFORMATION
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Post Information
            </h2>

            <div className="space-y-5">
              {/* TITLE */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={
                    handleTitleChange
                  }
                  placeholder="Enter post title"
                  maxLength={200}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              {/* SLUG */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Slug
                </label>

                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={
                    handleSlugChange
                  }
                  placeholder="your-post-slug"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />

                <p className="text-xs text-slate-400 mt-1">
                  Example:
                  your-blog-post-title
                </p>
              </div>

              {/* EXCERPT */}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Excerpt
                  </label>

                  <span className="text-xs text-slate-400">
                    {formData.excerpt.length}/300
                  </span>
                </div>

                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={4}
                  maxLength={300}
                  placeholder="Short description of your post..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              EDITOR
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="px-5 sm:px-6 py-4 border-b border-slate-200">
              <h2 className="font-bold text-lg text-slate-900">
                Content
              </h2>
            </div>

            {/* TOOLBAR */}

            {editor && (
              <div className="flex flex-wrap items-center gap-1 p-3 border-b border-slate-200 bg-slate-50">
                {/* BOLD */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBold()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg font-bold text-sm ${
                    editor.isActive("bold")
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  B
                </button>

                {/* ITALIC */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleItalic()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg italic text-sm ${
                    editor.isActive("italic")
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  I
                </button>

                {/* STRIKE */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleStrike()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg text-sm ${
                    editor.isActive("strike")
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  S
                </button>

                <div className="w-px h-6 bg-slate-300 mx-1" />

                {/* H2 */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 2,
                      })
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg text-sm font-bold ${
                    editor.isActive(
                      "heading",
                      { level: 2 }
                    )
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  H2
                </button>

                {/* H3 */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: 3,
                      })
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg text-sm font-bold ${
                    editor.isActive(
                      "heading",
                      { level: 3 }
                    )
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  H3
                </button>

                <div className="w-px h-6 bg-slate-300 mx-1" />

                {/* BULLET LIST */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleBulletList()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg text-sm ${
                    editor.isActive(
                      "bulletList"
                    )
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  • List
                </button>

                {/* ORDERED LIST */}

                <button
                  type="button"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleOrderedList()
                      .run()
                  }
                  className={`px-3 py-2 rounded-lg text-sm ${
                    editor.isActive(
                      "orderedList"
                    )
                      ? "bg-slate-900 text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  1. List
                </button>

                <div className="w-px h-6 bg-slate-300 mx-1" />

                {/* LINK */}

                <button
                  type="button"
                  onClick={addLink}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  🔗 Link
                </button>

                {/* IMAGE */}

                <button
                  type="button"
                  onClick={addImage}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-200"
                >
                  🖼 Image
                </button>
              </div>
            )}

            {/* EDITOR */}

            <EditorContent
              editor={editor}
            />
          </div>
        </div>

        {/* =================================================
            SIDEBAR
            ================================================= */}

        <div className="space-y-6">
          {/* =================================================
              PUBLISH
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Publish
            </h2>

            <div className="space-y-4">
              {/* STATUS */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:border-slate-900"
                >
                  <option value="draft">
                    Draft
                  </option>

                  <option value="published">
                    Published
                  </option>

                  <option value="scheduled">
                    Scheduled
                  </option>
                </select>
              </div>

              {/* FEATURED */}

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={
                    formData.featured
                  }
                  onChange={handleChange}
                  className="w-4 h-4"
                />

                <span className="text-sm text-slate-700">
                  Featured post
                </span>
              </label>

              {/* SAVE */}

              <button
                type="button"
                disabled={
                  loading ||
                  !formData.category
                }
                onClick={() =>
                  handleSubmit(
                    formData.status
                  )
                }
                className="w-full py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {loading
                  ? "Saving..."
                  : isEditMode
                  ? formData.status ===
                    "published"
                    ? "Update & Publish"
                    : formData.status ===
                      "scheduled"
                    ? "Update Schedule"
                    : "Update Post"
                  : formData.status ===
                    "published"
                  ? "Publish Post"
                  : formData.status ===
                    "scheduled"
                  ? "Schedule Post"
                  : "Save Draft"}
              </button>

              {!formData.category && (
                <p className="text-xs text-red-500">
                  Select a category before
                  saving the post.
                </p>
              )}
            </div>
          </div>

          {/* =================================================
              CATEGORY
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Category
            </h2>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:border-slate-900"
            >
              <option value="">
                Select category
              </option>

              {categories.map(
                (category) => {
                  const categoryId =
                    category._id ||
                    category.id;

                  return (
                    <option
                      key={categoryId}
                      value={categoryId}
                    >
                      {category.name}
                    </option>
                  );
                }
              )}
            </select>

            {categories.length === 0 && (
              <p className="text-xs text-red-500 mt-2">
                No categories found.
                Create a category first.
              </p>
            )}
          </div>

          {/* =================================================
              COVER IMAGE
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              Cover Image
            </h2>

            {/* IMAGE UPLOAD */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload Image
              </label>
              
              <div className="flex gap-3">
                <input
                  type="file"
                  id="coverImageUpload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                  className="hidden"
                />
                
                <label
                  htmlFor="coverImageUpload"
                  className="flex-1 px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer text-center font-medium text-slate-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingImage
                    ? "Uploading..."
                    : "📸 Choose Image"}
                </label>
              </div>
              
              <p className="text-xs text-slate-400 mt-2">
                Max 5MB • Auto-compressed
              </p>
            </div>

            {/* IMAGE URL FALLBACK */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Or paste image URL
              </label>
              
              <input
                type="text"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
              />
            </div>

            {formData.coverImage && (
              <img
                src={formData.coverImage}
                alt={
                  formData.coverImageAlt ||
                  "Cover preview"
                }
                className="w-full h-40 object-cover rounded-xl mt-4"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            )}
          </div>

          {/* =================================================
              IMAGE SEO
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-4">
              Image SEO
            </h2>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Cover Image Alt
            </label>

            <input
              type="text"
              name="coverImageAlt"
              value={
                formData.coverImageAlt
              }
              onChange={handleChange}
              placeholder="Describe the image"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
            />
          </div>

          {/* =================================================
              TAGS
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-4">
              Tags
            </h2>

            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="react, javascript, web development"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
            />

            <p className="text-xs text-slate-400 mt-2">
              Separate tags with commas.
            </p>
          </div>

          {/* =================================================
              SEO
              ================================================= */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="font-bold text-lg text-slate-900 mb-5">
              SEO Settings
            </h2>

            <div className="space-y-4">
              {/* SEO TITLE */}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">
                    SEO Title
                  </label>

                  <span className="text-xs text-slate-400">
                    {formData.seoTitle.length}/70
                  </span>
                </div>

                <input
                  type="text"
                  name="seoTitle"
                  value={
                    formData.seoTitle
                  }
                  onChange={handleChange}
                  maxLength={70}
                  placeholder="SEO title"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
                />
              </div>

              {/* SEO DESCRIPTION */}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">
                    SEO Description
                  </label>

                  <span className="text-xs text-slate-400">
                    {
                      formData
                        .seoDescription
                        .length
                    }
                    /160
                  </span>
                </div>

                <textarea
                  name="seoDescription"
                  value={
                    formData.seoDescription
                  }
                  onChange={handleChange}
                  maxLength={160}
                  rows={4}
                  placeholder="SEO description"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:border-slate-900"
                />
              </div>

              {/* SEO KEYWORDS */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  SEO Keywords
                </label>

                <input
                  type="text"
                  name="seoKeywords"
                  value={
                    formData.seoKeywords
                  }
                  onChange={handleChange}
                  placeholder="react, web development, javascript"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-slate-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostEditor;