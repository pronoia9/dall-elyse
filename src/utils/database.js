import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL).then(() => {
      isConnected = true;
      console.log('MongoDB connected.');
    }); //.catch((error) => void console.error('MongoDB connection error:', error));
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
