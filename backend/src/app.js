import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

import blogRoter from './routes/blog.router.js'
app.use('/api/blog', blogRoter)

export default app