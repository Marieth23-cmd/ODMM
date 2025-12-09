 import { useTranslations } from "next-intl"

export default function Campeonatos(){

 const C= useTranslations("Campeonatos")

    return(
         <section className="py-12 bg-gradient-to-br from-[#50bb74] via-[#296d40] to-[#050806] text-[#f6f7f5]" id="about">
  <div className="max-w-[1100px] mx-auto px-[18px] grid grid-cols-1 gap-6">
    <div className="animated-on-scroll">
      <h2 className="text-2xl font-bold mb-4">{C("title1")}</h2>
      <p className="mt-0 mb-3.5 text-[0.93rem] text-gray-300">
       {C("subtitles.title1")}
      </p>
      <p className="mt-0 mb-3.5 text-[0.93rem] text-gray-300">
         {C("subtitles.title2")}
      </p>
    </div>
    <div className="grid gap-3.5 animated-on-scroll delay-md">
      <div className="py-3 px-3.5 rounded-lg bg-black/16 border border-white/[0.04]">
        <h3 className="m-0 mb-1.5 text-base font-semibold">{C("title2")}</h3>
        <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
         {C("subtitle2")}
        </p>
      </div>
      <div className="py-3 px-3.5 rounded-lg bg-black/16 border border-white/[0.04]">
        <h3 className="m-0 mb-1.5 text-base font-semibold">{C("title3")}</h3>
        <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
          {C("subtitle3")}
        </p>
      </div>
      <div className="py-3 px-3.5 rounded-lg bg-black/16 border border-white/[0.04]">
        <h3 className="m-0 mb-1.5 text-base font-semibold">{C("title4")}</h3>
        <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
          {C("subtitle4")}
        </p>
      </div>
    </div>
  </div>
</section>

    )
}