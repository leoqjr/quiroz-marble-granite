import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  projectType?: string;
  timeline?: string;
  message?: string;
  website?: string; // honeypot
};

function isValidEmail(value: string): boolean {
  return /\S+@\S+\.\S+/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const {
      name = "",
      email = "",
      phone = "",
      city = "",
      projectType = "",
      timeline = "",
      message = "",
      website = "",
    } = body;

    // Honeypot: if website is filled, likely a bot
    if (website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "OK" },
        { status: 200 },
      );
    }

    // Basic validation
    if (!name.trim() || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Here is where we'll plug in Resend later.

    return NextResponse.json(
      { success: true, message: "Message received." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Unexpected error. Please try again later." },
      { status: 500 },
    );
  }
}
