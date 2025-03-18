import React from "react";
import { NavLink } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className={
            "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          }
          to={"/add"}
        >
          
          <div className="w-5 h-5">
            <IoAddSharp />
          </div>
          <p className=" hidden md:block">Add Blog</p>
        </NavLink>

        <NavLink
          className={
            "flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          }
          to={"/list"}
        >
          <div className="w-5 h-5">
            <BiShow />
          </div>
          <p className=" hidden md:block">Show All Blogs</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
