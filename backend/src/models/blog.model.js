import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    datils:{
        type: String,
        required: true
    },
    front_blog_image:{
        type: String,
        required: true
    },
    back_blog_image:{
        type: String,
        required: true
    },
    author_image:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQc8AS8lajjEalCKTTlR9hDnjlSeg0QPubQ&s"
    },
    author_name:{
        type: String,
        required: true,
        default: 'admin'
    },
    popular:{
        type:Boolean,
    },
    featured:{
        type: Boolean,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const blogModel = mongoose.models.blog || mongoose.model('blog', blogSchema)

export default blogModel