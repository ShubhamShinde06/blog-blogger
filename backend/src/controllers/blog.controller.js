import { v2 as cloudinary } from "cloudinary";
import blogModel from "../models/blog.model.js";

//upload blog
export const uploadBlog = async (req, res) => {
  try {
    const { title, tag, datils, author_name, popular, featured } = req.body;

    let imageUrlOne
    let imageUrlTwo

    const image1 = req.files.image1 && req.files.image1[0];
    const imageOne = image1; 
    if (imageOne !== undefined) {
      let result = await cloudinary.uploader.upload(image1.path, {
        resource_type: "image",
      });
      imageUrlOne = result.secure_url;
      console.log("Uploaded image URL:", imageUrlOne);
    } else {
      console.log("No image to upload");
    }

    const image2 = req.files.image2 && req.files.image2[0];
    const imageTwo = image2; 
    if (imageTwo !== undefined) {
      let result = await cloudinary.uploader.upload(image2.path, {
        resource_type: "image",
      });
      imageUrlTwo = result.secure_url;
      console.log("Uploaded image URL:", imageUrlTwo);
    } else {
      console.log("No image to upload");
    }

    // const images = [image1, image2].filter((item) => item !== undefined);
    // let imagesUrl = await Promise.all(
    //   images.map(async (item) => {
    //     let result = await cloudinary.uploader.upload(item.path, {
    //       resource_type: "image",
    //     });
    //     return result.secure_url;
    //   })
    // );

    const blogData = {
      title,
      tag,
      datils,
      front_blog_image: imageUrlOne,
      back_blog_image: imageUrlTwo,
      author_name,
      popular: popular === 'true' ? true : false,
      featured: featured === 'true' ? true : false,
    };

    const blog = new blogModel(blogData);
    await blog.save();

    res.json({
      success: true,
      message: "Blog Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in upload-blog",
    });
  }
};

//show all blogs
export const showAllBlogs = async (req, res) => {

  try{

    const blogs = await blogModel.find({})
    res.json({
      success: true,
      blogs
    })

  } catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in show-all-blogs",
    });
  }
}

//delete blog
export const deleteBlog = async (req, res) => {

  try{

    await blogModel.findOneAndDelete(req.body.id)
    res.json({
      success: true,
      message: "Blog deleted"
    })

  } catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in delete-blog",
    });
  }

}

//single blog
export const singleBlog = async (req,res) => {

  try{

    const { id } = req.body

    const blog = await blogModel.findById(id)
    if(!blog){
        return res.status(404).json({
            message:"Blog not found"
        })
    }
    res.status(200).json({blog})

  } catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in single-blog",
    });
  }

}

// {if(!mongoose.Types.ObjectId.isValid(id)){
//   return res.status(400).json({
//     message:"Invalid Blog id"
// })
// }}
