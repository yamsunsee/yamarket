import mongoose from "mongoose";

const URI = process.env.DATABASE_URI as string;

const connectDatabase = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    throw error;
  }
};

export default connectDatabase;
