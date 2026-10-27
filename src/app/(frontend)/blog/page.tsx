import { getBlogPosts, getPageContent, getRequestLanguage } from "@/lib/content";
import BlogClient from "./BlogClient";

export default async function Page() {
  const language = await getRequestLanguage();
  const [data, posts] = await Promise.all([getPageContent("blog", language), getBlogPosts(language)]);
  return <BlogClient initialContent={{ language, data }} initialPosts={{ language, data: posts }} />;
}
