import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {


  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false)


  const value = {
    navigate,
    admin,
    setAdmin,

    
  };

  return (
    <BlogContext.Provider value={value}>{props.children}</BlogContext.Provider>
  );
};

export default BlogContextProvider
