import {notFound} from "next/navigation";
import {getRequestConfig} from "next-intl/server";
import { languages } from "../Constants/languages";

const locales = languages;

export default getRequestConfig(async ({ locale }) => {
  
  if (!locales?.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
