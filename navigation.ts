// navigation.ts na raiz do projeto
import { createNavigation } from "next-intl/navigation";

const languages = ["en", "pt", "fr"]; // direto aqui

export const locales = languages;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
});
