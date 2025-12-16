import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const languages = ["en", "pt", "fr"];

export default getRequestConfig(async ({ locale }) => {
  const lng = locale ?? "pt";
  
  if (!languages.includes(lng)) notFound();
  
  return {
    locale: lng,
    messages: (await import(`../../messages/${lng}.json`)).default, 
  };
});