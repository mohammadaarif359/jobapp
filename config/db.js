import mongoose from 'mongoose';

const ConnectDB = async() =>{
    try {
        const con = await mongoose.connect(process.env.MONGODB_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('mongo db connected')
    } catch(error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default ConnectDB;