import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* {big screen} */}
      <header className=" hidden absolute top-0 left-0 right-0 lg:px-[200px] md:px-[20px] w-full md:flex items-center justify-between h-[80px] text-white z-10">
        <Link to={"/"}>
          <div className="logo flex flex-col  items-center justify-center cursor-pointer">
            <h2 className=" text-[30px]">Black</h2>
            <p className=" text-[14px] text-[gray] mt-[-8px]">vision PRO</p>
          </div>
        </Link>

        <ul className="flex items-center justify-between h-[80px] lg:gap-8 md:gap-4 text-white">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/tech"}>
            <p>Tech</p>
          </NavLink>
          <NavLink to={"/politics"}>
            <p>Politics</p>
          </NavLink>
          <NavLink to={"/entertainment"}>
            <p>Entertainment</p>
          </NavLink>
          <NavLink to={"/finance"}>
            <p>Finance</p>
          </NavLink>
          <NavLink to={"/music"}>
            <p>Music</p>
          </NavLink>
          <NavLink to={"/life"}>
            <p>Life</p>
          </NavLink>
        </ul>

        <div className="hidden social-icon md:flex items-center justify-between h-[80px] gap-4 text-gray-300">
          <p className=" cursor-pointer">
            <IoLogoInstagram />
          </p>
          <p className=" cursor-pointer">
            <TiSocialFacebookCircular />
          </p>
          <p className=" cursor-pointer">
            <FaXTwitter />
          </p>
        </div>
      </header>

      {/* {small screen} */}
      <header className="md:hidden absolute top-0 left-0 right-0 w-full h-[80px] z-10 text-white flex px-3 items-center justify-between">
        <Link to={"/"}>
          <div className="logo flex flex-col  items-center justify-center cursor-pointer">
            <h2 className=" text-[25px]">Black</h2>
            <p className=" text-[12px] text-[gray] mt-[-8px]">vision PRO</p>
          </div>
        </Link>
        <div className="text-[25px] cursor-pointer">
          <RiMenu3Fill onClick={() => setVisible(true)} />
        </div>
      </header>
      <div
        className={`md:hidden absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${
          visible ? "w-[60%] z-10 h-full" : "w-0"
        }`}
      >
        <div className="flex items-center justify-end text-white h-[80px] px-3 text-[25px]">
          <RiMenu2Line onClick={() => setVisible(false)} />
        </div>

        <ul className="flex flex-col gap-4 text-white w-full px-3 text-[20px]">
          <NavLink onClick={() => setVisible(false)} to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/tech"}>
            <p>Tech</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/politics"}>
            <p>Politics</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/entertainment"}>
            <p>Entertainment</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/finance"}>
            <p>Finance</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/music"}>
            <p>Music</p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/life"}>
            <p>Life</p>
          </NavLink>
        </ul>

        <div className=" absolute bottom-0 w-full h-[100px] px-3 text-center text-[#858281]">
          <p>social media</p>
          <div className=" flex items-center justify-center gap-8 mt-5 text-[25px]">
            <p className=" cursor-pointer">
              <IoLogoInstagram />
            </p>
            <p className=" cursor-pointer">
              <TiSocialFacebookCircular />
            </p>
            <p className=" cursor-pointer">
              <FaXTwitter />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
