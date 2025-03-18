import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { IoIosSearch } from "react-icons/io";
import SideBlogCom from "./SideBlogCom";

const Search = () => {

  const { BlogsData } = useContext(BlogContext);
  const [searchData, setSearchData] = useState([]);

  const filterDepartment = (e) => {
    const records = BlogsData.filter((blog => blog.title.toLowerCase().includes(e.target.value.toLowerCase())))
    setSearchData(records)
  }
  

  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="w-full h-[50px] border-[#858281] border rounded-full outline-none bg-[#000] text-white placeholder:text-[#858281] px-4"
          placeholder="Search..."
          onChange={filterDepartment}
        />
        <div className=" absolute w-10 h-10  right-2 top-1 flex items-center justify-center">
          <div className="text-white text-[25px]">
            <IoIosSearch />
          </div>
        </div>
      </div>
      <div className="w-full md:pl-[20px] h-[180px] pt-2 overflow-scroll overflow-x-hidden serach-box">
        {searchData.map((item, index) => (
          <SideBlogCom
            key={index}
            title={item.title}
            date={item.Date}
            img={item.front_blog_image}
            id={item._id}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
