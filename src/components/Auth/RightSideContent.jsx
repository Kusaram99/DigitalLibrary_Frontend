import React from "react";
import { FaBookOpen, FaMobileAlt, FaBookmark } from "react-icons/fa";

const RightSideContent = () => {
  return (
    <div className="w-1/2 hidden lg:flex flex-col justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white p-10">
      <h2 className="text-2xl font-bold mb-4">Your Portable Digital Library</h2>
      <p className="mb-6">
        Access thousands of books from your devices. Read, discover, and
        purchase from our extensive collection of titles.
      </p>

      <div className="flex items-center mb-4">
        <FaBookOpen className="text-xl mr-3" />
        <div>
          <h3 className="font-bold">Extensive Library</h3>
          <p>Access thousands of books across various genres.</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FaMobileAlt className="text-xl mr-3" />
        <div>
          <h3 className="font-bold">Read Anywhere</h3>
          <p>Enjoy your books on any device, anytime, anywhere.</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaBookmark className="text-xl mr-3" />
        <div>
          <h3 className="font-bold">Personalized Experience</h3>
          <p>
            Track your progress, bookmark pages, and customize your reading
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideContent;
