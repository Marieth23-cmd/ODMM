'use client';
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const images = [
  "https://i.pinimg.com/originals/f2/56/fa/f256fa53f4a71faeafdc7d83ece05548.jpg",
  "https://media.istockphoto.com/id/1362712664/es/foto/hombre-asi%C3%A1tico-jugando-al-golf-en-el-campo-en-verano.jpg?s=612x612&w=0&k=20&c=P9U2Zswap3SbaPyz-VKnwpd1fwNIdQyS2jy8JvRwRWQ=",
  "https://media.istockphoto.com/id/490424598/es/foto/padre-con-hijo-en-el-campo-de-golf.jpg?s=612x612&w=0&k=20&c=mv_lxaOBIpyG8qz63vCoTmtuMs95md2QQLkHEoRrKIg=",
  "https://media.istockphoto.com/id/1402029641/es/foto/panorama-del-campo-de-golf-con-un-cielo-precioso-vista-panor%C3%A1mica-del-campo-de-golf-en-turqu%C3%ADa.jpg?s=612x612&w=0&k=20&c=neKHOha95dj-i2pVAGzn1wxn5Z2FqEW2TBrvElDRPFQ=",
  "https://media.istockphoto.com/id/1445593235/es/foto/mini-palos-de-golf-y-bolas-en-putting-green.jpg?s=612x612&w=0&k=20&c=z7p1TCjBHZwpWg1iM-xlwmKdCEgOzy__xbk4eeqUQBA="
];

export default function Hero() {
  const t = useTranslations("Hero");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <div
        key={currentIndex}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-[640px] mx-auto px-5 sm:px-6 md:px-8 text-center text-white ">
        <h1 
          className="text-4xl md:text-5xl lg:text-[2.6rem] font-bold mb-3 opacity-0 animate-slide-up"
          key={`title-${currentIndex}`}
        >
          {t("title")}
        </h1>
        <p 
          className="mb-5 text-base lg:text-base opacity-0 animate-slide-up delay-150"
          key={`subtitle-${currentIndex}`}
        >
          {t("subtitle")}
        </p>
        <div className="flex gap-3 justify-center flex-wrap opacity-0 animate-slide-up delay-300">
          <a 
            href="#contact" 
            className="px-5 cursor-pointer py-2.5 rounded-full bg-yellow-600 text-gray-900 font-semibold shadow-xl hover:bg-yellow-500 transition-all duration-300"
          >
            {t("buttons.planNext")}
          </a>
          <a 
            href="#about" 
            className="cursor-pointer px-5 py-2.5 rounded-full border border-yellow-600 text-yellow-600 hover:text-yellow-500 transition-all duration-300"
          >
            {t("buttons.seeFormats")}
          </a>
        </div>
      </div>

      {/* Animações com Tailwind */}
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.6s forwards; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
