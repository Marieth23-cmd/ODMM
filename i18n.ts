import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { languages } from "@/Constants/languages";

 const locales= languages

export default getRequestConfig(async ({ locale }) => {
  const lng= locale?? "pt"

  if (!locales.includes(lng)) notFound();

  return {
    locale:lng,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
