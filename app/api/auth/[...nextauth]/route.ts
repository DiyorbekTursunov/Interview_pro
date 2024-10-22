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
  session: {
    strategy: 'jwt', // Use JWT for session handling
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user }) {
      try {
        if (user.email) {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });
          return existingUser ? true : '/'; // Redirect if user not found
        }
        return false; // Prevent sign-in if email is not valid
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Ensure user ID is set correctly
        token.email = user.email; // Ensure email is set correctly
      }
      return token; // Return updated token
    },
    async session({ session, token }) {
      if (typeof token.id === 'string') {
        session.user.id = token.id; // Assign token.id to session.user
      }
      session.user.email = token.email; // Assign token.email to session.user
      return session; // Return updated session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
