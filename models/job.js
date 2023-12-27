import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    company:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const Job = mongoose.model("job",jobSchema);
export default Job; 