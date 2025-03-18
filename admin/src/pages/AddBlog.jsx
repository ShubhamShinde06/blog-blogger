import React, { useState } from "react";
import image from "../assets/upload_area.png";
import {toast} from 'react-toastify'
import { srever } from "../App";
import axios from "axios"

const AddBlog = () => {

  const[loading, setLoading] = useState(false)

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)

  const [title, setTitle] = useState('')
  const [datils, setDatils] = useState('')
  const [tag, setTag] = useState('Tech')
  const [popular, setPopular] = useState(false)
  const [featured, setFeatured] = useState(false)

  const onSumitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      
      const formData = new FormData()

      formData.append("title", title)
      formData.append("datils", datils)
      formData.append("tag", tag)
      formData.append("popular", popular)
      formData.append("featured", featured)

      image1 & formData.append("image1",image1)
      image2 & formData.append("image2",image2)

      const response = await axios.post(srever + '/api/blog/upload', formData)
      if(response.data.success){
        toast.success(response.data.message)
        setTitle('')
        setDatils('')
        setPopular(false)
        setFeatured(false)
        setImage1(false)
        setImage2(false)
        setLoading(false)
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      setLoading(false)
    }

  }

  return (
    <form onSubmit={onSumitHandler}>
      <div className="w-full h-full flex flex-col gap-6">
        <div className="flex gap-6">
        <label htmlFor="image1">
              <img className='w-20 cursor-pointer' src={!image1 ? image : URL.createObjectURL(image1)} alt="upload" />
              <input 
                type="file" 
                id='image1' 
                hidden 
                onChange={(e)=>setImage1(e.target.files[0])}
              />
            </label>
            <label htmlFor="image2">
              <img className='w-20 cursor-pointer' src={!image2 ? image : URL.createObjectURL(image2)} alt="upload" />
              <input 
                type="file" 
                id='image2' 
                hidden 
                onChange={(e)=>setImage2(e.target.files[0])}
              />
            </label>
        </div>
        <div className=" w-full">
          <p className=" mb-2">Blog Title</p>
          <input
            type="text"
            placeholder="Title"
            className="w-full max-w-[500px] px-3 py-2 text-black"
            required
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className=" w-full">
          <p className=" mb-2">Blog description</p>
          <textarea
            type="text"
            placeholder="Write content here"
            className="w-full max-w-[500px] px-3 py-2 text-black"
            required
            onChange={(e)=>setDatils(e.target.value)}
            value={datils}
          />
        </div>
        <div>
          <p className="mb-2">Blog Tag</p>
          <select onChange={(e)=>setTag(e.target.value)} className="text-black px-3 py-2">
            <option value="Enterainment">Enterainment</option>
            <option value="Finance">Finance</option>
            <option value="Life">Life</option>
            <option value="Music">Music</option>
            <option value="Politics">Politics</option>
            <option value="Tech">Tech</option>
          </select>
        </div>
        <div className=" flex gap-2 mt-2">
          <input
            type="checkbox"
            id="popular"
            onChange={()=>setPopular(prev => !prev)}
            checked={popular}
          />
          <label className=" cursor-pointer" htmlFor="bestseller">
            popular
          </label>
        </div>
        <div className=" flex gap-2 mt-2">
          <input
            type="checkbox"
            id="featured"
            onChange={()=>setFeatured(prev => !prev)}
            checked={featured}
          />
          <label className=" cursor-pointer" htmlFor="bestseller">
            featured
          </label>
        </div>
        <button type='submit' className='w-28 py-3 mt-4 bg-white text-black rounded'>{loading ? 'Loading..' : 'ADD'}</button>
      </div>
    </form>
  );
};

export default AddBlog;
