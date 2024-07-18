import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://subhasish:1234567890@cluster0.nat37fw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}