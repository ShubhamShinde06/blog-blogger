import { createContext, useContext, useEffect, useState } from "react";
import Blogs from '../assets/data.js'
import { toast } from "react-toastify";
export const BlogContext = createContext();
import axios from 'axios'

const BlogContextProvider = (props) => {

    //const name = "billy"
    const [BlogsData, setBlogsData] = useState([]);
    const server = "http://localhost:8000"

    const getBlogsData = async () => {
        try {
            const response = await axios.get(server + '/api/blog/list')
            if(response.data.success){
                setBlogsData(response.data.blogs)
                console.log(response.data.blogs)
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getBlogsData();
    }, []);

    //console.log(BlogsData)

    const value = {
        BlogsData,
        setBlogsData
    }

    return(
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )

}

export default BlogContextProvider

