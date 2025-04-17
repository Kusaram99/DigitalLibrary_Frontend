import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBookData } from "../redux/slices/bookDataSlice";
import { useDispatch } from "react-redux";

const ManageBooks = () => {
  // redux state
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // react state
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data ---------------------------------------------------------------
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_GET_SELLER_ALL_BOOKS_BY_ID_URL + user._id
      );
      setBooks(response.data.books);
      console.log("Books fetched:", response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error.message);
    } finally {
      console.log("Finally block executed");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    fetchBooks();
  }, [isAuthenticated, user]);

  // Handle update and navigate to update page ------------------------------
  const handleUpdate = (book) => {
    // dispatch(setBookData(book)); // Set the book data in Redux store
    navigate("/seller/update-book", { state: { book } }); // Navigate to the update book page
  };

  // Handle delete book -------------------------------
  const handleDelete = async (bookId) => {
    try {
      const result = await axios.delete(`${import.meta.env.VITE_DELETE_BOOK_BY_ID_URL}${bookId}`);
      alert("Successfully deleted!");
      fetchBooks();
      console.log("result: ", result);
    } catch (err) {
      alert("Somthing is wrong please try later!");
      console.log("Err: ", err);
    }
  };

  // Handle view book
  const handleView = (bookId) => {
    console.log(`View book with ID: ${bookId}`);
    alert("This feature is comming soon!");
  };

  // Truncate text to a maximum length
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Add ellipsis if text is too long
    }
    return text;
  };

  // Show loading message while fetching books
  if (loading) {
    return <h1 className="text-center mt-6">Loading books...</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Books</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="hidden lg:grid grid-cols-4 font-bold text-center bg-gray-200 p-2 rounded">
          <div>Title</div>
          <div>Author</div>
          <div>Price</div>
          <div>Actions</div>
        </div>
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book._id}
              className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-0 items-center text-center bg-white shadow-md p-2 rounded"
            >
              <div
                className="font-medium text-center lg:text-center"
                title={book.title}
              >
                {truncateText(book.title, 12)}
              </div>
              <div className="font-medium pl-2" title={book.author}>
                {truncateText(book.author, 9)}
              </div>
              <div className="font-medium pl-2">${book.price}</div>
              <div className="flex justify-center space-x-2 mt-2 sm:mt-0">
                <button
                  onClick={() => handleView(book._id)}
                  className="bg-blue-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
                <button
                  onClick={() => handleUpdate(book)}
                  className="bg-green-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageBooks;
