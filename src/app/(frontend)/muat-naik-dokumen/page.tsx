import { getPageContent, getRequestLanguage } from "@/lib/content";
import MuatNaikDokumenClient from "./MuatNaikDokumenClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("mohon-pinjaman-online", language);
  return <MuatNaikDokumenClient initialContent={{ language, data }} />;
}
