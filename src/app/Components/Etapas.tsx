import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Etapas() {
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
  ]

  return (
    <section
      className="py-12 bg-white text-[#020202]"
      id="etapas"
      style={{ marginTop: "20px" }}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          {E("h2")}
        </h2>

        <p className="text-sm sm:text-base text-center mb-6">
          {E("description")}
        </p>

        <div className="grid grid-cols-3 smd:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 md:gap-8 gap-4 sm:gap-6">
          {logos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex justify-center items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                loading="lazy"
                className="
                  sm:w-[70px] sm:h-[70px]
                  md:w-[80px] md:h-[80px]
                  lg:w-[90px] lg:h-[90px]
                  rounded-full
                  hover:scale-110
                  transition-transform
                  duration-300
                  bg-gray-50
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
