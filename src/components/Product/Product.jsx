import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { topBookData } from "../../data";

const ProductPage = () => {

  // react-router-dom hooks
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // react state
  const [product, setProduct] = useState(location.state.book);

  console.log("statte: ", location.state.book);

  // handler to navigate to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  // // find the product by id from the topBookData array
  // useEffect(() => { 
  //   // set the product to the state
  //   setProduct(location.state);
  // }, [location.state]);

  return (
    <div className="pt-40">
      <div className="mb-20 mx-auto md:p-8 max-w-4xl shadow-lg rounded-lg bg-gray-100">
        {/* // ------- Back Button ----------- */}
        <IoMdArrowRoundBack
          className="cursor-pointer text-3xl "
          onClick={handleBack}
        />

        {product && (
          <>
            <div className="flex flex-col md:flex-row items-center p-4 md:p-8 max-w-4xl  ">
              {/* ---------- Product Image --------- */}
              <img
                src={product.cover_image}
                alt={product.title}
                className="w-48 h-64 object-cover rounded-lg shadow-md"
              />

              {/* ---------- Product Details --------- */}
              <div className="md:ml-6 mt-4 md:mt-0 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm">by {product.author}</p>
                <p className="text-yellow-500 font-bold">
                  Rating: {product.rating} ⭐
                </p>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <div className="mt-4">
                  <span className="text-xl font-bold text-red-500">
                    ${product.price - (product.price * 20) / 100}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${product.price}
                  </span>
                  <span className="ml-2 text-green-600 font-bold">
                    (20% OFF)
                  </span>
                </div>
                <button
                  className="mt-4 text-white px-4 py-2 rounded-lg cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(68deg, rgba(8, 156, 244, 1) 44%, rgba(100, 202, 249, 1) 100%)",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* ------- short summary -------------- */}

            <div className="mt-6 p-4 ">
              <h3 className="text-lg font-semibold text-gray-800">
                Quick Summary
              </h3>
              <p className="text-gray-600">{product.shortSummary}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
