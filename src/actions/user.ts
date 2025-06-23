"use server"

import connectDB from "@/lib/db";
import { User } from "@/models/user";
import { redirect } from "next/navigation";


const register  = async (formData: FormData) => {
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if(!firstName || !lastName || !email || !password) {
        throw new Error("All fields are required");
    }

    await connectDB()

    // existing user check
    const existingUser = await User.findOne({email});
    if(existingUser) {
        throw new Error("User already exists");
    }

    await User.create({
        firstName,
        lastName,
        email,
        password
    })

    console.log("User registered successfully");

    redirect("/login");

}

export {register}