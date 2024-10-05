const express=require('express')
const app=express()
const router=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',router)
//app.get('/api/v1/tasks')-                 get all tasks
//app.post('/api/v1/tasks')-                post a  task
//app.get('/api/v1/tasks/:id')-             get single task
//app.patch('/api/v1/tasks/:id')-           update task
//app.get('/api/v1/tasks/:id')-             delete task

const port=3000

const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        // console.log('connected to DB')
        app.listen(port,console.log(`server listening on the port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()
 

