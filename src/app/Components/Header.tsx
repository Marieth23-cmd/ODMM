'use client';

import LanguageSelect from "./LanguageSelect";


export default function Header() {

 const scrollTopTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
 }





    return (
        <header className="fixed left-0 right-0 top-0 z-20 backdrop-blur-lg bg-gradient-to-b from-gray-900/95 via-gray-900/40 to-transparent border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-5 py-3 flex items-center gap-3">
          <div className="text-lg font-semibold tracking-widest uppercase text-white">
            <img src="/images/oddm.png" alt="Logo" width={70} height={60} className=""/>
          </div>
          <nav className="hidden md:flex gap-5 text-sm ml-auto">
            <a href="#home" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300" onClick={scrollTopTop}>
              Início
            </a>
            <a href="#about" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              Sobre
            </a>
            <a href="#contact" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300 lg-hidden">
              Contacto
            </a>
            <a href="#eventos" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              Etapas
            </a>
            <div>
              <LanguageSelect/>
           
        </div>
          </nav> 
          <div className ="ml-auto gap-4 hidden  md:flex"> 
             <a href="#Tickets" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              Ingressos
            </a>
            <a href="#Entrar" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              Entrar
            </a>
        </div>   

       
        </div>
      </header>

    );
}