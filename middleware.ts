// middleware.tsx na raiz do projeto
import createMiddleware from "next-intl/middleware";

const languages = ["en", "pt", "fr"]; // direto aqui

export default createMiddleware({
  locales: languages,
  defaultLocale: "pt",
});

export const config = {
  matcher: ["/", "/(pt|en|fr)/:path*"],
};
