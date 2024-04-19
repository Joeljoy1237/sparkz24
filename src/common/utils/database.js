import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    //console"Already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MANGODB_URL, {
      dbName: "sparkz24",
    });
    isConnected = true;
    //console"====================================");
    //console"Sucessfully connected");
    //console"====================================");
  } catch (error) {
    //consoleerror);
  }
};
