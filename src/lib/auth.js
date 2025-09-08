import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectToDB } from "./db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        isSignUp: { label: "Sign Up", type: "text" }, // optional fla
      },
      async authorize(credentials) {
        await connectToDB();

        const { email, password, isSignUp } = credentials;

        if (isSignUp === "true") {
          // SIGN UP FLOW
          const existingUser = await User.findOne({ email });
          if (existingUser) throw new Error("User already exists");

          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = await User.create({
            email,
            password: hashedPassword,
          });

          return {
            id: newUser._id.toString(),
            email: newUser.email,
     
          };
        } else {
          // SIGN IN FLOW
          const user = await User.findOne({ email });
          if (!user || !user.password) throw new Error("Invalid credentials");

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) throw new Error("Invalid credentials");

          return {
            id: user._id.toString(),
            email: user.email,
          };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
};
