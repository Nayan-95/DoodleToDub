import mongoose from "mongoose";




const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-0irl3ft-shard-00-00.fxahxyi.mongodb.net:27017,ac-0irl3ft-shard-00-01.fxahxyi.mongodb.net:27017,ac-0irl3ft-shard-00-02.fxahxyi.mongodb.net:27017/?ssl=true&replicaSet=atlas-idc13v-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{

       await mongoose.connect(URL);
       console.log('Database connected successfully');
    } catch(error) {
        console.log('Error while connecting with the database', error); 
    }
}

export default Connection;