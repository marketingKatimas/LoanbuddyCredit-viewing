import { getPageContent, getRequestLanguage } from "@/lib/content";
import PinjamanKoperasiClient from "./PinjamanKoperasiClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("pinjaman-koperasi", language);
  return <PinjamanKoperasiClient initialContent={{ language, data }} />;
}
