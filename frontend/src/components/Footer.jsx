import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // const { BlogsData } = useContext(BlogContext);
  // const [filteredPopularData, setFilteredPopularData] = useState([]);

  // useEffect(() => {
  //   const filteredOne = BlogsData.filter((item) => item.Popular === true);
  //   setFilteredPopularData(filteredOne.slice());
  // }, [BlogsData]);

  return (
    <div>
      <footer className="w-full h-full px-3 lg:px-[200px] md:px-[20px] text-white">
        <div className="flex flex-col w-full">
          <div className="md:px-5 py-5 w-full">
            <h3 className=" text-[30px] font-[500] text-[#858281]">
              Newsletter
            </h3>
            <p className="text-[14px] text-[#919191] mt-3">
              Subscribe to get the latest news, offers and special <br />{" "}
              announcements.
            </p>
            <form className="mt-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 h-[45px] rounded-md outline-none border-[1px] border-[#858281] bg-black placeholder:text-[14px] placeholder:text-[#919191]"
              />
              <br />
              <button className="mt-3 ml-[-1px] w-full bg-[#222222] h-[40px] rounded-md hover:bg-[orange] hover:text-black">
                Subscribe
              </button>
              <p className="text-[14px] text-[#919191] mt-3 ml-1">
                By subscribing, you're accepting to receive promotions.
              </p>
            </form>
          </div>
        </div>
        <div className="md:flex items-center justify-between border-t-2 border-[#45444465] w-full h-[80px]">
          <h3 className="text-[#919191] lg:text-[14px] md:text-[12px] text-center mt-5 md:mt-0">
            © Copyright - BlogWebApp by ShubhamDev
          </h3>
          <ul className=" hidden md:flex items-center justify-between h-[80px] lg:gap-4 md:gap-2 md:text-[14px] text-[#919191]">
            <NavLink to={"/"}>
              <p>Home</p>
            </NavLink>
            <NavLink to={"/tech"}>
              <p>Tech</p>
            </NavLink>
            <NavLink to={"/politics"}>
              <p>Politics</p>
            </NavLink>
            <NavLink to={"/entertainment"}>
              <p>Entertainment</p>
            </NavLink>
            <NavLink to={"/finance"}>
              <p>Finance</p>
            </NavLink>
            <NavLink to={"/music"}>
              <p>Music</p>
            </NavLink>
            <NavLink to={"/life"}>
              <p>Life</p>
            </NavLink>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
