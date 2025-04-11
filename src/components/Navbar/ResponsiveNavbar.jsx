import React from "react";
import { IoClose } from "react-icons/io5";
import { navlinks } from "../../data";
import { droplist } from "../../data";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import OrderModal from "./OrderModal";
import { useState } from "react";
import { useSelector } from "react-redux";

const ResponsiveNavbar = ({ isOpenMenu, setIsOpenMenu, logOutHandler }) => {
  // redux state
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log(user);

  // useState
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = "hidden"; //Disable Scrolling
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = "unset"; //Enable Scrolling
  };

  return (
    <>
      <div className="fixed lg:hidden z-[999] inset-0 grid place-items-center backdrop-blur-sm">
        {/* ---------- responsive menu --------------- */}
        <div
          className="shadow-lg h-dvh min-w-[200px] xs:w-[300px] xsm:w-[280px] xs:w-[250px] bg-white dark:bg-gray-700 absolute right-[5px] top-[10%] open-anime rounded-lg px-3 py-4"
          style={{ width: "-webkit-fill-available" }}
        >
          {/* ----------- close menu ---------- */}

          <div className="bg-yellow-300 relative mb-5 ">
            <IoClose
              className="absolute xs:right-5 right-3 xs:text-2xl text-xl cursor-pointer dark:text-white dark:tranisiton-all dark:duration-300"
              onClick={() => closeMenu()}
            />
          </div>

          {/* ----------- Navlinks ------------ */}

          <div className="flex flex-col gap-y-2 mt-6 items-start ml-8">
            {/* -------- links  ------------ */}

            {/* {navlinks.map((link) => (
              <Link
                to={link.link}
                key={link.id}
                onClick={() => closeMenu()}
                className="w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold transiiton-all duration-300"
              >
                {link.title}
              </Link>
            ))} */}

            <Link
              to="/"
              className="w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold transiiton-all duration-300"
              onClick={() => closeMenu()}
            >
              Home{" "}
            </Link>
            <Link
              to="/store"
              className="w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold transiiton-all duration-300"
              onClick={() => closeMenu()}
            >
              Store{" "}
            </Link>

            {/* ======= Private button Library */}
            {isAuthenticated && (
              <Link
                to="/library"
                className="w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold transiiton-all duration-300"
                onClick={() => closeMenu()}
              >
                Library{" "}
              </Link>
            )}

            {/* ====== Private button Seller Account */}
            {user?.role === "seller" && user && (
              <Link
                to="/seller"
                className="w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold transiiton-all duration-300"
                onClick={() => closeMenu()}
              >
                Seller Account{" "}
              </Link>
            )}
            {/* ------------ Auth buttons ------------ */}
            {!isAuthenticated ? (
              // <div
              //   className="mb-2 w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold transiiton-all duration-300"
              //   onClick={() => closeMenu()}
              // >
              <Link
                to="/auth"
                onClick={() => closeMenu()}
                className="text-primary font-semibold mb-2 w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 transiiton-all duration-300"
              >
                Login {" / "}
                Sign Up
              </Link>
            ) : (
              // </div>
              <span
                className="text-primary font-semibold mb-2 w-screen cursor-pointer hover:bg-sky-300 p-2 rounded text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 transiiton-all duration-300"
                onClick={() => {
                  closeMenu();
                  logOutHandler();
                }}
              >
                LogOut
              </span>
            )}
            {/* ------------ Order button ------------- */}

            <div>
              <button
                className="flex items-center gap-x-2 text-white font-semibold px-3 py-1 rounded-3xl blue-gradient border border-white hover:border dark:border dark:border-gray-700 dark:hover:border-white dark:transition-all dark:duration-500   hover:border-blue-700 transition-all duration-400"
                //  onClick={()=> openModal()}
              >
                Order
                <span>
                  {" "}
                  <IoCart />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpenModal && (
        <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};

export default ResponsiveNavbar;
