import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Main = () => {
  const { BlogsData, loading, setLoading } = useContext(BlogContext);

  return (
    <>
      <main className=" cursor-pointer w-full h-[550px] md:h-[480px] lg:h-[750px] relative top-0 left-0  text-white overflow-hidden cursor-box">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[550px] md:h-[480px] lg:h-[750px] bg-white animate-pulse rounded-lg"
          ></motion.div>
        ) : (
          BlogsData.map((item, index) => {
            if (index === 0 && item.tag === "Life") {
              return (
                <div key={index}>
                  <Link to={`/blog/${item._id}`}>
                    <img
                      src={item.front_blog_image}
                      alt="main-img"
                      className="w-full h-[550px] md:h-[480px] lg:h-[750px]"
                    />
                    <div className="w-full px-4 md:px-0 md:pt-[570px] h-[600px] md:h-[480px] lg:h-[750px] absolute bg-[#00000069] top-0 main-box flex items-end ">
                      <div className="lg:px-[200px] md:px-[20px] h-[330px]">
                        <h1 className="w-[330px] md:w-[600px] lg:w-[600px] text-[25px] md:text-[35px] lg:text-[35px] font-[500]">
                          {item.title}
                        </h1>
                        <div className="mt-5 flex items-center gap-4">
                          <p className="md:px-2 px-1 rounded-md font-[400] bg-[#FFA301] text-black">
                            {item.tag}
                          </p>
                          <span className="text-[#858281]">{item.Date}</span>
                        </div>
                        <p className="text-box  h-[50px] md:w-[600px] lg:w-[900px] mt-5 text-[18px] md:text-[15px] lg:text-[20px] text-[#858281]">
                          {item.datils}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
            return null;
          })
        )}
        <div className="w-full h-[100px] absolute  bottom-0 z-10 main-box-shadow"></div>
      </main>
    </>
  );
};

export default Main;
