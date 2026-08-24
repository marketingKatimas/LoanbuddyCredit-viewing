import { NextResponse } from "next/server";

/**
 * LOCAL DEVELOPMENT API ROUTE
 * Endpoint: POST /api/apply
 * 
 * Description:
 * Handles loan application form submissions locally during development.
 * Generates a mock applicationId, logs submitted application details to local console,
 * and attempts to save to local MongoDB if configured.
 */

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: Record<string, any> = {};

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value;
      });
    } else if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const text = await request.text();
      const params = new URLSearchParams(text);
      params.forEach((value, key) => {
        data[key] = value;
      });
    }

    const mockApplicationId = `LBC-LOCAL-${Date.now()}`;

    console.log("========================================");
    console.log("[LOCAL API /api/apply] Received Loan Application:");
    console.log("Application ID:", mockApplicationId);
    console.log("Name:", data.name);
    console.log("Age:", data.age);
    console.log("Phone:", data.phone);
    console.log("Email:", data.email);
    console.log("Sector:", data.sector);
    console.log("Amount:", data.amount);
    console.log("Branch:", data.branch);
    console.log("Salary (Gross):", data.salary);
    console.log("Net Salary:", data.netSalary || data.leadsWhere);
    console.log("Submitted At:", new Date().toISOString());
    console.log("========================================");

    // Optional Local MongoDB insertion if MONGODB_URI or DATABASE_URI is configured
    const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URI;
    if (mongoUri) {
      try {
        const { MongoClient } = await import("mongodb");
        const client = new MongoClient(mongoUri);
        await client.connect();
        const db = client.db();
        await db.collection("applies").insertOne({
          applicationId: mockApplicationId,
          ...data,
          createdAt: new Date(),
        });
        await client.close();
        console.log("[LOCAL API /api/apply] Saved application to local MongoDB successfully.");
      } catch (dbErr) {
        console.warn("[LOCAL API /api/apply] Could not save to local MongoDB (using console logging fallback):", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Permohonan berjaya diterima (Mod Pembangunan Tempatan).",
      applicationId: mockApplicationId,
      receivedData: data,
    });
  } catch (error) {
    console.error("[LOCAL API /api/apply] Error processing local application:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memproses permohonan secara tempatan." },
      { status: 500 }
    );
  }
}
