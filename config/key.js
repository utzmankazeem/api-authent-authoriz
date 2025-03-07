import mongoose from 'mongoose';

export default async function connectDB(){
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(`${process.env.DB_URI}`,{
            family: 4
        });
    } catch (err) {
        console.error(err);
    }
}