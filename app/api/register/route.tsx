// app/api/register/route.ts

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, PrismaClientKnownRequestError } from "@prisma/client"; // Ensure this is imported
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Type guard function to check if an error is a known Prisma error
function isPrismaError(error: unknown): error is PrismaClientKnownRequestError {
  return (error as PrismaClientKnownRequestError).code !== undefined;
}

export async function POST(req: NextRequest) {
  const { name, email, linkedinUrl, password } = await req.json();

  // Basic validation
  if (!name || !email || !password || !linkedinUrl) {
    return NextResponse.json(
      { message: "Please fill in all fields." },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Invalid email format." },
      { status: 400 }
    );
  }

  // Validate LinkedIn URL
  const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
  if (!linkedinRegex.test(linkedinUrl)) {
    return NextResponse.json(
      { message: "Invalid LinkedIn URL format." },
      { status: 400 }
    );
  }

  // Password length check
  if (password.length < 8) {
    return NextResponse.json(
      { message: "Password must be at least 8 characters long." },
      { status: 400 }
    );
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        linkedinUrl,
        password: hashedPassword,
      },
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string, // Ensure you have this in your .env file
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Return the token and user data
    return NextResponse.json(
      {
        message: "Registration successful!",
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
  } catch (error: unknown) {
    if (isPrismaError(error)) {
      if (error.code === "P2002") {
        // This error code indicates a unique constraint violation (e.g., email already registered)
        return NextResponse.json(
          { message: "Email already registered." },
          { status: 400 }
        );
      }
    }

    // Fallback for other unknown errors
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
