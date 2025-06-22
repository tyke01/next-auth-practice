import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, select: false },
    // Whenever protecting routes
    role: {type: String, default: "user"},
    image: { type: String },
    // google or github provider
    authProviderId: {type: String}
})

export const User = mongoose.models?.User || mongoose.model("User", userSchema);