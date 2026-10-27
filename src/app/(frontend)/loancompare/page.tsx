import { getPageContent, getRequestLanguage } from "@/lib/content";
import LoanCompareClient from "./LoanCompareClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const data = await getPageContent("loan-compare", language);
  return <LoanCompareClient initialContent={{ language, data }} />;
}
