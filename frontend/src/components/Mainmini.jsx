import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Mainmini = ({ id, title, tag, datils, front_blog_image }) => {
  return (
    <>
      <div className="lg:flex gap-[40px]">
        <div className=" text-[white] lg:w-[70%]">
          <h1 className="text-[38px]">{tag}</h1>
          <p className="pt-2 lg:ml-1 text-[#AAAAAA] w-[80%] text-box-2 overflow-hidden">
            {datils}
          </p>
          <nav className="pt-4 lg:ml-1 flex gap-[1px]">
            <button className="outline-none border-none py-[1px] px-[6px] bg-[#B37201] text-black hover:bg-[#FFA500]">
              <p className="text-[12px] font-bold">{tag}</p>
            </button>
          </nav>
          <Link to={`/blog/${id}`}>
            <div className="mt-[40px] w-full h-[450px] overflow-hidden relative cursor-pointer mainmini-img-box ">
              <img src={front_blog_image} alt="tech" />
              <div className="absolute px-4 lg:py-2 bottom-0 lg:h-[100px] blogchildbox w-full bg-black text-white">
                <h2 className="text-[28px]">{title}</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:w-[30%] h-[400px] mt-5 md:my-[50px] md:mt-[220px]">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Mainmini;
