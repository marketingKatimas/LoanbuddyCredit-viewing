import { getPageContent, getRequestLanguage } from "@/lib/content";
import PembayaranClient from "./PembayaranClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("pembayaran", language);
  return <PembayaranClient initialContent={{ language, data }} />;
}
