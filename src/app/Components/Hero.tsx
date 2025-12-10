import { useTranslations } from "next-intl";

 
 export default function Hero() {

  const t= useTranslations("Hero")
    return (
            <div>

              
                  
      <section id="hero" className="relative min-h-screen text-white flex items-stretch justify-center pt-16 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/95 z-10"></div>
  
  <div className="relative z-10 flex-1 flex items-center">
    <div className="max-w-[640px] mx-auto px-5 pb-9 sm:px-6 md:px-8">
      
      <h1 className="text-4xl md:text-5xl lg:text-[2.6rem] leading-tight m-0 mb-3 font-bold">
      {t("title")}
      </h1>
      
      
      <p className="m-0 mb-5 text-base lg:text-base text-gray-200/90">
      {t("subtitle")}
      </p>
      
      <div className="flex gap-3 items-center flex-wrap">
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border-none text-sm font-semibold bg-yellow-600 text-gray-900 cursor-pointer no-underline shadow-xl transition-all duration-200 hover:-transition-transform hover:shadow-2xl hover:bg-yellow-500"
        >
         {t("buttons.planNext")}
        </a>
        <a 
          href="#about" 
          className="text-sm text-yellow-600 no-underline px-5 py-2.5  hover:text-yellow-500  rounded-full  lg:mt-0 mt-2 block border-solid border-[1px] border-yellow-600"
        >
         {t("buttons.seeFormats")}
        </a>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://i.pinimg.com/originals/f2/56/fa/f256fa53f4a71faeafdc7d83ece05548.jpg')",
      filter: "saturate(1.1)"
    }}
  ></div>
</section>
            </div>

    )
}