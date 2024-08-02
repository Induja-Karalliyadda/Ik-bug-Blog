import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://www.shutterstock.com/search/blank-profile-picture",
    },
}, { timestamps: true }); // Correct placement of timestamps

const User = mongoose.model('User', userSchema);
export default User;