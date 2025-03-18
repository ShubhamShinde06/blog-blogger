import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { srever } from "../App";
import axios from "axios";
import { BlogContext } from "../context/BlogContext";

const DashBorad = () => {

  const {admin,navigate,token} = useContext(BlogContext)

  const [list, setList] = useState([]);
  const [tagCounts, setTagCounts] = useState({
    Life: 0,
    Tech: 0,
    Politics: 0,
    Entertainment: 0,
    Finance: 0,
    Music: 0,
  });

  const fetchList = async () => {
    try {
      const response = await axios.get(srever + "/api/blog/list");
      if (response.data.success) {
        setList(response.data.blogs);
        console.log(response.data.blogs);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

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
    fetchList();
  }, []);

  useEffect(()=>{
    countTags(list)
  },[list])

  console.log(admin)


  return (
    <>
      <div className="w-[100%] h-[100%] text-white text-center">
        <h1 className="pb-5 text-[25px]">Total tag</h1>
        <div className="flex flex-col pl-[20px] text-white">
        <div className="w-full h-[100px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[0]}</p>
          <span>{tagCounts.Life}</span>
        </div>

        <div className="w-full h-[100px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[1]}</p>
          <span>{tagCounts.Tech}</span>
        </div>

        <div className="w-full h-[100px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[2]}</p>
          <span>{tagCounts.Politics}</span>
        </div>

        <div className="w-full h-[100px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[3]}</p>
          <span>{tagCounts.Entertainment}</span>
        </div>

        <div className="w-full h-[100px] py-5 border-b-2 px-2 border-[#1B1B1B] flex items-center justify-between">
          <p>{Object.keys(tagCounts)[4]}</p>
          <span>{tagCounts.Finance}</span>
        </div>
      </div>
      </div>
      {/* <div className="w-full h-[40%] border flex">
        <div className="w-full border"></div>
        <div className="w-full border"></div>
      </div> */}
    </>
  );
};

export default DashBorad;
