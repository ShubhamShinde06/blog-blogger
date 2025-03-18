import React, { useContext, useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import { GiTechnoHeart } from "react-icons/gi";
import { LuMusic } from "react-icons/lu";
import { BlogContext } from "../context/BlogContext";
import Blogitem from "./Blogitem";
import SideBlogCom from "./SideBlogCom";
import BlogsCount from "./BlogsCount";

const TechCom = () => {
  const { BlogsData } = useContext(BlogContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filteredData = BlogsData.filter((item) => item.tag.includes("Tech"));
    setData(filteredData.slice(1, 4));
    //music
    const filtered = BlogsData.filter((item) => item.tag.includes("Music"));
    setFilter(filtered.slice(0, 4));
  },[BlogsData]);

  return (
    <div className="px-3 lg:px-[200px] md:px-[20px]">
      <div className="w-full pb-[50px] border-t-2 border-[#45444465]"></div>
      <BlogHeader tag={"Tech"} icon={<GiTechnoHeart />} />
      <div className="w-full md:h-[90vh] md:flex border-b-2 pb-[50px] border-[#45444465]" id="top-p-box">
        <div className="md:w-[70%] justify-center items-center flex flex-col md:gap-7 mix-box2">
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <>
                  <Blogitem
                    key={index}
                    index={index}
                    title={item.title}
                    tag={item.tag}
                    img={item.front_blog_image}
                    datils={item.datils}
                    id={item._id}
                  />
                </>
              );
            })
          ) : (
            <p>No data found for the selected tags.</p>
          )}
        </div>
        <div className="md:w-[30%] w-full md:my-[30px]">
          <div className="w-full h-[60vh] lg:h-[50vh] pl-[20px]" id="side-com-hight">
            <BlogHeader tag={"Music"} icon={<LuMusic />} />
            {filter.map((item, index) => (
              <SideBlogCom
                key={index}
                title={item.title}
                date={item.Date}
                img={item.front_blog_image}
                id={item._id}
              />
            ))}
          </div>
          <BlogsCount/>
        </div>
      </div>
    </div>
  );
};

export default TechCom;
