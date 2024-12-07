// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };

import mongoose from "mongoose";
import { config } from "dotenv";
config();  // Load environment variables

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_DB_URI;
    
    if (!dbURI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);  // Exit the process with a failure code
  }
};

export default connectDB;
