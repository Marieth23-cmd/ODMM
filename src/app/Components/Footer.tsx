 import { useTranslations } from "next-intl"

 
 export default function Footer() {
   const f= useTranslations("Footer")
    return(
         <footer className="bg-[#020403] text-[rgba(230,_235,_230,_0.7)]">
      <div className="flex flex-wrap max-w-[1100px] justify-between mx-auto pt-2 px-5 pb-3 text-sm sm:text-xs">

        <span> {f("title")}</span>
        <span>{f("subtitle")}</span>
      </div>
    </footer>
    )
 }