'use client';
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";


import { FaBars } from "react-icons/fa";
import LanguageSelect from "./LanguageSelect";

import Image from "next/image";
export default function Header() {

   const h= useTranslations("Header")

  const [isMenuOpen, setIsMenuOpen] =useState(false);  
  const [open , setOpen]= useState (false);
  const boxeref=useRef<HTMLDivElement>(null)

 const handleClick = useCallback ((event:MouseEvent)=>{
  if(boxeref.current && !boxeref.current.contains(event.target as Node))
   setOpen (false);
 }, []);


useEffect(()=>{
  if(open){
    document.addEventListener("mousedown", handleClick);
  }else{
    document.removeEventListener("mousedown", handleClick);
  }
  
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, [open , handleClick]);


 const scrollTopTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
 }





    return (
        <header className=" fixed left-0 right-0 top-0 z-20 backdrop-blur-lg bg-gradient-to-b from-gray-900/95 via-gray-900/40 to-transparent border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-5 py-3 flex items-center gap-3 justify-between">
          <div className="text-lg font-semibold tracking-widest uppercase text-white">
            <Image src="/images/oddm.png" alt="Logo" width={70} height={60} className=""/>
          </div>
          <nav className="hidden md:flex gap-5 text-sm ml-auto">
            <a href="#home" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300" onClick={scrollTopTop}>
              {h("Inicio")}
            </a>
            <a href="#about" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              {h("Sobre")}
            </a>
            <a href="#contact" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300 lg-hidden">
              {h("Contacto")}
            </a>
            <a href="#eventos" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              {h("Etapas")}
            </a>
            <div>
              <LanguageSelect/>
           
        </div>
          </nav> 
          <div className ="ml-auto gap-4 hidden  md:flex"> 
             <a href="#Tickets" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              {h("Ingressos")}
            </a>
            <a href="#Entrar" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
             {h("Entar")}
            </a>
        </div>   
   
   <div className="lg:hidden">
            <FaBars className="text-white ml-auto mr-4 mb-2 cursor-pointer"
             onClick={()=>{ setIsMenuOpen(!isMenuOpen) ;
              setOpen(true)}}/>
            </div>
       </div>

       
            {isMenuOpen && open && (<div ref={boxeref} className=" lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white py-4 px-6 shadow-lg">
            <ul className=" flex flex-col gap-5 text-sm ml-auto">
               <a href="#home" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300" onClick={scrollTopTop}>
             {h("Inicio")}
            </a>
            <a href="#about" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              {h("Sobre")}
            </a>
            <a href="#contact" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300 lg-hidden">
              {h("Contacto")}
            </a>
            <a href="#eventos" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              {h("Etapas")}
            </a>
            
            
               <a href="#Tickets" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
              {h("Ingressos")}
            </a>
            <a href="#Entrar" className="text-white/90 no-underline py-1.5 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-all after:duration-300">
             {h("Entrar")} 
            </a>
             <LanguageSelect/>
        
            </ul>
          </div>)}
          
       
       
      </header>

    );
}