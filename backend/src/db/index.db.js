import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/blogs`)
        console.log('\n Mongo DB Connected !!')
    } catch (error) {
        console.log('\n Mongo DB Error', error)
    }
}

export default connectDB