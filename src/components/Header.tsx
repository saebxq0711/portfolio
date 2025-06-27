"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Code2,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-black-primary/80 glass-effect border-b border-gray-primary/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* Logo - Más dinámico */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <Code2 className="w-8 h-8 text-white-primary group-hover:animate-spin transition-all duration-500" />
              <div className="absolute inset-0 w-8 h-8 border border-white-primary/20 rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl md:text-3xl font-black text-white-primary">
              <span className="text-gray-tertiary">{"<"}</span>
              <span className="gradient-text font-mono tracking-tighter">
                JUAN.ARANDA
              </span>
              <span className="text-gray-tertiary">{"/>"}</span>
            </div>
          </div>

          {/* Desktop Navigation - Rediseñado */}
          <nav className="hidden lg:flex items-center space-x-16">
            {[
              { name: "INICIO", id: "inicio" },
              { name: "HABILIDADES", id: "habilidades" },
              { name: "PROYECTOS", id: "proyectos" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-gray-tertiary hover:text-white-primary transition-all duration-500 font-medium tracking-widest text-sm border-animate group stagger-${
                  index + 1
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white-primary transition-all duration-500 group-hover:w-full"></div>
              </button>
            ))}

            {/* CV Button - Más llamativo */}
            <a
              href="/cv/Hoja_de_vida_Juan_Aranda.pdf"
              download
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative bg-transparent text-white-primary px-8 py-4 font-bold tracking-widest text-sm transition-all duration-700 hover:text-black-primary border-2 border-white-primary hover-lift group overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  DESCARGAR CV
                </span>
                <div className="absolute inset-0 bg-white-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></div>
              </button>
            </a>

            {/* Social Icons - Flotantes */}
            <div className="flex items-center space-x-6">
              {[
                { Icon: Github, href: "https://github.com/saebxq0711" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/sebastian-aranda-26448535b" },
                { Icon: MessageCircle, href: "https://wa.me/3187523586" },
                { Icon: Mail, href: "mailto:jsebasaranda2007@hotmail.com" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-tertiary hover:text-white-primary transition-all duration-500 hover-lift hover-glow floating stagger-${
                    index + 1
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button - Animado */}
          <button
            className="lg:hidden text-white-primary hover:text-gray-tertiary transition-all duration-300 hover-lift"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-8 h-8">
              {isMenuOpen ? (
                <X className="w-8 h-8 animate-rotateIn" />
              ) : (
                <Menu className="w-8 h-8 animate-scaleIn" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu - Rediseñado */}
        {isMenuOpen && (
          <div className="lg:hidden mt-8 pb-8 border-t border-gray-primary/30 animate-fadeInDown">
            <nav className="flex flex-col space-y-6 mt-6">
              {[
                { name: "INICIO", id: "inicio" },
                { name: "HABILIDADES", id: "habilidades" },
                { name: "PROYECTOS", id: "proyectos" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-tertiary hover:text-white-primary transition-all duration-500 text-left font-medium tracking-widest border-animate stagger-${
                    index + 1
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button className="relative bg-transparent text-white-primary px-6 py-3 font-bold tracking-widest w-full sm:w-fit flex items-center justify-center hover:text-black-primary border-2 border-white-primary transition-all duration-700 ease-in-out stagger-4 group overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-3" />
                  DESCARGAR CV
                </span>
                <div className="absolute inset-0 bg-white-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></div>
              </button>

              <div className="flex items-center space-x-8 pt-6">
                {[
                  { Icon: Github, href: "https://github.com/saebxq0711" },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/sebastian-aranda-26448535b",
                  },
                  { Icon: MessageCircle, href: "https://wa.me/3187523586" },
                  { Icon: Mail, href: "mailto:jsebasaranda2007@hotmail.com" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-tertiary hover:text-white-primary transition-all duration-500 hover-lift stagger-${
                      index + 5
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
