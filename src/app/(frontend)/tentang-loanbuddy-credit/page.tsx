import { getPageContent, getRequestLanguage } from "@/lib/content";
import TentangLoanbuddyCreditClient from "./TentangLoanbuddyCreditClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("tentang-loanbuddy-credit", language);
  return <TentangLoanbuddyCreditClient initialContent={{ language, data }} />;
}
