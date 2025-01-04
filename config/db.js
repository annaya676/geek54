import mongoose from "mongoose";
const database_connectivity=async ()=>{
 try{
    await mongoose.connect("mongodb+srv://nikhilchaurasiya981:FeCM0qv5dUDd2NN2@cluster0.9kziy.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDb connected");
 }
 catch(err){
    console.log("Mongodb not connected")
 }
}
export default database_connectivity;