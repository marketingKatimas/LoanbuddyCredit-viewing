import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

/**
 * LOCAL DEVELOPMENT API ROUTE
 * Endpoint: POST /api/upload
 * 
 * Description:
 * Handles document upload submissions locally during development.
 * Saves uploaded files into local 'uploads' directory and stores upload details
 * in local MongoDB database (Studio 3T: leads-local).
 */

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const applicationId = (formData.get("applicationId") as string) || `LBC-LOCAL-${Date.now()}`;
    const myKad = formData.get("myKad") as File | null;
    const supportingDocument = formData.get("supportingDocument") as File | null;
    const token = formData.get("token");
    const pageUrl = formData.get("pageUrl");

    console.log("========================================");
    console.log("[LOCAL API /api/upload] Received Document Upload:");
    console.log("Application ID:", applicationId);
    console.log("reCAPTCHA Token:", token ? "(Present)" : "(Missing)");
    console.log("Page URL:", pageUrl);

    // Target upload directory: root project folder / uploads
    const uploadDir = path.join(process.cwd(), "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    let myKadMeta: any = null;
    let supportingDocMeta: any = null;

    // Handle MyKad File Upload
    if (myKad && typeof myKad === "object" && "name" in myKad && myKad.name && myKad.size > 0) {
      const sanitizedName = myKad.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filename = `${applicationId}_mykad_${Date.now()}_${sanitizedName}`;
      const filePath = path.join(uploadDir, filename);

      const arrayBuffer = await myKad.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(filePath, buffer);

      myKadMeta = {
        originalName: myKad.name,
        filename,
        path: `uploads/${filename}`,
        size: myKad.size,
        type: myKad.type,
        uploadedAt: new Date(),
      };
      console.log(`MyKad File saved to disk: ${filePath} (${myKad.size} bytes)`);
    } else {
      console.log("MyKad File: None");
    }

    // Handle Supporting Document Upload
    if (supportingDocument && typeof supportingDocument === "object" && "name" in supportingDocument && supportingDocument.name && supportingDocument.size > 0) {
      const sanitizedName = supportingDocument.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filename = `${applicationId}_support_${Date.now()}_${sanitizedName}`;
      const filePath = path.join(uploadDir, filename);

      const arrayBuffer = await supportingDocument.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(filePath, buffer);

      supportingDocMeta = {
        originalName: supportingDocument.name,
        filename,
        path: `uploads/${filename}`,
        size: supportingDocument.size,
        type: supportingDocument.type,
        uploadedAt: new Date(),
      };
      console.log(`Supporting Document saved to disk: ${filePath} (${supportingDocument.size} bytes)`);
    } else {
      console.log("Supporting Document File: None");
    }

    // Save upload metadata to local MongoDB (Studio 3T database)
    const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URI || "mongodb://localhost:27017/leads-local";
    if (mongoUri) {
      try {
        const { MongoClient } = await import("mongodb");
        const client = new MongoClient(mongoUri);
        await client.connect();
        const db = client.db();

        const uploadRecord = {
          applicationId,
          myKad: myKadMeta,
          supportingDocument: supportingDocMeta,
          pageUrl,
          createdAt: new Date(),
        };

        // Insert into 'uploads' collection
        await db.collection("uploads").insertOne(uploadRecord);

        // Update corresponding application in 'applies' collection if exists
        await db.collection("applies").updateOne(
          { applicationId },
          {
            $set: {
              ...(myKadMeta ? { myKad: myKadMeta } : {}),
              ...(supportingDocMeta ? { supportingDocument: supportingDocMeta } : {}),
              updatedAt: new Date(),
            },
          }
        );

        await client.close();
        console.log("[LOCAL API /api/upload] Successfully saved upload record to local MongoDB.");
      } catch (dbErr) {
        console.warn("[LOCAL API /api/upload] Could not save to local MongoDB:", dbErr);
      }
    }

    console.log("Submitted At:", new Date().toISOString());
    console.log("========================================");

    return NextResponse.json({
      success: true,
      message: "Dokumen berjaya dimuat naik dan disimpan secara tempatan.",
      applicationId,
      savedFiles: {
        myKad: myKadMeta?.filename || null,
        supportingDocument: supportingDocMeta?.filename || null,
      },
    });
  } catch (error) {
    console.error("[LOCAL API /api/upload] Error processing document upload:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memproses muat naik dokumen secara tempatan." },
      { status: 500 }
    );
  }
}
