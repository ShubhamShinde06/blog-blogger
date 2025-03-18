import React, { useContext, useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import { FaThumbsUp } from "react-icons/fa6";
import BlogChilditem from "./BlogChilditem";
import { BlogContext } from "../context/BlogContext";

const RelatedBlog = ({ tags}) => {
  const { BlogsData } = useContext(BlogContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (BlogsData.length > 0) {
      let blogCopy = BlogsData.slice();
      blogCopy = blogCopy.filter((item) => tags == item.tag);
      setRelated(blogCopy.slice(1, 4));
    }
  }, [BlogsData, tags]);

  //console.log(tags);

  return (
    <div>
      <div className="py-[50px] border-t-[1px] border-b-[1px] border-[#1F1F1F] mb-[50px]">
        <BlogHeader tag={"Related articles"} icon={<FaThumbsUp />} />
        <div className=" flex flex-col gap-6 md:flex-row w-full h-full items-center justify-between py-[20px]">
          {related.map((item, index) => (
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

export default RelatedBlog;
