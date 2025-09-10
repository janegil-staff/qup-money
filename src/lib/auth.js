import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectToDB } from "@/lib/db";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDB();
        
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) return null;

        const accessToken = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
          payday: user.payday, // ✅ include this
          currency: user.currency,
          budget: user.budget,
          accessToken,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.payday = user.payday;
        token.accessToken = user.accessToken;
        return token;
      }

      const dbUser = await User.findById(token.id);
      if (dbUser) {
        token.email = dbUser.email;
        token.payday = dbUser.payday;
        token.accessToken = dbUser.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.image;
      session.user.payday = token.payday; // ✅ expose it here
      session.user.currency = token.currency;
      session.user.budget = token.budget;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};
