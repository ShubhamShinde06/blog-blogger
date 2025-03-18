import React, { useContext, useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import { MdOutlineFeaturedPlayList, MdOutlineMenuBook } from "react-icons/md";
import { BlogContext } from "../context/BlogContext";
import Blogitem from "./Blogitem";
import SideBlogCom from "./SideBlogCom";
import { GiCrystalGrowth } from "react-icons/gi";

const LifeCom = () => {
  const { BlogsData } = useContext(BlogContext);
  const [data, setData] = useState([]);
  const [filteredFeaturedData, setFilteredFeaturedData] = useState([]);
  const [filteredPopularData, setFilterePopularData] = useState([]);

  useEffect(() => {
    const filteredData = BlogsData.filter((item) => item.tag.includes("Life"));
    setData(filteredData.slice(1, 4));

    const filteredTwo = BlogsData.filter((item) => item.featured === true); 
    setFilteredFeaturedData(filteredTwo.slice(1, 4));

    const filterThree = BlogsData.filter((item) => item.popular === true);
    setFilterePopularData(filterThree.slice(1, 4));

  }, [BlogsData]);

  return (
    <div className="px-3 lg:px-[200px] md:px-[20px] py-[50px]">
      <BlogHeader tag={"Life"} icon={<MdOutlineMenuBook />} />
      <div className="w-full md:h-[90vh] md:flex">
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
        <div className="md:w-[30%] w-full md:my-[50px] flex flex-col gap-4">
          <div className="w-full  pl-[20px]" id="side-com-hight">
            <BlogHeader tag={"Featured"} icon={<MdOutlineFeaturedPlayList />} />
            {filteredFeaturedData.map((item, index) => (
              <SideBlogCom
                key={index}
                title={item.title}
                date={item.Date}
                img={item.front_blog_image}
                id={item._id}
              />
            ))}
          </div>

          <div className="w-full  pl-[20px]" id="side-com-hight">
            <BlogHeader tag={"Popular"} icon={<GiCrystalGrowth />} />
            {filteredPopularData.map((item, index) => (
              <SideBlogCom
                key={index}
                title={item.title}
                date={item.Date}
                img={item.front_blog_image}
                id={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeCom;
