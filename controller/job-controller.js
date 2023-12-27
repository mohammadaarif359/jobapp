import Job from "../models/job.js"

export const saveJob = async(req,res) =>{
    try {
        console.log('req.body',req.body)
        const newJob = new Job(req.body)
        await newJob.save(req.body);
        return res.status(200).json({message:"Job saved sucessfully"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

export const getJob = async(req,res) =>{
    try {
        const job = await Job.find()
        return res.status(200).json({message:"Job get sucessfully",data:job})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}