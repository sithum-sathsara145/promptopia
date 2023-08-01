import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected === true) {
        console.log('mongoDB is Already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Share_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log('mongoDB is Connected');
    } catch (error) {
        console.log(error);
    }

}