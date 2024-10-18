import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'default-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'default-client-secret',
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Ensure user.email is a string before querying
        if (user.email) {
          // Check if the user already exists in the database
          const existingUser = await prisma.user.findUnique({
            where: {
              email: user.email, // Now it's guaranteed to be a string
            },
          });

          if (existingUser) {
            // User exists, allow sign in
            return true;
          } else {
            // User does not exist, redirect to registration page
            return `/`;
          }
        } else {
          // If email is null or undefined, handle accordingly
          return false; // Prevent sign in if email is not valid
        }
      } catch (error) {
        console.error('Error checking user in signIn callback:', error);
        return false; // Prevent sign in if there's an error
      }
    },
    async redirect({ baseUrl }) {
      // Redirect to the home page after sign-in unless handled by signIn callback
      return baseUrl;
    },
    async session({ session, token }) {
      // Attach user information to the session object
      session.user.id = token.id;
      return session;
    },
  },
  // Other NextAuth.js configuration...
});

export { handler as GET, handler as POST };
