import { getPageContent, getRequestLanguage } from "@/lib/content";
import HubungiKamiClient from "./HubungiKamiClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("hubungi-kami", language);
  return <HubungiKamiClient initialContent={{ language, data }} />;
}
