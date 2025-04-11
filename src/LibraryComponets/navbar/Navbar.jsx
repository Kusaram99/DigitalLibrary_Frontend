import React from "react";
import { FaSearch, FaHeart, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
        <Link to="/"className="text-2xl font-bold">DG</ Link>
        <div className="flex items-center bg-gray-700 px-4 py-2 rounded-lg w-full max-w-xs">
          <FaSearch className="mr-2 text-gray-400" />
          <input type="text" placeholder="Search books..." className="bg-transparent outline-none w-full text-white placeholder-gray-400" />
        </div>
        <div className="flex gap-4 text-lg">
          <FaHeart className="cursor-pointer hover:text-red-500 transition" />
          <FaSignOutAlt className="cursor-pointer hover:text-gray-400 transition" />
        </div>
      </nav>
    );
  };

  export default Navbar