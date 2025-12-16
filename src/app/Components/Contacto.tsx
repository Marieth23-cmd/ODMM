 import { useTranslations } from "next-intl"

export default function Contacto(){
     const  c= useTranslations("Contacto")

 return(<section
  id="contact"
  className="py-16 px-0 bg-[#f9f9f7] text-[#101211]"
>
  <div className="max-w-[1100px] mx-auto px-[18px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    
    <div className="animated-on-scroll">

      <h2 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.9rem]  font-semibold mb-3 text-[#1a1c18]">
       {c("title")}
      </h2>

      <p className="text-gray-600 max-w-[520px] leading-relaxed mb-6">
       {c("subtitle")}
      </p>

      {/* Cartão de informações */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-[#c7a052]/15 to-[#c7a052]/5 border border-[#c7a052]/30 shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-[#1a1c18]"> {c("Divs.title")}</h3>
        <ul className="text-gray-700 text-[0.95rem]">
          <li className="mb-2"><strong> {c("Divs.li1")}</strong> geral@mangais-resort.ao</li>
          <li className="mb-2"><strong> {c("Divs.li2")}</strong> 244 926 073 970</li>
          <li><strong> {c("Divs.subli.localizacao")}</strong>{c("Divs.subli.descricao")}</li>
        </ul>
      </div>

    </div>

   
    <form className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] animated-on-scroll delay-md">

      <h3 className="text-lg font-semibold mb-4 text-[#1c1e1b]">
     {c("Form.title")}
      </h3>

      <div className="grid grid-cols-1 gap-4">

        <div>
          <label className="text-xs font-semibold text-[#4b504b]"> {c("Form.label4")}</label>
          <input required type="text" placeholder="Nome da empresa"
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40" />
        </div>

        <div>
          <label  className="text-xs font-semibold text-[#4b504b]"> {c("Form.label1")}</label>
          <input required type="text" placeholder="Seu nome"
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#4b504b]"> {c("Form.label2")}</label>
          <input required type="email" placeholder="voce@empresa.com"
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#4b504b]"> {c("Form.label3")}</label>
          <textarea required rows={4} placeholder="Tipo de evento, público, período, local..."
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40"></textarea>
        </div>

      </div>

      <button
    type="submit"
    className="w-full mt-4 py-3 px-5 bg-yellow-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-yellow-700 active:scale-[0.98]"
  >
    {c("Button")}
  </button>

    </form>

  </div>
</section>
)   




}