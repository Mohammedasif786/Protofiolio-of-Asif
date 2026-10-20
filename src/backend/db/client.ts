import mongoose from "mongoose";

async function ConnectDB() {
  try {
    // await mongoose.connect(Bun.env.DB); // what does '!' means!
    // 1. Guard check with an explicit error
    const dbUri = Bun.env.DB;

    if (!dbUri) {
      throw new Error("Missing DB connection string in environment variables!");
    }

    await mongoose.connect(dbUri); // TypeScript knows dbUri is definitely a string here

    console.log("Mongoose is Connected to DB!");
  } catch (error) {
    console.log({
      status: 400,
      MSG: "Mongoose is not connected proper!",
      FoundError: error,
    });
  }
}
export default ConnectDB;
