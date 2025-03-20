import React, { useContext, useEffect, useState } from "react";
import Blogitem from "./Blogitem";
import { FaMouse } from "react-icons/fa";
import { BlogContext } from "../context/BlogContext";
import BlogHeader from "./BlogHeader";
import SideBlogCom from "./SideBlogCom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import Search from "./Search";
import { motion } from "framer-motion";

const MixBox = () => {
  const { BlogsData, loading } = useContext(BlogContext);
  const selectedTags = ["Tech", "Finance", "Politics"];
  const [filter, setFilter] = useState([]);

  // const filteredData = BlogsData.filter((item) =>
  //   selectedTags.includes(item.tag)
  // );
  const filteredData = selectedTags
    .map((tag) => BlogsData.find((item) => item.tag === tag))
    .filter(Boolean);

  //filtered finance
  useEffect(() => {
    const filtered = BlogsData.filter((item) => item.tag.includes("Finance"));
    setFilter(filtered.slice(0, 4));
  }, [BlogsData]);

  return (
    <div className="px-3 lg:px-[200px] md:px-[20px] py-[40px]">
      <BlogHeader tag={"Popular"} icon={<FaMouse />} />
      <div className="w-full lg:h-[90vh] md:flex  pt-5 lg:p-0" id="top-p-box">
        <div className="md:w-[70%] flex flex-col lg:gap-7 mix-box2 items-center justify-center">
          {
          loading
          ?
            [...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-[580px] md:w-[350px] md:h-[150px] lg:w-[580px] h-[250px] lg:h-full"
              ></motion.div>
            ))
          :
          filteredData.length > 0 ? (
            filteredData.map((item, index) => {
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
        <div className="md:w-[30%] w-full md:my-[50px]">
          <div className="w-full md:pl-[20px] mt-[20px]">
            <Search/>
          </div>

          <div className="w-full pl-[20px] mt-[20px]">
            <BlogHeader tag={"Finance"} icon={<RiMoneyRupeeCircleFill />} />
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
        </div>
      </div>
    </div>
  );
};

export default MixBox;
