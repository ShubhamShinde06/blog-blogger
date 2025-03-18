import React from 'react'
import { Link } from 'react-router-dom'


const SideBlogCom = ({id, key,title,date,img}) => {

  return (
    <Link to={`/blog/${id}`}>
      <div key={key} className='flex items-center justify-center h-[100px] gap-4 cursor-pointer blogitembox'>
        <div className=' w-full'>
          <h2 className='text-white text-[14px] font-[300]' id='side-text-css'>{title}</h2>
          <p className='mt-2 text-[#767676] text-[11px] font-bold' id='side-text-css'>{date}</p>
        </div>
        <div className='w-[120px] h-[60px] rounded overflow-hidden'>
          <img src={img} alt="sideimg" />
        </div>
      </div>
    </Link>
  )
}

export default SideBlogCom