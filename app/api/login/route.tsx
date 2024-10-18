// app/api/login/route.ts

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Basic validation
  if (!email || !password) {
    return NextResponse.json(
      { message: "Please provide both email and password." },
      { status: 400 }
    );
  }

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "No user found with this email." },
        { status: 404 }
      );
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password || "");

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string, // Ensure JWT_SECRET is defined in your .env file
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Return the token and user data
    return NextResponse.json(
      {
        message: "Login successful!",
        token, // Send the JWT token in the response
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          linkedinUrl: user.linkedinUrl,
        },
      },
      { status: 200 }
    );
  } catch (error) {
        console.log(error);
        
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
