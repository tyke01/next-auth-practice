import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/user";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "john doe" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = (credentials.email as string) || undefined;
        const password = (credentials.password as string) || undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Email and password are required")
        }

        await connectDB()

        const user = await User.findOne({
          email
        }).select("password +role")

        if (!user) {
          throw new CredentialsSignin("No user found with this email");
        }

        if(!user.password) {
          throw new CredentialsSignin("No password set for this user");
        }

        const isMatched = await compare(password, user.password);

        if(!isMatched) {
          throw new CredentialsSignin("Invalid password");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id,
        }

        return userData;

      },
    }),
  ],
});
