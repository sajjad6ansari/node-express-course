const Task=require('../models/task')
const getAllTasks=async (req,res)=>{
    try {
        const tasks=await Task.find({})
        if(!tasks){
            return res.status(404).json({msg:`no task is found,please create some task `}) 
        }
        res.status(200).json({tasks})
        //res.status(200).json({tasks:tasks})
        //When the key and value share the same name {tasks}==={tasks:tasks}
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const createTask=async(req,res)=>{
    try {
        const task=await  Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        // console.log(error)
        res.status(500).json({msg:error.message})
    }
}
const getTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no such task is found with ${taskID}`}) 
        }
        res.status(200).json({task:task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with ${taskID}`}) 
        }
        // res.status(200).json({task})
        // res.status(200).send()
        res.status(200).json({task:null,status:'successful'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            runValidators:true,
            new:true
        })
        if(!task){
            return res.status(404).json({msg:`no task with ${taskID}`}) 
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}