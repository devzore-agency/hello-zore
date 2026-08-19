import api from "./api";

// ======================================================
// GET ALL CATEGORIES
// GET /api/categories
// Public API
// ======================================================

const getCategories = async () => {
  try {
    const response = await api.get("/categories");

    return response.data;
  } catch (error) {
    console.error(
      "Get categories error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ======================================================
// CREATE CATEGORY
// POST /api/categories
// Admin only
// ======================================================

const createCategory = async (categoryData) => {
  try {
    const response = await api.post(
      "/categories",
      categoryData
    );

    return response.data;
  } catch (error) {
    console.error(
      "Create category error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ======================================================
// UPDATE CATEGORY
// PUT /api/categories/:id
// Admin only
// ======================================================

const updateCategory = async (id, categoryData) => {
  try {
    if (!id) {
      throw new Error("Category ID is required.");
    }

    const response = await api.put(
      `/categories/${id}`,
      categoryData
    );

    return response.data;
  } catch (error) {
    console.error(
      "Update category error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ======================================================
// DELETE CATEGORY
// DELETE /api/categories/:id
// Admin only
// ======================================================

const deleteCategory = async (id) => {
  try {
    if (!id) {
      throw new Error("Category ID is required.");
    }

    const response = await api.delete(
      `/categories/${id}`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Delete category error:",
      error.response?.data || error.message
    );

    throw error;
  }
};

// ======================================================
// EXPORT
// ======================================================

const categoryService = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;