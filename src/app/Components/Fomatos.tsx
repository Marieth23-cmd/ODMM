
import { useTranslations } from "next-intl"
export default function Formatos(){


 const F= useTranslations("Formatos")

    return(
        
<section className="py-12 px-0 text-[#101211] bg-[#f4f5f4]" id="formats">
  <div className="max-w-[1100px] mx-auto px-[18px]">
    <div className="mb-[26px]">
      <h2 className="m-0 mb-2 text-[1.4rem]">{F("title1")}</h2>
      <p className="m-0 text-gray-600 max-w-[520px]">
       {F("subtitle1")}
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4">
      <article className="p-4 pb-[18px] rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.08)] animated-on-scroll">
        <h3 className="m-0 mb-2 text-base">{F("title2")}</h3>
        <p className="m-0 text-[0.92rem] text-gray-600">
          {F("subtitle2")}
        </p>
      </article>
      <article className="p-4 pb-[18px] rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.08)] animated-on-scroll delay-sm">
        <h3 className="m-0 mb-2 text-base">{F("title3")}</h3>
        <p className="m-0 text-[0.92rem] text-gray-600">
           {F("subtitle3")}
        </p>
      </article>
      <article className="p-4 pb-[18px] rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.08)] animated-on-scroll delay-md">
        <h3 className="m-0 mb-2 text-base">{F("title4")}</h3>
        <p className="m-0 text-[0.92rem] text-gray-600">
          {F("subtitle4")}
        </p>
      </article>
    </div>
  </div>
</section>
    )
}