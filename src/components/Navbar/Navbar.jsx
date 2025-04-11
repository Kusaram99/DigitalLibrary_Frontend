import React from "react";
import LightLogo from "../../images/Read-It-light.png";
import DarkLogo from "../../images/Read-It-dark.png";
// import DarkMode from "./DarkMode";
import { navlinks } from "../../data";
import { droplist } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import OrderModal from "./OrderModal";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/authThunk";

const Navbar = () => {
  // redux state
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // console.log("navbar user: ", user.role);

  const dispatch = useDispatch();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  // find admin route
  const isAdmin = pathSegments.find((segment) => segment === "seller");
  const lastSegment = pathSegments[pathSegments.length - 1];

  // console.log(isAdmin);
  // if user will be on Library page
  if (lastSegment === "library" || isAdmin) {
    return null; // Return null to hide the Navbar
  }

  const openModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = "hidden"; //Disable Scrolling
  };

  const openMenu = () => {
    setIsOpenMenu(true);
    document.body.style.overflow = "hidden"; //Disable Scrolling
  };

  // logout handler
  const logOutHandler = async () => {
    try {
      const result = await dispatch(logoutUser()).unwrap();
      console.log("result: ", result);
    } catch (err) {
      console.log(err);
    }
    // navigate("/");
  };

  return (
    <>
      {/* // -------------------------- Navbar ------------------------ */}
      <div className="fixed top-0 right-0 z-[999] left-0 dark:text-gray-200 bg-gray-100 dark:bg-gray-950 dark:transition-all dark:duration-500 transition-all duration-500 shadow-lg py-1">
        {/* ------------ Navbar Container ---------------------- */}

        <div className="sm:w-11/12 w-[95%] mx-auto flex justify-between items-center">
          {/* -------- Logo ---------- */}

          <div className="flex items-center gap-x-5">
            {/* <img
              src={themeMode === "light" ? LightLogo : DarkLogo}
              alt="logo"
              className="w-40 "
            /> */}
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              DG Library
            </Link>

            {/* ----------- Navlinks ------------ */}

            <div className="hidden lg:flex items-center md:gap-x-6 gap-x-4 md:text-[16px] text-sm">
              {/* {navlinks.map((nav) => (
                <div
                  key={nav.id}
                  className="hover:text-primary dark:text-gray-200 font-semibold transition-colors duration-300 anime"
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </div>
              ))} */}
              <Link
                to="/"
                className="hover:text-primary dark:text-gray-200 font-semibold transition-colors duration-300 anime"
              >
                Home{" "}
              </Link>
              <Link
                to="/store"
                className="hover:text-primary dark:text-gray-200 font-semibold transition-colors duration-300 anime"
              >
                Store{" "}
              </Link>

              {/* ========== Private button Library */}
              {isAuthenticated && (
                <Link
                  to="/library"
                  className="hover:text-primary dark:text-gray-200 font-semibold transition-colors duration-300 anime"
                >
                  Library{" "}
                </Link>
              )}
              {/* ========== Private button Seller A/c */}
              {user?.role === "seller" && user && (
                <Link
                  to="/seller"
                  className="hover:text-primary dark:text-gray-200 font-semibold transition-colors duration-300 anime"
                >
                  Seller Account{" "}
                </Link>
              )}
            </div>

            {/* ----------- Search bar ----------- */}
            <div className="flex-1 hidden sm:flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <form>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-sky-600 z-10 block"></i>
                    </div>
                    <input
                      type="search"
                      placeholder="Search for books, authors..."
                      // value={searchQuery}
                      // onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* -----------Button and  Navlinks ------------ */}

          <div className=" flex items-center md:gap-x-6 gap-x-5 py-2 relative">
            {/* ----------- darkmode Button ----------------- */}
            {/* <div>
              <DarkMode />
            </div> */}

            {isOpenMenu && (
              <ResponsiveNavbar
                logOutHandler={logOutHandler}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            )}

            {/* ------------ Order button ------------- */}

            <div>
              <button
                className="hidden sm:flex items-center gap-x-2 text-white font-semibold px-3 py-1 rounded-3xl blue-gradient border border-white hover:border dark:border dark:border-black dark:hover:border-white dark:transition-all dark:duration-500   hover:border-blue-700 transition-all duration-400"
                // onClick={() => openModal()}
              >
                {/* Order */}
                <span>
                  {" "}
                  <IoCart className="text-2xl" />
                </span>
              </button>
            </div>

            {/* -------------------- Authentication buttons --------------------- */}
            {isAuthenticated ? (
              <span
                className="cursor-pointer font-semibold hidden lg:inline "
                onClick={logOutHandler}
              >
                LogOut
              </span>
            ) : (
              <div className="hidden lg:flex items-center gap-x-1">
                <Link to="/auth" className="text-primary font-semibold">
                  Login
                </Link>{" "}
                /
                <Link
                  to="/auth"
                  className="text-primary font-semibold py-1 rounded-3xl"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {/* ------------------------- Menu Icon -------------- */}
            <span
              className="text-2xl lg:hidden cursor-pointer hover:text-primary dark:text-white dark:tranisiton-all dark:duration-300"
              onClick={() => openMenu()}
            >
              <HiMenu />
            </span>
          </div>
        </div>
      </div>

      {isOpenModal && (
        <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};

export default Navbar;
