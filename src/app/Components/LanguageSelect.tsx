'use client'

import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";

export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState("pt");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "pt", label: "Português", flag: "https://flagcdn.com/w40/pt.png" },
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  ];

  const selected = languages.find((l) => l.code === lang);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
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
        <div className="absolute mt-2 w-16 bg-gray-500 rounded-md shadow-lg z-10">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false); 
                const parts = pathname.split("/");
                parts[1] = l.code;
                const newPath = parts.join("/");
                router.replace(newPath);
              }}
              className={`flex items-center justify-center w-full px-3 py-2 hover:bg-gray-700 rounded-md transition-colors ${
                l.code === lang ? 'bg-gray-700' : ''
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
