'use client'

import { useState } from "react";

export default function LanguageSelect() {
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
      {/* Botão que mostra a bandeira selecionada */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        <img 
          src={selected?.flag} 
          alt={selected?.label}
          className="w-8 h-6 object-cover rounded"
        />
      </button>

      {/* Menu dropdown - só aparece quando isOpen é true */}
      {isOpen && (
        <div className="absolute mt-2 w-16 bg-gray-500 rounded-md shadow-lg z-10">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false); // Fecha o menu após selecionar
              }}
              className={`flex items-center justify-center w-full px-3 py-2 hover:bg-gray-700 rounded-md transition-colors ${
                l.code === lang ? 'bg-gray-700' : ''
              }`}
              title={l.label} // Tooltip mostra o nome ao passar o mouse
            >
              <img 
                src={l.flag} 
                alt={l.label}
                className="w-8 h-6 object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}