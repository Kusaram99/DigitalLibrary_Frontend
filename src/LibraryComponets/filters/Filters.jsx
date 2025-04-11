import React from "react";


const Filters = () => {
    return (
      <aside className="p-8 bg-gray-100 w-full sm:w-1/4 shadow-md">
        <h3 className="font-bold text-lg mb-4">Filters</h3>
        <label className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" /> <span>Newest</span>
        </label>
        <div className="mb-4">
          <p className="font-bold">Progress:</p>
          <label className="flex items-center mt-2"><input type="radio" name="progress" className="mr-2" /> Low</label>
          <label className="flex items-center mt-2"><input type="radio" name="progress" className="mr-2" /> High</label>
        </div>
      </aside>
    );
  };

export default Filters;