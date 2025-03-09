import mongoose from "mongoose";

const custSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    category: {
        User:{
            type:Number,
            // default: 2100
            },     
        Admin: {
            type:Number,
            default: 2300
        },
        Editor:{
            type:Number,
            // default: 2200
            },
    },   
    pass: {
        type: String,
        required: true
    },
    refreshToken: String
})

export default mongoose.model("Cust", custSchema);