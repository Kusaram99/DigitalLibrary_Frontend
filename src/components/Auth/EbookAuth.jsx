import React, { useState } from "react"; 
import {
  FaGoogle,
  FaFacebookF
} from "react-icons/fa";
import Register from "./Register";
import LogIn from "./LogIn";
import RightSideContent from "./RightSideContent";

const EbookAuth = () => {

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex justify-center lg:justify-end bg-white">
      {/* Left Side - Auth Form */}
      <div className="flex flex-col justify-center items-center bg-white px-10 py-28">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to <span className="text-gray-400">DG Library</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Your personal library, anywhere you go
        </p>

        {/* Toggle Buttons */}
        <div className="flex w-full mb-4">
          <button
            className={`grow px-6 py-2 rounded-l ${
              !isRegister ? "bg-sky-400" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(false)}
          >
            Sign In
          </button>
          <button
            className={`grow px-6 py-2 rounded-r ${
              isRegister ? "bg-sky-400" : "bg-gray-200"
            }`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
        </div>

        {/* =========================== Form Fields ================================== */}
        {!isRegister ? <LogIn /> : <Register />}
        

        {/* ===================== External login functionality buttons ===================== */}
        <p className="text-gray-400">Or continue with</p>

        <div className="flex mt-4">
          <button className="flex items-center px-6 py-2 border rounded mr-4">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="flex items-center px-6 py-2 border rounded">
            <FaFacebookF className="mr-2" /> Facebook
          </button>
        </div>
      </div>

      {/* Right Side - Information Panel */}
      <RightSideContent />
      
    </div>
  );
};

export default EbookAuth;
