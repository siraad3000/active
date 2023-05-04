import NextAuth from "next-auth";
import Friends from "@/pages/friends";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name: string;
      id: string;
      email: string;
      friends?: Friends[];
    } & DefaultSession["user"];
  }
}
