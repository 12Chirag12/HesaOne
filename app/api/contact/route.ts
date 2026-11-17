import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      workEmail,
      phoneNumber,
      companyName,
      serviceCategory,
      facilitySector,
      message,
    } = body;

    // Server-side validation
    if (!fullName || !workEmail || !message) {
      return NextResponse.json(
        { error: "Full Name, Work Email, and Inquiry Scope are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    const subject = encodeURIComponent(
      `[HESAONE Inquiry] ${serviceCategory || "Technical Consultation"} - ${companyName || fullName}`
    );

    const emailBody = encodeURIComponent(
      `HESAONE TECHNICAL ADVISORY INQUIRY\n` +
      `===================================\n\n` +
      `Client / Contact Name: ${fullName}\n` +
      `Organization: ${companyName || "Not specified"}\n` +
      `Work Email: ${workEmail}\n` +
      `Phone Number: ${phoneNumber || "Not provided"}\n` +
      `Practice Discipline: ${serviceCategory || "General HSE Engineering"}\n` +
      `Industrial Sector: ${facilitySector || "Industrial Facility"}\n\n` +
      `Technical Scope & Facility Details:\n` +
      `-----------------------------------\n` +
      `${message}\n\n` +
      `Date Logged: ${new Date().toISOString()}\n`
    );

    const mailtoUrl = `mailto:hesaonellp@gmail.com?subject=${subject}&body=${emailBody}`;

    // If an email provider is configured in environment variables (e.g. RESEND_API_KEY)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "HESAONE Web <inquiries@hesaone.com>",
            to: ["hesaonellp@gmail.com"],
            reply_to: workEmail,
            subject: `[HESAONE Inquiry] ${serviceCategory} - ${companyName || fullName}`,
            text: decodeURIComponent(emailBody),
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            mode: "dispatched",
            message: "Inquiry successfully transmitted to HESAONE engineering advisory.",
          });
        }
      } catch (err) {
        console.error("Resend API dispatch failed, falling back to client mailto", err);
      }
    }

    // Honest fallback: Provide structured mailto dispatch without pretending database storage
    return NextResponse.json({
      success: true,
      mode: "prepared",
      recipient: "hesaonellp@gmail.com",
      mailtoUrl,
      formattedSummary: {
        fullName,
        companyName,
        workEmail,
        phoneNumber,
        serviceCategory,
        facilitySector,
        message,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to process inquiry. Please email hesaonellp@gmail.com directly." },
      { status: 500 }
    );
  }
}
