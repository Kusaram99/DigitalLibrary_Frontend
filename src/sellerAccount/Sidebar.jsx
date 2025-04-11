import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import { MdUploadFile } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  // redux state
  // const { isAuthenticated } = useSelector((state) => state.auth);

  // state handler
  const [isCollapsed, setCollapsed] = useState(true);
  const navigator = useNavigate();

  // collapse handler
  const collapseHandler = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div>
      {!isCollapsed && (
        <div className="fixed z-10 top-1/3 left-0">
          <TbLayoutSidebarRightCollapseFilled
            onClick={collapseHandler}
            className="cursor-pointer text-4xl rounded-br-lg rounded-tr-lg bg-gray-700 text-gray-50"
          />
        </div>
      )}
      <div
        className={`${
          isCollapsed ? "sm:relative sm-max:fixed" : " fixed -left-full"
        } z-20 bg-gray-800 text-white px-3 min-h-screen max-h-max`}
      >
        {/* Header Section */}
        <h2
          onClick={() => navigator("/")}
          className="font-bold p-4 text-2xl cursor-pointer"
        >
          ADMIN
        </h2>
        <hr className="" />
        <div className="flex flex-col gap-10 justify-between p-4">
          <nav className="flex flex-col gap-3 mt-8">
            <Link
              to="#"
              className="flex gap-4 items-center cursor-pointer"
            >
              <IoMdHome />
              DASHBOARD
            </Link>
            <Link
              to="/seller/upload-book"
              className="flex gap-4 items-center cursor-pointer"
            >
              <MdUploadFile />
              UPLOAD
            </Link>
            <Link
              to="#"
              className="flex gap-4 items-center cursor-pointer"
            >
              <MdOutlinePayment />
              PAYMENT
            </Link>
          </nav>

          {/* Other options */}
          <div className="flex flex-col gap-3 relative">
            <div className="flex gap-4 items-center cursor-pointer">
              <TbCircleNumber1 className="text-2xl" />
              LOREM
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <TbCircleNumber2 className="text-2xl" />
              LOREM
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <TbCircleNumber3 className="text-2xl" />
              LOREM
            </div>
            <TbLayoutSidebarLeftCollapseFilled
              onClick={collapseHandler}
              className="absolute sm:hidden -right-12 top-8 text-4xl cursor-pointer text-blue-50 bg-gray-800 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            {/* Account Section */}
            <div className="flex gap-4 items-center cursor-pointer">
              <MdAccountCircle className="text-2xl" />
              <Link to="updateacccount">
                <h1>ACCOUNT</h1>
              </Link>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <IoIosSettings className="text-2xl" />
              <Link to="setting">
                <h1>SETTING</h1>
              </Link>
            </div>
          </div>
        </div>

        {/* ======================= Collapse button ====================== */}
        <div className="absolute top-1/3 -right-6 sm-max:hidden">
          <TbLayoutSidebarLeftCollapseFilled
            onClick={collapseHandler}
            className="text-4xl cursor-pointer text-blue-50 bg-gray-800 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
