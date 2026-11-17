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

    // Server-side field presence validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!workEmail || typeof workEmail !== "string" || !workEmail.trim()) {
      return NextResponse.json(
        { error: "Corporate Email is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Technical Scope & Facility Context is required." },
        { status: 400 }
      );
    }

    // Email format regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid corporate email address." },
        { status: 400 }
      );
    }

    const sanitizedName = fullName.trim();
    const sanitizedEmail = workEmail.trim().toLowerCase();
    const sanitizedPhone = (phoneNumber || "Not provided").trim();
    const sanitizedCompany = (companyName || "Confidential Facility").trim();
    const sanitizedCategory = (serviceCategory || "Process Safety & Risk Studies").trim();
    const sanitizedSector = (facilitySector || "Industrial Facility").trim();
    const sanitizedMessage = message.trim();

    const timestamp = new Date().toISOString();
    const referenceId = `HSE-${Date.now().toString(36).toUpperCase()}`;

    const subject = encodeURIComponent(
      `[HESAONE Scope ${referenceId}] ${sanitizedCategory} - ${sanitizedCompany}`
    );

    const emailBody = encodeURIComponent(
      `HESAONE TECHNICAL ADVISORY INQUIRY\n` +
      `===================================\n` +
      `Reference ID: ${referenceId}\n` +
      `Date Logged:  ${timestamp}\n\n` +
      `1. CLIENT & FACILITY COORDINATES\n` +
      `---------------------------------\n` +
      `Contact Name:  ${sanitizedName}\n` +
      `Organization:  ${sanitizedCompany}\n` +
      `Corporate Email: ${sanitizedEmail}\n` +
      `Contact Phone: ${sanitizedPhone}\n\n` +
      `2. PRACTICE AREA & SECTOR\n` +
      `-------------------------\n` +
      `Discipline:    ${sanitizedCategory}\n` +
      `Industry Sector: ${sanitizedSector}\n\n` +
      `3. TECHNICAL SCOPE & FACILITY DETAILS\n` +
      `-------------------------------------\n` +
      `${sanitizedMessage}\n\n` +
      `===================================\n` +
      `Note: All drawings and communications governed under bilateral NDA.\n`
    );

    const mailtoUrl = `mailto:hesaonellp@gmail.com?subject=${subject}&body=${emailBody}`;

    // Optional direct email dispatch via Resend if environment variable is present
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
            from: "HESAONE Advisory <inquiries@hesaone.com>",
            to: ["hesaonellp@gmail.com"],
            reply_to: sanitizedEmail,
            subject: `[HESAONE Scope ${referenceId}] ${sanitizedCategory} - ${sanitizedCompany}`,
            text: decodeURIComponent(emailBody),
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            mode: "dispatched",
            referenceId,
            message: "Inquiry successfully transmitted to HESAONE engineering advisory.",
          });
        }
      } catch (err) {
        console.error("Resend API dispatch error, falling back to mailto", err);
      }
    }

    // Honest fallback: Provide structured mailto dispatch without pretending database storage
    return NextResponse.json({
      success: true,
      mode: "prepared",
      referenceId,
      recipient: "hesaonellp@gmail.com",
      mailtoUrl,
      formattedSummary: {
        referenceId,
        fullName: sanitizedName,
        companyName: sanitizedCompany,
        workEmail: sanitizedEmail,
        phoneNumber: sanitizedPhone,
        serviceCategory: sanitizedCategory,
        facilitySector: sanitizedSector,
        message: sanitizedMessage,
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
