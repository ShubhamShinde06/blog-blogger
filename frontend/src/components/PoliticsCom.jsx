import React, { useContext, useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import { FaRegCirclePlay } from "react-icons/fa6";
import BlogChilditem from "./BlogChilditem";
import { BlogContext } from "../context/BlogContext";

const PoliticsCom = () => {
  const { BlogsData } = useContext(BlogContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = BlogsData.filter((item) =>
      item.tag.includes("Politics")
    );
    setData(filteredData.slice(0, 3));
  },[BlogsData]);

  return (
    <div className="w-full px-3 lg:px-[200px] md:px-[20px]">
      <div className="border-t-2 border-[#45444465] py-[80px] ">
        <BlogHeader tag={"Politics"} icon={<FaRegCirclePlay />} />
        <div className=" block md:flex w-full h-full items-center justify-between py-[40px]">
          {data.map((item, index) => (
            <BlogChilditem
              index={index}
              title={item.title}
              tag={item.tag}
              date={item.Date}
              img={item.front_blog_image}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoliticsCom;
