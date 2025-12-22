import { useTranslations } from "next-intl"
import { FaTrophy, FaUsers, FaBullseye } from "react-icons/fa"

export default function Formatos(){
  const F = useTranslations("Formatos")
  
  const formats = [
    {
      icon: FaTrophy,
      title: F("title2"),
      subtitle: F("subtitle2"),
      color: "from-amber-600 to-yellow-600"
    },
    {
      icon: FaUsers,
      title: F("title3"),
      subtitle: F("subtitle3"),
      color: "from-yellow-600 to-amber-600"
    },
    {
      icon: FaBullseye,
      title: F("title4"),
      subtitle: F("subtitle4"),
      color: "from-amber-600 to-yellow-600"
    }
  ]
  
  return(
    <section className="py-12 px-0 text-[#101211] bg-gradient-to-br from-gray-50 to-white" id="formats">
      <div className="max-w-[1100px] mx-auto px-[18px]">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            {F("title1")}
          </h2>
          <p className="m-0 text-gray-600 max-w-[620px] mx-auto text-[0.95rem]">
            {F("subtitle1")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((format, index) => {
            const Icon = format.icon
            return (
              <article 
                key={index}
                className="group relative p-6 rounded-xl bg-white border-2 border-yellow-600/20 shadow-[0_4px_12px_rgba(202,138,4,0.08)] hover:shadow-[0_8px_24px_rgba(202,138,4,0.15)] transition-all duration-300 hover:-translate-y-1 animated-on-scroll"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Borda gradiente no hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-600/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Ícone com gradiente */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${format.color} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="m-0 mb-3 text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {format.title}
                  </h3>
                  
                  <p className="m-0 text-[0.92rem] text-gray-600 leading-relaxed">
                    {format.subtitle}
                  </p>
                </div>
                
              
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-600/5 to-transparent rounded-bl-full" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}