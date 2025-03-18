import axios from "axios";
import React, { useEffect, useState } from "react";
import { srever } from "../App";
import { toast } from "react-toastify";

const ShowAllBlog = () => {
  const [list, setList] = useState([]);

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

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(srever + "/api/blog/delete", { id });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p className="mb-2">All Blogs</p>
      <div className="flex flex-col gap-2">
        {/* table title */}
        <div className=" hidden md:grid grid-cols-[1fr_3fr_1fr_1fr] text-center items-center py-1 px-2 border bg-gray-100 text-sm text-black">
          <b>Image</b>
          <b>Title</b>
          <b>Tag</b>
          <b className="text-center">Action</b>
        </div>
        {/* blog list */}
        {list.map((item, index) => (
          <div
            className=" grid grid-cols-[1fr_3fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr] items-center text-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className=" w-12" src={item.front_blog_image} alt="item-img" />
            <p>{item.title}</p>
            <p>{item.tag}</p>
            {/* <p>{item.popular}</p>
            <p>{item.featured}</p> */}
            <p
              onClick={() => removeProduct(item._id)}
              className=" text-right md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllBlog;
