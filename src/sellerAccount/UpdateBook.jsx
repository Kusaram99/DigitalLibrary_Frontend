import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};
  const { cover_image, file_url } = book || {};

  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    price: book?.price || "",
    description: book?.description || "",
    category: book?.category || "",
    summary: book?.shortSummary || "",
    cover_image: null,
    file_url: null,
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(cover_image || null);
  const [fileName, setFileName] = useState(
    file_url ? file_url.split("/").pop() : ""
  );
  const [isLoading, setIsLoading] = useState(false);

  // Handle input and file changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (!file) return;

      if (name === "cover_image") {
        setImagePreview(URL.createObjectURL(file));
      }

      if (name === "file_url") {
        setFileName(file.name);
      }

      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Clear file or image
  const clearFile = (type) => {
    if (type === "cover_image") {
      setFormData((prev) => ({ ...prev, cover_image: null }));
      setImagePreview(null);
    } else if (type === "file_url") {
      setFormData((prev) => ({ ...prev, file_url: null }));
      setFileName("");
    }
  };

  // Keep old file or image
  const keepOldFile = (type) => {
    if (type === "cover_image") {
      setFormData((prev) => ({ ...prev, cover_image: null }));
      setImagePreview(cover_image);
    } else if (type === "file_url") {
      setFormData((prev) => ({ ...prev, file_url: null }));
      setFileName(file_url.split("/").pop());
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.author.trim()) newErrors.author = "Author is required.";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Valid price is required.";
    if (!formData.description.trim())
      newErrors.description = "Description is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("shortSummary", formData.summary);

    if (formData.cover_image) data.append("cover_image", formData.cover_image);
    if (formData.file_url) data.append("file_url", formData.file_url);

    try {
      await axios.put(
        `${import.meta.env.VITE_UPDATE_BOOK_BY_ID_URL}${book._id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Book updated successfully!");
      navigate("/seller/all-books");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update book. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Update Book</h2>

      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 shadow-lg rounded-lg"
        >
          {/* Text Fields */}
          {[
            { label: "Book Title", name: "title", type: "text" },
            { label: "Author Name", name: "author", type: "text" },
            { label: "Book Price", name: "price", type: "number" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block font-semibold">{label}:</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg ${
                  errors[name] ? "border-red-500" : ""
                }`}
                placeholder={`Enter ${label.toLowerCase()}`}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Description */}
          <div>
            <label className="block font-semibold">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder="Enter description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold">Category Name:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${
                errors.category ? "border-red-500" : ""
              }`}
            >
              <option value="">Select</option>
              <option>Fiction</option>
              <option>Non-fiction</option>
              <option>Science</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="block font-semibold">Short Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${
                errors.summary ? "border-red-500" : ""
              }`}
              placeholder="Enter short summary"
            />
            {errors.summary && (
              <p className="text-red-500 text-sm">{errors.summary}</p>
            )}
          </div>

          {/* Cover Image */}
          <div>
            <label className="block font-semibold">Book Image:</label>
            <input
              type="file"
              name="cover_image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {imagePreview && (
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => clearFile("cover_image")}
                  className="text-sm text-red-500 hover:underline"
                >
                  Clear Image
                </button>
                {imagePreview !== cover_image && (
                  <button
                    type="button"
                    onClick={() => keepOldFile("cover_image")}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Keep Old Image
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Book File */}
          <div>
            <label className="block font-semibold">
              Book File (.pdf/.epub):
            </label>
            <input
              type="file"
              name="file_url"
              accept=".pdf,.epub"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            {fileName && (
              <div className="mt-2 flex items-center gap-2">
                <p className="text-sm text-gray-700">{fileName}</p>
                <button
                  type="button"
                  onClick={() => clearFile("file_url")}
                  className="text-sm text-red-500 hover:underline"
                >
                  Clear File
                </button>
                {fileName !== file_url.split("/").pop() && (
                  <button
                    type="button"
                    onClick={() => keepOldFile("file_url")}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Keep Old File
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-5 mt-9">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Book"}
            </button>
            <span
              onClick={() => navigate("/seller/all-books")}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-900 transition cursor-pointer"
            >
              {" "}
              Cancel
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;
