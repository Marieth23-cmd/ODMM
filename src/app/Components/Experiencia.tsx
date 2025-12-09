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
              <h2 className="m-0 mb-2 text-lg sm:text-xl md:text-2xl">{E("title")}</h2>
              <p className="mt-0 mb-3.5 text-sm sm:text-base md:text-lg  text-gray-300">
                {E("subtitle")}
              </p>
            </div>
        
            <div className="grid lg:grid-cols-4 grid-cols-2  sm:items-center md:items-center  gap-3 justify-between animated-on-scroll delay-md sm:gap-4 ">
        
              <div className="py-2 px-2.5 lg:py-3 lg:px-3.5  text-green-600 bg-white rounded-full h-36 w-36 sm:w-28 sm:h-32 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <BiTrophy className="mx-auto mb-2 text-2xl lg:text-4xl"/>
                <span className="block text-2xl  sm:text-3xl md:text-3xl font-semibold">7</span>
                <span className="text-xs sm:text-sm md:text-xl"> {E("Victórias")}</span>
              </div>
        
              <div className=" py-2 px-2.5 lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-28 sm:h-32 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <FaBriefcase className="mx-auto mb-2 text-2xl lg:text-4xl"/>
                <span className="block text-2xl  sm:text-3xl md:text-3xl font-semibold">50+</span>
                <span className="text-xs sm:text-sm  md:text-xl">{E("Campeonatos")}</span>
              </div>
        
              <div className="py-2 px-2.5  lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-32 sm:h-28 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <FaUsers className="mx-auto mb-2 text-2xl lg:text-4xl"/>
                <span className="block text-2xl  sm:text-3xl md:text-3xl font-semibold">158</span>
                <span className="text-xs sm:text-sm md:text-xl"> {E("Membros")}</span>
              </div>
        
              <div className="py-2 px-2.5 lg:py-3 lg:px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-32 sm:h-28 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
                <FaBuilding className="mx-auto mb-2 text-2xl lg:text-4xl"/>
                <span className="block text-2xl  sm:text-3xl md:text-3xl font-semibold">9</span>
                <span className="text-xs sm:text-sm md:text-xl">{E("Empresas")}</span>
              </div>
        
            </div>
        
          </div>
        </section>
        
    )
}