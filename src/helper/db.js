import mongoose from "mongoose";
import { User } from "../models/user";

const config={
  isConnected: 0,
}

export const connectDb = async() => {

if(config.isConnected){
  return;
}

    try {

    const { connection }=await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName: "work_manager",
      });

      console.log("db connected...");
      console.log(connection.readyState);
      config.isConnected=connection.readyState;

      //console.log(connection)

    //   //testing and creating new user
    //   const user=new User({
    //     name:"test name",
    //     email:"test@gmail.com",
    //     password:"testpassword",
    //     about:"this is testing"
    //   })

    //   await user.save();

      //console.log("user is created");


     console.log("connected with host", connection.host);

    } catch(error){
       console.log("failed to connect with database");
       console.log(error);
    }
};