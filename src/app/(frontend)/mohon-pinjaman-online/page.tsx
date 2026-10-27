import { getPageContent, getRequestLanguage } from "@/lib/content";
import MohonPinjamanOnlineClient from "./MohonPinjamanOnlineClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("mohon-pinjaman-online", language);
  return <MohonPinjamanOnlineClient initialContent={{ language, data }} />;
}
