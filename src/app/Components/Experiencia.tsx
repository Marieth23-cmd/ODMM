import { BiTrophy } from "react-icons/bi";
import { FaBriefcase, FaBuilding ,FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Experiencia(){

    const E =useTranslations("Experiencia")


    return(
        
        
        <section
          id="experience"
          className="relative py-12 bg-cover bg-center text-[#f6f7f5]"
          style={{
            backgroundImage:
              "url('https://cualogolfresort.com.vn/Pic_new/20140402091911sangolf.JPG')",
            filter: "saturate(1.1)"
          }}
        >
        
          {/* OVERLAY ESCURO */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0 min-h-[400px] sm:min-h-[300px]"></div>
        
          {/* CONTEÚDO */}
          <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  md:grid-cols-1 gap-6">
        
            <div className="animated-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{E("title")}</h2>
              <p className="mt-0 mb-3.5 text-sm sm:text-base md:text-lg  text-gray-300">
                {E("subtitle")}
              </p>
            </div>
        
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 animated-on-scroll delay-md justify-items-center">
        
              <div className="flex flex-col items-center justify-center py-4 px-3 lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <BiTrophy className="mb-1 text-3xl sm:text-3xl lg:text-4xl"/>
                <span className="block text-2xl sm:text-3xl font-semibold">7</span>
                <span className="text-xs sm:text-sm md:text-base">{E("Victorias")}</span>
              </div>
        
              <div className="flex flex-col items-center justify-center py-4 px-3 lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <FaBriefcase className="mb-1 text-3xl sm:text-3xl lg:text-4xl"/>
                <span className="block text-2xl sm:text-3xl font-semibold">50+</span>
                <span className="text-xs sm:text-sm md:text-base">{E("Campeonatos")}</span>
              </div>
        
              <div className="flex flex-col items-center justify-center py-4 px-3 lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <FaUsers className="mb-1 text-3xl sm:text-3xl lg:text-4xl"/>
                <span className="block text-2xl sm:text-3xl font-semibold">158</span>
                <span className="text-xs sm:text-sm md:text-base">{E("Membros")}</span>
              </div>
        
              <div className="flex flex-col items-center justify-center py-4 px-3 lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <FaBuilding className="mb-1 text-3xl sm:text-3xl lg:text-4xl"/>
                <span className="block text-2xl sm:text-3xl font-semibold">9</span>
                <span className="text-xs sm:text-sm md:text-base">{E("Empresas")}</span>
              </div>
        
            </div>
          </div>
        </section>
        
    )
}