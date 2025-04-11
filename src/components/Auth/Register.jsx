import React, { useState } from "react";
import axios from "axios";
import { registerUser } from "../../redux/slices/authThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  // Redux state
  const { loading, user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Navigate hook for redirection
  const navigate = useNavigate();

  // Redirect if user is successfully registered
  if (isAuthenticated) {
    navigate("/");
  }

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // buyer or seller
  });

  // Validation and loading states
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    return newErrors;
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // console.log("register data: ", formData)

    if (Object.keys(validationErrors).length === 0) {
      // calling the registerUser thunk action
      // dispatch(registerUser(formData));
      try {
        const user = await dispatch(registerUser(formData)).unwrap();
        // console.log("Registered successful:", user);
        // Handle successful login, e.g., navigate to home page
        navigate("/"); // Navigate to home or perform other actions
      } catch (err) {
        // console.log("Registering failed: " + err);
        alert(`Registering failed:  ${err}`);
        // Handle unauthorized error, e.g., display error message to user
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      {/* ===== Full Name ===== */}
      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        className="border w-80 p-2 rounded mb-1"
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mb-2">{errors.name}</p>
      )}

      {/* ===== Email ===== */}
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

      {/* ===== Password ===== */}
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

      {/* ===== Confirm Password ===== */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="border w-80 p-2 rounded mb-1"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mb-2">{errors.confirmPassword}</p>
      )}

      {/* ===== Role ===== */}
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="border w-80 p-2 rounded mb-2"
      >
        <option value="">Select your role</option>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      {errors.role && (
        <p className="text-red-500 text-sm mb-2">{errors.role}</p>
      )}

      {/* ===== Submit Button ===== */}
      <button
        type="submit"
        disabled={loading}
        className={`w-80 bg-black text-white py-2 rounded mb-4 ${
          loading ? "cursor-not-allowed bg-gray-700" : ""
        }`}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default Register;
