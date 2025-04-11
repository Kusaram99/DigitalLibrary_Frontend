import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const SellerAccount = () => {
  return (
    <div className="flex items-stretch">
      <Sidebar />
      <div className="flex-grow h-lvh overflow-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default SellerAccount;
