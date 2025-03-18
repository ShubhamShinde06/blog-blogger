import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogsCount = () => {
  const { BlogsData } = useContext(BlogContext);

  const [data, setData] = useState([]);
  const [tagCounts, setTagCounts] = useState({ Life: 0, Tech: 0, Politics:0, Entertainment:0, Finance:0, Music:0 });

  useEffect(() => {
    setData(BlogsData);
  }, [BlogsData]);

  const countTags = (data) => {
    const counts = { Life: 0, Tech: 0, Politics:0, Entertainment:0, Finance:0, Music:0};
    data.forEach((item) => {
      if (item.tag === "Life") {
        counts.Life++;
      } else if (item.tag === "Tech") {
        counts.Tech++;
      } else if (item.tag === "Politics") {
        counts.Politics++;
      } else if (item.tag === "Entertainment") {
        counts.Entertainment++;
      } else if(item.tag === "Finance"){
        counts.Finance++;
      } else if(item.tag === "Music"){
        counts.Music++;
      }
    });
    setTagCounts(counts);
  };

  useEffect(() => {
    countTags(data);
  }, [data]);

  //console.log(tagCounts);

  return (
    <div>
      <div className="flex flex-col pl-[20px] text-white">
        <div className="w-full h-[30px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[0]}</p>
          <span>{tagCounts.Life}</span>
        </div>

        <div className="w-full h-[30px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[1]}</p>
          <span>{tagCounts.Tech}</span>
        </div>

        <div className="w-full h-[30px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[2]}</p>
          <span>{tagCounts.Politics}</span>
        </div>

        <div className="w-full h-[30px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[3]}</p>
          <span>{tagCounts.Entertainment}</span>
        </div>

        <div className="w-full h-[30px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[4]}</p>
          <span>{tagCounts.Finance}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogsCount;
