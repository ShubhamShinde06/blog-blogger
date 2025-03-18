import React from "react";
import { Link } from "react-router-dom";

const Blogitem = ({id, img, title, tag, datils, index }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div
        key={index}
        className="w-[100%] h-[500px] md:h-[220px] md:flex gap-3 justify-center cursor-pointer blogitembox"
      >
        <div className=" overflow-hidden">
          <img
            src={img}
            alt="mix"
            className="w-[580px] md:w-[350px] md:h-[150px] lg:w-[580px] h-[250px] lg:h-full"
            id="size-img"
          />
        </div>

        <div className="w-full h-full py-3 px-3 flex flex-col gap-4 text-white ">
          <h2
            className="text-[22px] md:text-[20px] lg:text-[25px]"
            id="text-css"
          >
            {title}
          </h2>
          <div className=" flex items-center gap-2">
            <p className="md:px-2 px-1 rounded-md font-[400] bg-[#FFA301] text-black">
              {tag}
            </p>
            <span className="text-[#858281]"> August 29, 2019</span>
          </div>

          <h4 className="text-[#858281] lg:text-[15px] lg:h-[50px] overflow-hidden text-box md:hidden lg:block">
            {datils}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Blogitem;
