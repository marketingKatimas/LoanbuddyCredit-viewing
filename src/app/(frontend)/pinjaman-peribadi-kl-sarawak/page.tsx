import { getPageContent, getRequestLanguage } from "@/lib/content";
import PinjamanPeribadiKlSarawakClient from "./PinjamanPeribadiKlSarawakClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("pinjaman-peribadi", language);
  return <PinjamanPeribadiKlSarawakClient initialContent={{ language, data }} />;
}
