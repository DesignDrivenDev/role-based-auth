import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB.");
    console.log(
      `Databse Connected Successfully: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
