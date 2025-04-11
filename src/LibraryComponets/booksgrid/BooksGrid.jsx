import React from "react";
import {bookData} from "../../data"; // Assuming you have a data file for books



const BooksGrid = () => {
    const books = [
      { id: 1, name: "Book 1", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Book 2", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Book 3", image: "https://via.placeholder.com/150" },
      { id: 4, name: "Book 4", image: "https://via.placeholder.com/150" },
      { id: 5, name: "Book 5", image: "https://via.placeholder.com/150" },
      { id: 6, name: "Book 6", image: "https://via.placeholder.com/150" },
      { id: 7, name: "Book 7", image: "https://via.placeholder.com/150" },
      { id: 8, name: "Book 8", image: "https://via.placeholder.com/150" },
    ];

    return (
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 w-full">
        {bookData.map((book) => (
          <div key={book.id} className="p-4 bg-white rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
            <img src={book.image} alt={book.title} className="w-full object-cover mb-2 rounded-lg" />
            <div className="text-lg font-semibold text-gray-700">{book.title}</div>
          </div>
        ))}
      </section>
    );
  };


export default BooksGrid;
  