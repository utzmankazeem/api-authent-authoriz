import mongoose from "mongoose";

const custSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    category: {
        User:{
        type: Number,
        default: 2100
        },
        Admin: Number,
        Editor: Number
    },
    pass: {
        type: String,
        required: true
    },
    refreshToken: String
});

export default mongoose.model("Cust", custSchema);