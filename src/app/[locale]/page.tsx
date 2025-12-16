"use client";
import { useEffect } from "react";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ODMMImage from "../Components/OdmmImage";
import Etapas from "../Components/Etapas";
import Contacto from "../Components/Contacto";
import Experiencia from "../Components/Experiencia";
import Formatos from "../Components/Fomatos";
import Campeonatos from "../Components/Campeonatos";


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
        link.replaceWith(link.cloneNode(true)); 
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

        
          <Campeonatos/>

            <Formatos/>

              <Experiencia/>

                  <Contacto/>


      </main>
      <Footer />
    </div>
  );
}