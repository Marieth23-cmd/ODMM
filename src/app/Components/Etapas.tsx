import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Etapas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const E = useTranslations("Etapas")
    
    const logos = [
        { src: "/images/Caetano1.png", alt: "Caetano" },
        { src: "/images/Aliança2.png", alt: "Aliança" },
        { src: "/images/Realvitur3.png", alt: "Realvitur" },
        { src: "/images/Prudencial3.png", alt: "Prudencial" },
        { src: "/images/Itsall5.png", alt: "Itsall" },
        { src: "/images/Lucrum6.png", alt: "Lucrum" },
        { src: "/images/Spie7.png", alt: "Spie" },
        { src: "/images/CWoermann8x.png", alt: "C.Woermann" },
        { src: "/images/Bfa9.png", alt: "BFA" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % logos.length);
        }, 3000); // Troca a cada 1 segundos

        return () => clearInterval(interval);
    }, [logos.length]);

    const getVisibleLogos = () => {
        const visible = [];
        for (let i = 0; i < 9; i++) {
            visible.push(logos[(currentIndex + i) % logos.length]);
        }
        return visible;
    };

    return (
        <section 
            className="py-12 bg-gradient-to-br from-[#50bb74] via-[#296d40] to-[#050806] text-[#f6f7f5]" 
            id="etapas" 
            style={{marginTop: "20px"}}
        >
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                    {E("h2")}
                </h2>
                <p className=" text-sm  sm:text-base text-center mb-6">
                     {E("description")}
                </p>
                
                <div className="grid grid-cols-3 smd:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 md:gap-8 gap-4 sm:gap-6 overflow-hidden">
                    {getVisibleLogos().map((logo, index) => (
                        <div
                            key={`${logo.alt}-${index}`}
                            className="flex justify-center items-center transition-all duration-700 ease-in-out"
                            style={{
                                animation: 'slideIn 0.7s ease-in-out',
                                opacity: 1
                            }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                loading="lazy"
                                className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]
                                 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                <style>{`
                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateX(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @media(max-width:480px){
                    .slideIn{transform:none !important}}
 `}
                
                </style>
            </div>
        </section>
    );
}