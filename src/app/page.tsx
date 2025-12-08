"use client";
import { useEffect } from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ODMMImage from "./Components/OdmmImage";
import Etapas from "./Components/Etapas";
import { BiTrophy } from "react-icons/bi";
import { FaBriefcase, FaBuilding ,FaUsers } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    // Declarar anchorLinks no escopo correto
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    // Tipar link explicitamente
    anchorLinks.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        if (!targetId) return;

        const target = document.getElementById(targetId);
        if (!target) return;

        const headerOffset = 60;
        const rect = target.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      });
    });

    // Cleanup do useEffect
    return () => {
      anchorLinks.forEach((link) => {
        link.replaceWith(link.cloneNode(true)); // Remove event listeners
      });
    };
  }, []);

 useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observa todos os elementos com a classe animated-on-scroll
    const animatedElements = document.querySelectorAll('.animated-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);




  return (
    <div >

      <Header />


      <main>

        <Hero />

        <Etapas />

        <ODMMImage />

        
       <section className="py-12 bg-gradient-to-br from-[#50bb74] via-[#296d40] to-[#050806] text-[#f6f7f5]" id="about">
  <div className="max-w-[1100px] mx-auto px-[18px] grid grid-cols-1 gap-6">
    <div className="animated-on-scroll">
      <h2 className="text-2xl font-bold mb-4">Campeonatos de golf sob medida para ODMM</h2>
      <p className="mt-0 mb-3.5 text-[0.93rem] text-gray-300">
        Atuamos exclusivamente com eventos corporativos, conectando marcas
        a clientes, parceiros e executivos em experiências de alto impacto
        e baixo atrito.
      </p>
      <p className="mt-0 mb-3.5 text-[0.93rem] text-gray-300">
        Do planejamento ao pós-evento, nossa equipe cuida de tudo para
        que sua empresa foque no que importa: relacionamento e negócios.
      </p>
    </div>
    <div className="grid gap-3.5 animated-on-scroll delay-md">
      <div className="py-3 px-3.5 rounded-lg bg-black/16 border border-white/[0.04]">
        <h3 className="m-0 mb-1.5 text-base font-semibold">Networking qualificado</h3>
        <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
          Reúna decisores em um ambiente propício para conversas
          estratégicas e acordos relevantes.
        </p>
      </div>
      <div className="py-3 px-3.5 rounded-lg bg-black/16 border border-white/[0.04]">
        <h3 className="m-0 mb-1.5 text-base font-semibold">Experiência premium</h3>
        <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
          Campo, catering, brindes e staff alinhados ao padrão da sua
          marca.
        </p>
      </div>
      <div className="py-3 px-3.5 rounded-lg bg-black/16 border border-white/[0.04]">
        <h3 className="m-0 mb-1.5 text-base font-semibold">Organização completa</h3>
        <p className="m-0 text-sm text-[rgba(230,235,230,0.84)]">
          Do convite ao relatório final, entregamos um fluxo profissional,
          claro e previsível.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-12 px-0 text-[#101211] bg-[#f4f5f4]" id="formats">
  <div className="max-w-[1100px] mx-auto px-[18px]">
    <div className="mb-[26px]">
      <h2 className="m-0 mb-2 text-[1.4rem]">Formatos pensados para diferentes objetivos</h2>
      <p className="m-0 text-gray-600 max-w-[520px]">
        Escolha o modelo de torneio ideal para o momento da sua empresa e
        do seu relacionamento com o mercado.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4">
      <article className="p-4 pb-[18px] rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.08)] animated-on-scroll">
        <h3 className="m-0 mb-2 text-base">Torneios para Clientes</h3>
        <p className="m-0 text-[0.92rem] text-gray-600">
          Eventos exclusivos para convidar clientes estratégicos, reforçar
          parcerias e lançar soluções em um ambiente diferenciado.
        </p>
      </article>
      <article className="p-4 pb-[18px] rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.08)] animated-on-scroll delay-sm">
        <h3 className="m-0 mb-2 text-base">Torneios Internos</h3>
        <p className="m-0 text-[0.92rem] text-gray-600">
          Focados em equipes e líderes, fortalecendo cultura, engajamento
          e reconhecimento interno.
        </p>
      </article>
      <article className="p-4 pb-[18px] rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.08)] animated-on-scroll delay-md">
        <h3 className="m-0 mb-2 text-base">Eventos C-level & VIP</h3>
        <p className="m-0 text-[0.92rem] text-gray-600">
          Experiências sob medida para alta liderança, com roteiros
          personalizados e máxima discrição.
        </p>
      </article>
    </div>
  </div>
</section>


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
  <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 gap-6">

    <div className="animated-on-scroll">
      <h2 className="m-0 mb-2 text-lg sm:text-xl md:text-2xl">Experiência construída em campo</h2>
      <p className="mt-0 mb-3.5 text-sm sm:text-base md:text-lg  text-gray-300">
        Somamos anos de atuação em eventos corporativos de alto padrão,
        com foco em consistência e previsibilidade para cada cliente.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row  flex-wrap gap-3 justify-between animated-on-scroll delay-md">

      <div className="py-3 px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-32 sm:h-32 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
        <BiTrophy className="mx-auto mb-2 text-4xl"/>
        <span className="block text-2xl  sm:text-3xl md:text-4xl font-semibold">7</span>
        <span className="text-xs sm:text-sm md:text-4xl">Victórias</span>
      </div>

      <div className="py-3 px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-32 sm:h-32 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
        <FaBriefcase className="mx-auto mb-2 text-4xl"/>
        <span className="block text-2xl  sm:text-3xl md:text-4xl font-semibold">50+</span>
        <span className="text-xs sm:text-sm  md:text-4xl">Campeonatos</span>
      </div>

      <div className="py-3 px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-32 sm:h-32 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
        <FaUsers className="mx-auto mb-2 text-4xl"/>
        <span className="block text-2xl  sm:text-3xl md:text-4xl font-semibold">158</span>
        <span className="text-xs sm:text-sm md:text-4xl">Total de Membros</span>
      </div>

      <div className="py-3 px-3.5 text-green-600 bg-white rounded-full h-36 w-36 sm:w-32 sm:h-32 md:w-40 md:h-40 text-center bg-gradient-to-br from-[rgba(199,160,82,0.1)] to-[rgba(199,160,82,0.02)] border border-[rgba(199,160,82,0.28)]">
        <FaBuilding className="mx-auto mb-2 text-4xl"/>
        <span className="block text-2xl  sm:text-3xl md:text-4xl font-semibold">9</span>
        <span className="text-xs sm:text-sm md:text-4xl">Empresas</span>
      </div>

    </div>

  </div>
</section>



<section
  id="contact"
  className="py-16 px-0 bg-[#f9f9f7] text-[#101211]"
>
  <div className="max-w-[1100px] mx-auto px-[18px] grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    {/* COLUNA ESQUERDA */}
    <div className="animated-on-scroll">

      <h2 className="text-[1.9rem] font-semibold mb-3 text-[#1a1c18]">
       A sua empresa merece um campeonato à altura da sua marca.
      </h2>

      <p className="text-gray-600 max-w-[520px] leading-relaxed mb-6">
       Conte-nos o que pretende organizar e receba uma proposta exclusiva,
        pensada para valorizar a sua empresa e oferecer uma experiência desportiva de alto impacto.
      </p>

      {/* Cartão de informações */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-[#c7a052]/15 to-[#c7a052]/5 border border-[#c7a052]/30 shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-[#1a1c18]">Contactos</h3>
        <ul className="text-gray-700 text-[0.95rem]">
          <li className="mb-2"><strong>E-mail:</strong> geral@mangais-resort.ao</li>
          <li className="mb-2"><strong>Telefone:</strong> 244 926 073 970</li>
          <li><strong>Localização:</strong> Barra do Kwanza, Luanda - Angola</li>
        </ul>
      </div>

    </div>

    {/* COLUNA DIREITA — FORMULÁRIO */}
    <form className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] animated-on-scroll delay-md">

      <h3 className="text-lg font-semibold mb-4 text-[#1c1e1b]">
        Enviar Solicitação
      </h3>

      <div className="grid grid-cols-1 gap-4">

        <div>
          <label className="text-xs font-semibold text-[#4b504b]">Empresa</label>
          <input type="text" placeholder="Nome da empresa"
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#4b504b]">Nome</label>
          <input type="text" placeholder="Seu nome"
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#4b504b]">E-mail corporativo</label>
          <input type="email" placeholder="voce@empresa.com"
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#4b504b]">Resumo do evento</label>
          <textarea rows={4} placeholder="Tipo de evento, público, período, local..."
            className="mt-1 w-full rounded-lg border border-gray-300/60 py-2 px-3 text-sm outline-none transition focus:border-[#c7a052] focus:ring-1 focus:ring-[#c7a052]/40"></textarea>
        </div>

      </div>

      <button
        type="submit"
        className="w-full mt-4 py-3 px-5 bg-yellow-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-yellow-500 active:scale-[0.98]"
      >
        Solicitar Contato
      </button>

    </form>

  </div>
</section>



      </main>
      <Footer />
    </div>
  );
}