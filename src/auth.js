import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import { db } from "@/lib/db";


export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  //adapter: PrismaAdapter(db),
  pages: {
    signIn: "/login",
    error: "/error",
  },
  adapter: PrismaAdapter(db),
  session: {
     strategy: 'database',
     },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },     
  ...authConfig,
});