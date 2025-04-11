import React from "react";
import Books from "./Books";
// import BookStoreHeader from "./BookStoreHeader";

const BookStore = () => {
  return (
    <div className="my-[54px] md:w-10/12 xs:w-[80%] w-[85%] mx-auto dark:text-gray-300">
      {/* --------------------- Filter --------------------- */}
      <div className="mb-16 flex flex-col lg:flex-row items-start gap-2 justify-between p-4 border-b">
        <div>
          <h2 className="text-2xl font-bold">Book Store</h2>
          <p className="dark:text-gray-400 text-sm">
            Discover and purchase books for your library
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md dark:text-gray-400 hover:bg-gray-100">
            <span className="text-lg">🔍</span> Show Filters
          </button>

          <select className="border rounded-md px-4 py-2 dark:text-gray-400 cursor-pointer">
            <option>Sort by: Popularity</option>
            <option>Sort by: Newest</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
          </select>
        </div>
      </div>
      {/* -------------------- Books ---------------- */}
      <Books />
    </div>
  );
};

export default BookStore;
