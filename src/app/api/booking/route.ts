import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, tripType } = body;

    if (!firstName || !lastName || !email || !phone || !tripType) {
      return NextResponse.json(
        { message: "Missing required fields: firstName, lastName, email, phone, tripType" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend or SMTP to send booking email
    // to info@atlasoutfitting.com
    console.log("New booking inquiry:", JSON.stringify(body, null, 2));

    return NextResponse.json(
      { message: "Booking inquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { message: "Failed to process booking inquiry" },
      { status: 500 }
    );
  }
}
