import { Router } from "express";
import { deleteBlog, showAllBlogs, singleBlog, uploadBlog } from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.middlewares.js";

const router = Router()

router.post('/upload', upload.fields([{name: 'image1', maxCount:1}, {name: 'image2', maxCount:1}]), uploadBlog)
router.get('/list', showAllBlogs)
router.post('/delete', deleteBlog)
router.post('/single', singleBlog)

export default router