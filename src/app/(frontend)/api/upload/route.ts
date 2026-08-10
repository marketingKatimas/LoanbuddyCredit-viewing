import { NextResponse } from "next/server";

/**
 * LOCAL DEVELOPMENT API ROUTE
 * Endpoint: POST /api/upload
 * 
 * Description:
 * Handles document upload submissions locally during development.
 * Logs submitted application ID and uploaded file details to local console.
 */

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const applicationId = formData.get("applicationId");
    const myKad = formData.get("myKad") as File | null;
    const supportingDocument = formData.get("supportingDocument") as File | null;
    const token = formData.get("token");
    const pageUrl = formData.get("pageUrl");

    console.log("========================================");
    console.log("[LOCAL API /api/upload] Received Document Upload:");
    console.log("Application ID:", applicationId);
    console.log("reCAPTCHA Token:", token ? "(Present)" : "(Missing)");
    console.log("Page URL:", pageUrl);
    
    if (myKad && typeof myKad === "object" && "name" in myKad && myKad.name) {
      console.log("MyKad File:", myKad.name, `(${myKad.size} bytes, type: ${myKad.type})`);
    } else {
      console.log("MyKad File: None");
    }

    if (supportingDocument && typeof supportingDocument === "object" && "name" in supportingDocument && supportingDocument.name) {
      console.log("Supporting Document File:", supportingDocument.name, `(${supportingDocument.size} bytes, type: ${supportingDocument.type})`);
    } else {
      console.log("Supporting Document File: None");
    }
    console.log("Submitted At:", new Date().toISOString());
    console.log("========================================");

    return NextResponse.json({
      success: true,
      message: "Dokumen berjaya dimuat naik (Mod Pembangunan Tempatan).",
      applicationId,
    });
  } catch (error) {
    console.error("[LOCAL API /api/upload] Error processing document upload:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memproses muat naik dokumen secara tempatan." },
      { status: 500 }
    );
  }
}
