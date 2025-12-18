import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import Providers from "./providers";

import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Props = {
  children: ReactNode;
  params:{ locale: string };
};

 export default async function LocaleLayout({children , params}:Props){
  
  const{locale}=params;  
  console.log("Locale ativo:", locale);
  const messages= await getMessages({locale})

  console.log("Keys carregadas:", Object.keys(messages));

  return(
    <html lang={locale}>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
          
        </NextIntlClientProvider>
        
      </body>
    </html>
  )
 }