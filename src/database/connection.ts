import mongoose from "mongoose";

export async function mongoDbConnection(MONGO_DB_URI: string) {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connection with MongoDB established!");
  } catch (e) {
    console.log("Error while connecting to database...");
    console.log(e);
  }
}
