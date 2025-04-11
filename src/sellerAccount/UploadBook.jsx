import React from "react";



const UploadBook = () => {
    return (
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Upload Book</h2>
        <form className="space-y-4 bg-white p-6 shadow-lg rounded-lg">
          <div>
            <label className="block font-semibold">Book Title:</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter book title" />
          </div>
          <div>
            <label className="block font-semibold">Author Name:</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter author name" />
          </div>
          {/* ------------- Book Price ------------- */}
          <div>
            <label className="block font-semibold">Book Price:</label>
            <input type="number" className="w-full p-2 border rounded-lg" placeholder="Enter book price" />
          </div>
          <div>
            <label className="block font-semibold">Description:</label>
            <textarea className="w-full p-2 border rounded-lg" placeholder="Enter description"></textarea>
          </div>
          <div>
            <label className="block font-semibold">Category Name:</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Select</option>
              <option>Fiction</option>
              <option>Non-fiction</option>
              <option>Science</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Short Summary:</label>
            <textarea className="w-full p-2 border rounded-lg" placeholder="Enter short summary"></textarea>
          </div>
          <div>
            <label className="block font-semibold">Book Image:</label>
            <input type="file" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">Book File:</label>
            <input type="file" className="w-full p-2 border rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Upload</button>
        </form>
      </div>
    );
  };

  export default UploadBook;