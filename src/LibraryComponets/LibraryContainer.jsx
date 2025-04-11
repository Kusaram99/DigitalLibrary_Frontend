import React from "react";
import Navbar from "./navbar/Navbar";
import Filters from "./filters/Filters";
import BooksGrid from "./booksgrid/BooksGrid";

const LibraryContainer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        <Filters />
        <BooksGrid />
      </div>
    </div>
  );
};

export default LibraryContainer;
