import { getPageContent, getRequestLanguage } from "@/lib/content";
import PinjamanPeribadiClient from "./PinjamanPeribadiClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("perkhidmatan-kami", language);
  return <PinjamanPeribadiClient initialContent={{ language, data }} />;
}
