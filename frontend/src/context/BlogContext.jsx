import { createContext, useContext, useEffect, useState } from "react";
import Blogs from '../assets/data.js'
import { toast } from "react-toastify";
export const BlogContext = createContext();
import axios from 'axios'

const BlogContextProvider = (props) => {

    //const name = "billy"
    const [BlogsData, setBlogsData] = useState([]);
    const [loading,setLoading] = useState(false)
    const server = "http://localhost:8000"

    const getBlogsData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(server + '/api/blog/list')
            if(response.data.success){
                setBlogsData(response.data.blogs)
                console.log(response.data.blogs)
                setLoading(false)
            }
            else{
                toast.error(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getBlogsData();
    }, []);

    //console.log(BlogsData)

    const value = {
        BlogsData,
        setBlogsData,
        loading,setLoading
    }

    return(
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )

}

export default BlogContextProvider

