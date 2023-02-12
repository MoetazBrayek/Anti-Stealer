// connect to mongoatals db
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, { });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    }

export default connectDB;