import { getPageContent, getRequestLanguage } from "@/lib/content";
import SoalanLazimFaqClient from "./SoalanLazimFaqClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("soalan-lazim-faq", language);
  return <SoalanLazimFaqClient initialContent={{ language, data }} />;
}
