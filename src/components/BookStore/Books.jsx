import React from "react";
import { Link } from "react-router-dom";
import { topBookData } from "../../data";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Books = ({ book }) => {
  // truncate the title
  const truncateTitle = (title, maxLength = 20) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  // discount handler
  // const discountHandler = (data) =>{
  //   const discount = (data.price * 20)/100;
  //   const finalPrice = data.price - discount;
  //   return finalPrice;
  // }

  return (
    <>
      <Link
        state={{ book }}
        to={`/product/${book._id}`} 
        className="flex flex-col items-center gap-y-3 py-3 px-1 bg-gray-50 dark:bg-gray-700 shadow-md rounded-md cursor-pointer  dark:hover:scale-105 dark:transition-all transition-all duration-200 hover:shadow-xl hover:scale-105 "
      >
        <img
          src={book.cover_image}
          alt={book.title}
          className="w-[150px] rounded-lg"
          data-aos="fade-up"
        />

        <p className='text-sm lg:text-xl font-semibold text-center'>{truncateTitle(book.title)}</p>
        <p className='text-sm italic text-gray-600 dark:text-gray-400'>{truncateTitle(book.author, 15) || "Anonymous"} </p>
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
            {book.price}
          </p>
          <p className="text-sm font-semibold text-primary dark:text-white">
           50
          </p>
          <p className="text-sm font-semibold text-red-500">20%</p>
        </div>
      </Link>
    </>
  );
};

export default Books;





// import React from 'react'
// import { Link } from 'react-router-dom'
// import { topBookData } from '../../data'
// import { FaStar } from 'react-icons/fa';
// import { FaStarHalfAlt } from "react-icons/fa";



// const Books = () => {
// // truncate the title
//   const truncateTitle = (title, maxLength = 20) => {
//     if (title.length > maxLength) {
//       return title.slice(0, maxLength) + "...";
//     }
//     return title;
//   };

//   return (
//     <div className="grid xmd:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center px-4 gap-x-8 md:gap-y-20 gap-y-12 ">
//       {topBookData.map((data) => (
//         <Link to={`/product/${data.id}`}
//           key={data.id}
//           className="flex flex-col items-center gap-y-3 py-3 px-1 bg-gray-50 dark:bg-gray-700 shadow-md rounded-md cursor-pointer  dark:hover:scale-105 dark:transition-all transition-all duration-200 hover:shadow-xl hover:scale-105 "
//         >
//           <img
//             src={data.image}
//             alt={data.title}
//             className="w-[150px] rounded-lg"
//             data-aos="fade-up"
//           />

//           {/* <p className='text-sm lg:text-xl font-semibold text-center'>{truncateTitle(data.title)}</p> */}
//           {/* <p className='text-sm italic text-gray-600 dark:text-gray-400'>{data.author || "Anonymous"} </p> */}
//           <div className="flex text-sm items-center gap-x-1">
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStarHalfAlt className="text-yellow-500" /> 
//           </div>

//           {/* ----------- price --------------- */}
//           <div className="flex gap-x-2 items-center">
//             <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 line-through">
//               {data.price}
//             </p>
//             <p className="text-sm font-semibold text-primary dark:text-white">
//               {data.discountPrice}
//             </p>
//             <p className="text-sm font-semibold text-red-500">
//               {data.discount}%
//             </p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Books