import { NextResponse } from "next/server";
import { Resend } from "resend";

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

const resend = new Resend(process.env.RESEND_API_KEY as string);

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

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email is temporarily unavailable. Please try again later or contact us directly.",
        },
        { status: 503 },
      );
    }

    // Send internal email to you (test mode)
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["leonardoqjr@gmail.com"],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `City / Area: ${city}`,
        `Project type: ${projectType}`,
        `Timeline: ${timeline}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't send your message right now. Please try again later.",
        },
        { status: 500 },
      );
    }

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
