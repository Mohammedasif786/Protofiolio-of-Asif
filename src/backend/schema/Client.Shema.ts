import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      sparse: true, // indexing!
    },
    message: {
      type: String,
      trim: true,
      unique: true,
      index: {
        unique: true,
        partialFilterExpression: { email: { $type: "string" } }, // only enforces unique constraint if email is actually a string
      },
    },
    avatarColor: { type: String, default: "#2979FF" }, // for the colored circle
  },
  { timestamps: true },
);

// just setting set of client Schema in JSON format to easy for Update and delete! 
clientSchema.set("toJSON", { virtuals: true });

// module.exports = mongoose.model("Client", clientSchema);
export default clientSchema;
