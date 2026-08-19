import api from "./api";

// ======================================================
// COMPRESS IMAGE
// ======================================================

const compressImage = async (
  file,
  quality = 0.8
) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        const canvas =
          document.createElement("canvas");

        let width = img.width;
        let height = img.height;

        // ==================================================
        // MAX DIMENSIONS
        // ==================================================

        const maxWidth = 1920;
        const maxHeight = 1080;

        if (width > height) {
          if (width > maxWidth) {
            height =
              height * (maxWidth / width);

            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width =
              width * (maxHeight / height);

            height = maxHeight;
          }
        }

        canvas.width = Math.round(width);
        canvas.height = Math.round(height);

        const ctx =
          canvas.getContext("2d");

        if (!ctx) {
          reject(
            new Error(
              "Could not create canvas context."
            )
          );

          return;
        }

        ctx.drawImage(
          img,
          0,
          0,
          canvas.width,
          canvas.height
        );

        // ==================================================
        // CREATE COMPRESSED IMAGE
        // ==================================================

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(
                new Error(
                  "Image compression failed."
                )
              );

              return;
            }

            resolve(blob);
          },

          // Always use JPEG for compressed uploads.
          "image/jpeg",

          quality
        );
      };

      img.onerror = () => {
        reject(
          new Error(
            "Failed to load image."
          )
        );
      };

      img.src = event.target.result;
    };

    reader.onerror = () => {
      reject(
        new Error(
          "Failed to read image file."
        )
      );
    };

    reader.readAsDataURL(file);
  });
};

// ======================================================
// UPLOAD IMAGE
// ======================================================

const uploadImage = async (file) => {
  try {
    // ==================================================
    // VALIDATE FILE
    // ==================================================

    if (!file) {
      throw new Error(
        "Please select an image."
      );
    }

    if (!file.type.startsWith("image/")) {
      throw new Error(
        "Only image files are allowed."
      );
    }

    // ==================================================
    // 5MB ORIGINAL FILE LIMIT
    // ==================================================

    const maxSize =
      5 * 1024 * 1024;

    if (file.size > maxSize) {
      throw new Error(
        "Image must be smaller than 5MB."
      );
    }

    console.log(
      "📷 Original image:",
      file.name,
      file.size,
      "bytes"
    );

    // ==================================================
    // COMPRESS
    // ==================================================

    const compressedBlob =
      await compressImage(file, 0.8);

    console.log(
      "📦 Compressed image:",
      compressedBlob.size,
      "bytes"
    );

    // ==================================================
    // FORM DATA
    // ==================================================

    const formData =
      new FormData();

    // IMPORTANT:
    // Backend should use upload.single("image")
    formData.append(
      "image",
      compressedBlob,
      `${file.name
        .replace(/\.[^/.]+$/, "")}.jpg`
    );

    // Debug
    console.log(
      "📤 FormData image:",
      formData.get("image")
    );

    // ==================================================
    // SEND REQUEST
    // ==================================================

    const response = await api.post(
      "/upload/image",
      formData
    );

    console.log(
      "✅ Upload response:",
      response.data
    );

    return response.data;
  } catch (error) {
    console.error(
      "❌ Image upload error:",
      error
    );

    if (error.response) {
      console.error(
        "❌ Server response:",
        error.response.data
      );
    }

    throw error;
  }
};

// ======================================================
// DELETE IMAGE
// ======================================================

const deleteImage = async (publicId) => {
  try {
    if (!publicId) {
      throw new Error(
        "Image public ID is required."
      );
    }

    const response =
      await api.delete(
        `/upload/image/${publicId}`
      );

    return response.data;
  } catch (error) {
    console.error(
      "❌ Image delete error:",
      error
    );

    throw error;
  }
};

// ======================================================
// EXPORT
// ======================================================

export default {
  compressImage,
  uploadImage,
  deleteImage,
};