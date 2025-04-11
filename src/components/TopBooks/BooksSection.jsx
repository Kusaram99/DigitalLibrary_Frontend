import React from "react";
import { topBookData } from "../../data";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksSection = () => {
  // truncate the title
  const truncateTitle = (title, maxLength = 20) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="grid xmd:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center px-4 gap-x-8 md:gap-y-20 gap-y-12 ">
      {topBookData.map((data) => (
        <Link to={`/product/${data.id}`} key={data.id}>
          <div className="flex flex-col items-center gap-y-3 py-3 px-3 bg-gray-50 dark:bg-gray-700 shadow-md rounded-md cursor-pointer  dark:hover:scale-105 dark:transition-all transition-all duration-200 hover:shadow-xl hover:scale-105 ">
            <img
              src={data.image}
              alt={data.title}
              className="w-[150px] rounded-lg"
              data-aos="fade-up"
            />

            {/* <p className='text-sm lg:text-xl font-semibold text-center'>{truncateTitle(data.title)}</p> */}
            {/* <p className='text-sm italic text-gray-600 dark:text-gray-400'>{data.author || "Anonymous"} </p> */}
            <div className="flex text-sm items-center gap-x-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStarHalfAlt className="text-yellow-500" />
            </div>

            {/* ----------- price --------------- */}
            <div className="flex gap-x-2 items-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 line-through">
                {data.price}
              </p>
              <p className="text-sm font-semibold text-primary dark:text-white">
                {data.discountPrice}
              </p>
              <p className="text-sm font-semibold text-red-500">
                {data.discount}%
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BooksSection;
