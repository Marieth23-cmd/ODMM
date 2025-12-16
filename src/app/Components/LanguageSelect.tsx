'use client'


import { useState, useTransition, useEffect } from "react";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";

export default function LanguageSelect() {
  const serverLocale = useLocale(); // locale do servidor
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState(serverLocale); // ← Estado local

  const languages = [
    { code: "pt", label: "Português", flag: "https://flagcdn.com/w40/pt.png" },
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  ];

  // Sincroniza com o locale do servidor
  useEffect(() => {
    setCurrentLocale(serverLocale);
  }, [serverLocale]);

  // Extrai o locale da URL como fallback
  useEffect(() => {
    const match = pathname.match(/^\/(pt|en|fr)/);
    if (match) {
      setCurrentLocale(match[1]);
    }
  }, [pathname]);

  const selected = languages.find((l) => l.code === currentLocale);
const handleLanguageChange = (newLocale: string) => {
  if (newLocale === currentLocale) {
    setIsOpen(false);
    return;
  }

  setIsOpen(false);
  setCurrentLocale(newLocale);

  startTransition(() => {
    const segments = pathname.split('/').filter(Boolean); // ["pt", "pagina"]
    
    // Substitui o idioma
    if (["pt","en","fr"].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = '/' + segments.join('/');

    router.push(newPath); // ⚡ Isso recarrega a página e carrega o JSON correto
  });
};


  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.language-select-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left language-select-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
        disabled={isPending}
        aria-label={`Idioma: ${selected?.label || currentLocale}`}
      >
        {selected ? (
          <div className="flex items-center gap-2">
            <Image 
              src={selected.flag} 
              alt={selected.label}
              width={32} 
              height={24} 
              className="rounded"
            />
            <span className="text-sm hidden sm:inline">{selected.label}</span>
          </div>
        ) : (
          <span>🌐 {currentLocale.toUpperCase()}</span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-2 mt-2 w-auto p-4 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-700">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLanguageChange(l.code)}
              disabled={isPending}
              className={`flex items-center gap-1 w-full px-6 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors disabled:opacity-50 ${
                l.code === currentLocale ? 'bg-gray-700 ring-1 ring-yellow-600' : ''
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
              <span className="text-sm">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}