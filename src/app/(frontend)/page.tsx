import { getPageContent, getRequestLanguage } from "@/lib/content";
import HomeClient from "./HomeClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("home", language);
  return <HomeClient initialContent={{ language, data }} />;
}
