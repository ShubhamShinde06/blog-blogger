import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import Header from "../components/Header";
import Mainmini from "../components/Mainmini";
import SideBlogCom from "../components/SideBlogCom";
import BlogHeader from "../components/BlogHeader";
import { GiCrystalGrowth } from "react-icons/gi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import Blogitem from "../components/Blogitem";
import Footer from "../components/Footer";

const Finance = () => {
  const { BlogsData } = useContext(BlogContext);
  const [data, setData] = useState([]);
  const [AllData, setAllData] = useState([]);
  const [filteredPopularData, setFilterePopularData] = useState([]);
  const [filteredFeaturedData, setFilteredFeaturedData] = useState([]);

  useEffect(() => {
    const filteredData = BlogsData.filter((item) =>
      item.tag.includes("Finance")
    );
    setData(filteredData.slice(1, 2));
    setAllData(filteredData.slice(1, Infinity));

    const filteredTwo = BlogsData.filter((item) => item.Featured == true);
    setFilteredFeaturedData(filteredTwo.slice(1, 4));

    const filterThree = BlogsData.filter((item) => item.Popular == true);
    setFilterePopularData(filterThree.slice(1, 4));
  }, [BlogsData]);

  return (
    <>
      <div className="w-full px-3 lg:px-[200px] md:px-[20px] py-[80px]">
        <div className="border border-[#1f1f1f]">
          <Header />
        </div>
        <div className="my-[80px]">
          {data.map((item, index) => (
            <>
              <Mainmini
                key={index}
                tag={item.tag}
                datils={item.datils}
                front_blog_image={item.back_blog_image}
                title={item.title}
                id={item._id}
              />
            </>
          ))}
          {/* small post */}
          <div className="md:flex gap-[40px]">
            <div className="w-full md:w-[70%] md:h-full border-y-2  border-[#1f1f1f] mt-[50px] py-[50px]">
              <div className="md:w-[100%] justify-center items-center flex flex-col md:gap-7 mix-box2">
                {AllData.length > 0 ? (
                  AllData.map((item, index) => {
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
            </div>
            <div className="lg:w-[30%] md:ml-[0px] md:mt-[50px]">
              <div
                className="w-full mt-[20px]  md:pl-[20px]"
                id="side-com-hight"
              >
                <BlogHeader
                  tag={"Featured"}
                  icon={<MdOutlineFeaturedPlayList />}
                />
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
              <div
                className="w-full md:pl-[20px] mt-[30px]"
                id="side-com-hight"
              >
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
              <div className="w-full h-[300px] md:ml-[20px] mt-[30px]">
                <a href="#" target="_blank">
                  <div class="darksoul-card1">
                    <div class="circle1"></div>
                    <img src="" alt="" />
                    <h2 class="content">Instagram</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mt-[-50px]">
        <Footer />
      </div>
    </>
  );
};

export default Finance;
