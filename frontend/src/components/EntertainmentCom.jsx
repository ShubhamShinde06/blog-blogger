import React, { useContext, useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'
import { FaRegCirclePlay } from "react-icons/fa6";
import BlogChilditem from './BlogChilditem';
import { BlogContext } from '../context/BlogContext';

const EntertainmentCom = () => {

  const {BlogsData} = useContext(BlogContext)
  const [data,setData] = useState([])

  useEffect(()=>{
    const filteredData = BlogsData.filter(item => item.tag.includes("Entertainment"))
    setData(filteredData.slice(0,3))
  },[BlogsData])

  return (
    <div className='w-full px-3 lg:px-[200px] md:px-[20px]'>
      <div className='border-t-2 border-b-2 border-[#45444465] py-[80px]'>
        <BlogHeader tag={"Entertainment"} icon={<FaRegCirclePlay />}/>
        <div className=' flex flex-col gap-6 md:flex-row w-full h-full items-center justify-between py-[20px]'>
          {
            data.map((item,index) => {
              if(item.tag === "Entertainment"){
                return(
                  <>
                    <BlogChilditem
                      index={index}
                      title={item.title}
                      tag={item.tag}
                      date={item.Date}
                      img={item.front_blog_image}
                      id={item._id}
                    />
                  </>
                )
              }
              return null
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default EntertainmentCom