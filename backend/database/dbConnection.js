import mongoose from 'mongoose'

const dbConnection = () => {

    mongoose.connect(process.env.MONGO_URL,{
        dbName:"PORTFOLIO"
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((error)=>{
        console.log(`Error connecting to MongoDB:${error}`);
    });
};

export default dbConnection;