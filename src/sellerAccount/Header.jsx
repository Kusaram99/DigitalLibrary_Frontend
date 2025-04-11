import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
// import { useQuizApiContext } from "../useContexAPI/ContextAPI";

const Header = () => {
  //   const {setAuth, auth} = useQuizApiContext()
  //   const navigator = useNavigate()

  // log out handler
  //   const logOutHandler=()=>{
  //     // if confirm message will be no
  //     if(!confirm("Do you want to LogOut!")) return;
  //     localStorage.removeItem('auth')
  //     setAuth(null)
  //     navigator("/home/authentication")
  //   }

  return (
    <header className="h-[64px] flex justify-between items-center px-10 py-4 bg-gray-800">
      <h1 className="text-2xl font-bold text-white">DG</h1>
      <div className="flex gap-5">
        {/* {!auth ? ( */}
          <Link
            to="/home/authentication"
            className="font-semibold cursor-pointer text-white"
          >
            LogIn/SignUp
          </Link>
        {/* ) : ( */}
          {/* <button
            className="font-semibold cursor-pointer text-white"
              onClick={logOutHandler}
          >
            Log Out
          </button> */}
        {/* )} */}
        <FaUserLarge className="cursor-pointer text-white text-2xl" />
      </div>
    </header>
  );
};

export default Header;
