function BookStoreHeader() {
  return (
    <div className="mt-10 flex flex-col items-start p-4 border-b">
      {/* --------------------- Filter --------------------- */}
      <div>
        <h2 className="text-2xl font-bold">Book Store</h2>
        <p className="dark:text-gray-400 text-gray-500 text-sm">
          Discover and purchase books for your library
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
          <span className="text-lg">🔍</span> Show Filters
        </button>

        <select className="border rounded-md px-4 py-2 text-gray-700 cursor-pointer">
          <option>Sort by: Popularity</option>
          <option>Sort by: Newest</option>
          <option>Sort by: Price (Low to High)</option>
          <option>Sort by: Price (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default BookStoreHeader;
