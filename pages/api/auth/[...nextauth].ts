import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import { authUser } from "@/types/userTemp";
import { ObjectId } from "mongodb";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error(
    'Invalid/Missing environment variable: "GOOGLE ENV variable missing"'
  );
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials): Promise<authUser> {
        const mongoClient = await clientPromise;
        const user = await mongoClient
          .db("active")
          .collection("users")
          .findOne({
            username: credentials?.username,
            password: credentials?.password,
          });
        if (user) {
          user._id = new ObjectId(user._id.toString());
          return user;
        } else {
          throw new Error("Invalid username or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
});
