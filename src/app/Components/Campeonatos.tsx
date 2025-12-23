import { useTranslations } from "next-intl"
import { FaFutbol, FaChartLine, FaHandshake } from "react-icons/fa"

export default function Campeonatos(){
  const C = useTranslations("Campeonatos")

  const features = [
    {
      icon: FaFutbol,
      title: C("title2"),
      subtitle: C("subtitle2")
    },
    {
      icon: FaChartLine,
      title: C("title3"),
      subtitle: C("subtitle3")
    },
    {
      icon: FaHandshake,
      title: C("title4"),
      subtitle: C("subtitle4")
    }
  ]

  return(
    <section className="py-12 bg-gradient-to-br from-[#50bb74] via-[#296d40] to-[#050806] text-[#f6f7f5]" id="about">
      <div className="max-w-[1100px] mx-auto px-[18px] grid grid-cols-1 gap-6">
        <div className="animated-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{C("title1")}</h2>
          <p className="mt-0 mb-3.5 text-[0.93rem] text-gray-300">
            {C("subtitles.subtitle1")}
          </p>
          <p className="mt-0 mb-3.5 text-[0.93rem] text-gray-300">
            {C("subtitles.subtitle2")}
          </p>
        </div>
        
        <div className="grid gap-3.5 animated-on-scroll delay-md">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="py-3 px-3.5 rounded-lg bg-black/16 hover:bg-black/25 transition-colors border border-white/[0.04] flex items-start gap-3"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 shadow-md">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="m-0 mb-1.5 text-base font-semibold">{feature.title}</h3>
                  <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}