import React, { useEffect, useState } from "react";
import Books from "./Books";
import axios from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
// import BookStoreHeader from "./BookStoreHeader";

const BookStore = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // react state
  const [booksData, setBooksData] = useState([]);
  const [loading, seLoading] = useState(false);

  // fetch all books
  const fetBooksData = async () => {
    try {
      seLoading(true); // start loading
      const response = await axios.get(import.meta.env.VITE_GET_ALL_BOOKS_URL); // sending request
      console.log("response: ", response.data.books);
      setBooksData(response.data.books); // updating data state
    } catch (err) {
      alert("Somthig is wrong during the fetching data from server!");
      console.log("Error: ", err);
    } finally {
      seLoading(false);
    }
  };

  // send request to server when component didmount
  useEffect(() => {
    fetBooksData();
  }, []);

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

      <div className="mt-5">
        {loading && (
          <p className="text-center font-semibold text-gray-800 dark:text-gray-100">
            Loading...
          </p>
        )}
      </div>
      {/* -------------------- Books ---------------- */}

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center px-4 gap-x-8 md:gap-y-20 gap-y-12 ">
        {booksData.map((book) => (
          <Books book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default BookStore;
