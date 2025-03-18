import React from 'react'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        {/* {big screen} */}
      <header className="lg:px-[200px] md:px-[20px] px-4 w-full flex items-center justify-between h-[80px] text-white z-10">
        <Link to={"/"}>
          <div className="logo flex flex-col  items-center justify-center cursor-pointer">
            <h2 className=" text-[30px] text-white">Black</h2>
            {/* <p className=" text-[14px] text-[black] mt-[-8px]">vision PRO</p> */}
            <p className=" text-[14px] text-[white] mt-[-8px]">admin panel</p>
          </div>
        </Link>

        <ul className="flex items-center justify-between h-[80px] lg:gap-8 gap-4 text-white">
          <NavLink to={"/"}>
            <p>DashBorad</p>
          </NavLink>
          {/* <NavLink to={"/add"}>
            <p>Add Blog</p>
          </NavLink>
          <NavLink to={"/list"}>
            <p>All Blogs</p>
          </NavLink> */}
        </ul>
      </header>
    </div>
  )
}

export default NavBar