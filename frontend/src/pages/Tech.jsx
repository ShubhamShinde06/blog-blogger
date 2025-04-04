import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Mainmini from "../components/Mainmini";
import { BlogContext } from "../context/BlogContext";
import Blogitem from "../components/Blogitem";
import Footer from "../components/Footer";
import Serach from "../components/Search";
import BlogHeader from "../components/BlogHeader";
import { GiCrystalGrowth } from "react-icons/gi";
import SideBlogCom from "../components/SideBlogCom";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const Tech = () => {
  const { BlogsData } = useContext(BlogContext);
  const [data, setData] = useState([]);
  const [AllData, setAllData] = useState([]);
  const [filteredPopularData, setFilterePopularData] = useState([]);
  const [filteredFeaturedData, setFilteredFeaturedData] = useState([]);

  useEffect(() => {
    const filteredData = BlogsData.filter((item) => item.tag.includes("Tech"));
    setData(filteredData.slice(0, 1));
    setAllData(filteredData.slice(1, Infinity));

    const filteredTwo = BlogsData.filter((item) => item.featured == true);
    setFilteredFeaturedData(filteredTwo.slice(1, 4));

    const filterThree = BlogsData.filter((item) => item.popular == true);
    setFilterePopularData(filterThree.slice(1, 4));
  }, [BlogsData]);

  return (
    <>
      <div className="w-full px-3 lg:px-[200px] md:px-[20px] py-[80px]">
        <div className="border border-[#1f1f1f]">
          <Header />
        </div>
        <div className="my-[80px]">
          {/* main post */}
          {data.map((item, index) => (
            <>
              <Mainmini
                key={index}
                tag={item.tag}
                datils={item.datils}
                front_blog_image={item.front_blog_image}
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
              <div className="w-full md:pl-[20px] mt-[30px]" id="side-com-hight">
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
                <a
                  href="#"
                  target="_blank"
                >
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

export default Tech;
