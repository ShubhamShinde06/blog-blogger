import React from 'react'

const BlogHeader = ({icon, tag}) => {
  return (
    <div className=' flex items-center h-[50px] gap-3 text-[#858281]'>
        <div className='text-[33px] font-light'>{icon}</div>
        <div className='text-[30px] font-semibold'><h2>{tag}</h2></div>
    </div>
  )
}

export default BlogHeader