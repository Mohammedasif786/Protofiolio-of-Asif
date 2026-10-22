import mongoose from "mongoose";

async function ConnectDB() {
  const dbUri = Bun.env.DB;

  if (!dbUri) {
    throw new Error("Missing DB connection string. Set DB in src/backend/.env or the environment.");
  }

  await mongoose.connect(dbUri);
  console.log("Mongoose connected to the database.");
}
export default ConnectDB;
