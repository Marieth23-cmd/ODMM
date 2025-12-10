import { createNavigation } from "next-intl/navigation";
import { languages } from "@/constants/languages";

export const locales = languages;

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
  });
// na raiz do projecto navigation.ts