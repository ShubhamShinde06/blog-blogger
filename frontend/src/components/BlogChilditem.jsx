import React from "react";
import { Link } from "react-router-dom";

const BlogChilditem = ({ id, title, tag, date, index, img }) => {
  return (
    <>
      <div
        key={index}
        className="md:w-[32%] h-[400px] relative overflow-hidden cursor-pointer blogitembox"
      >
        <Link to={`/blog/${id}`}>
          <img src={img} alt="sunimg" className="w-full h-[380px]" onClick={window.scrollTo(0,0)} />
          <div className="absolute px-4 py-2 bottom-0 h-[120px] blogchildbox w-full bg-black text-white">
            <h2 className="text-[18px] font-[400]">{title}</h2>
            <div className="mt-3 flex items-center gap-4">
              <p className="md:px-2 px-1 text-[12px] rounded-md font-[400] bg-[#FFA301] text-black">
                {tag}
              </p>
              <span className="text-[#858281]">{date}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogChilditem;
