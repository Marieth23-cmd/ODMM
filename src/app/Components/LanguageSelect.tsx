'use client'

import { useState, useTransition } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from "next/image";

export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale(); // Pega o idioma atual do next-intl
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const languages = [
    { code: "pt", label: "Português", flag: "https://flagcdn.com/w40/pt.png" },
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  ];

  const selected = languages.find((l) => l.code === currentLocale);

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false);
    
    startTransition(() => {
      // Remove o locale atual do pathname e adiciona o novo
      const segments = pathname.split('/').filter(Boolean);
      
      // Se o primeiro segmento é um locale, substitui
      if (['pt', 'en', 'fr'].includes(segments[0])) {
        segments[0] = langCode;
      } else {
        // Se não tem locale no path, adiciona
        segments.unshift(langCode);
      }
      
      const newPath = `/${segments.join('/')}`;
      router.replace(newPath);
    });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
        disabled={isPending}
      >
        <Image 
          src={selected?.flag || ""} 
          alt={selected?.label || ""} 
          width={32} 
          height={24} 
          className="rounded"
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-16 bg-gray-800 rounded-md shadow-lg z-10 border border-gray-700">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLanguageChange(l.code)}
              disabled={isPending}
              className={`flex items-center justify-center w-full px-3 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors disabled:opacity-50 ${
                l.code === currentLocale ? 'bg-gray-700 ring-2 ring-yellow-600' : ''
              }`}
              title={l.label}
            >
              <Image 
                src={l.flag} 
                alt={l.label} 
                width={32} 
                height={24} 
                className="rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}