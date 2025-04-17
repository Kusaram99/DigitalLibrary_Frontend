import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UploadBook = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    category: "",
    summary: "",
    bookImage: null,
    bookFile: null,
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];

      if (!file) {
        if (name === "bookImage") {
          setImagePreview(null);
        }

        setFormData((prev) => ({
          ...prev,
          [name]: null,
        }));

        return;
      }

      if (name === "bookImage") {
        setImagePreview(URL.createObjectURL(file));
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.author.trim()) newErrors.author = "Author is required.";
    if (!formData.price || isNaN(formData.price)) newErrors.price = "Valid price is required.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required.";
    if (!formData.bookImage) newErrors.bookImage = "Book image is required.";
    if (!formData.bookFile) newErrors.bookFile = "Book file is required.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is authenticated
    if (!isAuthenticated) {
      // navigate("/seller");
      return <h1 className="text-center mt-6" >Loading..</h1> ;
    }

    // Validate form data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset errors and set loading state
    setErrors({});
    setIsLoading(true);

    // Prepare form data for submission
    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("shortSummary", formData.summary);
    data.append("cover_image", formData.bookImage);
    data.append("file_url", formData.bookFile);
    data.append("seller_id", user._id);

    try {
      // Make the API call to upload the book
      const response = await axios.post(
        import.meta.env.VITE_UPLOAD_BOOK_URL,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Book uploaded successfully!");
      // console.log(response.data);

      // Reset form
      setFormData({
        title: "",
        author: "",
        price: "",
        description: "",
        category: "",
        summary: "",
        bookImage: null,
        bookFile: null,
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload book. Please try again.");
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Book</h2>
      <form
        className="space-y-4 bg-white p-6 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <div>
          <label className="block font-semibold">Book Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.title ? "border-red-500" : ""}`}
            placeholder="Enter book title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Author */}
        <div>
          <label className="block font-semibold">Author Name:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.author ? "border-red-500" : ""}`}
            placeholder="Enter author name"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold">Book Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.price ? "border-red-500" : ""}`}
            placeholder="Enter book price"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.description ? "border-red-500" : ""}`}
            placeholder="Enter description"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold">Category Name:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.category ? "border-red-500" : ""}`}
          >
            <option value="">Select</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Science</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Summary */}
        <div>
          <label className="block font-semibold">Short Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.summary ? "border-red-500" : ""}`}
            placeholder="Enter short summary or outcomes"
          />
          {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
        </div>

        {/* Book Image */}
        <div>
          <label className="block font-semibold">Book Image:</label>
          <input
            type="file"
            name="bookImage"
            accept="image/*"
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.bookImage ? "border-red-500" : ""}`}
          />
          {errors.bookImage && <p className="text-red-500 text-sm">{errors.bookImage}</p>}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 w-32 h-auto object-cover rounded border"
            />
          )}
        </div>

        {/* Book File */}
        <div>
          <label className="block font-semibold">Book File:</label>
          <input
            type="file"
            name="bookFile"
            accept=".pdf,.epub"
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg ${errors.bookFile ? "border-red-500" : ""}`}
          />
          {errors.bookFile && <p className="text-red-500 text-sm">{errors.bookFile}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-60"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default UploadBook;
