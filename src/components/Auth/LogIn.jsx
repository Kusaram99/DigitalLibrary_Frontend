import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/authThunk";

const LogIn = () => {
  // redux state
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // navigater
  const navigate = useNavigate();

  // console.log("State: ", user);

  const dispatch = useDispatch();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // Loading & error states
  // const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input and checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate input
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // If validation fails, don't proceed
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const user = await dispatch(loginUser(formData)).unwrap();
      console.log("Login successful:", user);
      // Handle successful login, e.g., navigate to home page
      navigate("/"); // Navigate to home or perform other actions
    } catch (err) {
      // console.log(`Login failed:  ${err}`);
      alert(`Login failed:  ${err}`);
      // Handle unauthorized error, e.g., display error message to user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      {/* ================= Email ================= */}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="border w-80 p-2 rounded mb-1"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
      )}

      {/* ================= Password ================= */}
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        className="border w-80 p-2 rounded mb-1"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>
      )}

      {/* ============ Remember Me & Forgot Password ============ */}
      <div className="flex justify-between w-80 mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="mr-2"
          />
          Remember me
        </label>
        <a href="#" className="text-blue-500 text-sm">
          Forgot password?
        </a>
      </div>

      {/* ================= Submit Button ================= */}
      <button
        type="submit"
        className={`w-80 bg-black text-white py-2 rounded mb-4 ${
          loading ? "cursor-not-allowed bg-gray-700" : ""
        }`}
        // disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};

export default LogIn;
