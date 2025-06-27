"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Code, Database, Globe, Award, Gamepad2, User, Briefcase, Heart } from "lucide-react"

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title - Más dramático */}
        <div className="text-center mb-24">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <User className="w-8 h-8 text-white-primary animate-pulse" />
              <span className="text-gray-tertiary font-mono text-xl tracking-wider">ABOUT_ME.JSON</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-none">
              <span className="text-white-primary">SOBRE</span>{" "}
              <span className="gradient-text block lg:inline">MÍ</span>
            </h2>

            <div className="flex justify-center items-center space-x-4">
              <div className="w-16 h-0.5 bg-white-primary"></div>
              <div className="w-2 h-2 bg-white-primary rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-white-primary"></div>
            </div>
          </div>
        </div>

        {/* Main Content - Layout asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Profile Image - Posición flotante */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div
              className={`transition-all duration-1500 ${isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-6"}`}
            >
              <div className="relative">
                {/* Floating frame */}
                <div className="absolute -inset-8 border border-white-primary/20 floating"></div>
                <div className="absolute -inset-4 border border-white-primary/10 floating-delayed"></div>

                {/* Main image container */}
                <div className="relative w-full max-w-md mx-auto">
                  <img
                    src="https://via.placeholder.com/500x600/000000/ffffff?text=TU+FOTO"
                    alt="Tu foto de perfil"
                    className="w-full h-auto object-cover border-4 border-white-primary shadow-2xl hover-tilt transition-all duration-700"
                  />

                  {/* Overlay effects */}
                  <div className="absolute inset-0 border-4 border-white-primary bg-gradient-to-tr from-black-primary/30 to-transparent"></div>

                  {/* Floating badges */}
                  <div className="absolute -top-6 -right-6 bg-white-primary text-black-primary px-4 py-2 font-bold text-sm floating">
                    FULL-STACK
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-black-primary border-2 border-white-primary text-white-primary px-4 py-2 font-bold text-sm floating-delayed">
                    DEVELOPER
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Más dinámico */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12 order-1 lg:order-2">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h3 className="text-4xl md:text-5xl font-black text-white-primary leading-tight mb-8">
                DESARROLLADOR WEB
                <br />
                <span className="gradient-text font-mono">FULL-STACK</span>
              </h3>

              <div className="space-y-8 text-gray-tertiary text-lg leading-relaxed">
                <p className="relative pl-8">
                  <span className="absolute left-0 top-0 text-white-primary font-mono text-2xl">"</span>
                  Soy un desarrollador web apasionado con experiencia en el desarrollo tanto del{" "}
                  <span className="text-white-primary font-semibold">frontend</span> como del{" "}
                  <span className="text-white-primary font-semibold">backend</span>. Me especializo en crear
                  aplicaciones web modernas, escalables y centradas en el usuario.
                  <span className="absolute right-0 bottom-0 text-white-primary font-mono text-2xl">"</span>
                </p>

                <p>
                  Mi enfoque se basa en escribir <span className="text-white-primary font-semibold">código limpio</span>
                  , implementar las mejores prácticas y mantenerme actualizado con las últimas tecnologías del
                  desarrollo web.
                </p>
              </div>
            </div>

            {/* Skills Cards - Grid dinámico */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {[
                { Icon: Globe, title: "FRONTEND", desc: "React, JavaScript, CSS", color: "border-white-primary/30" },
                { Icon: Code, title: "BACKEND", desc: "PHP, Python, Laravel", color: "border-white-primary/20" },
                { Icon: Database, title: "DATABASE", desc: "MySQL, SQL", color: "border-white-primary/10" },
              ].map(({ Icon, title, desc, color }, index) => (
                <div
                  key={title}
                  className={`bg-black-tertiary border ${color} p-8 text-center hover-lift hover-glow transition-all duration-500 group stagger-${index + 1}`}
                >
                  <Icon className="w-12 h-12 text-white-primary mx-auto mb-6 group-hover:animate-bounce" />
                  <h4 className="font-black text-white-primary mb-3 tracking-widest text-lg">{title}</h4>
                  <p className="text-gray-tertiary text-sm font-mono">{desc}</p>
                </div>
              ))}
            </div>

            {/* Stats & Info - Layout horizontal */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-gray-primary/20 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {[
                { Icon: Award, text: "CERTIFICADO", subtext: "Profesional" },
                { Icon: Gamepad2, text: "GAMER", subtext: "Estrategia & Lógica" },
                { Icon: Heart, text: "PASSIONATE", subtext: "Code & Design" },
              ].map(({ Icon, text, subtext }, index) => (
                <div key={text} className={`flex flex-col items-center space-y-3 group stagger-${index + 1}`}>
                  <Icon className="w-8 h-8 text-white-primary group-hover:animate-pulse" />
                  <div className="text-center">
                    <div className="text-gray-tertiary font-bold tracking-wide">{text}</div>
                    <div className="text-gray-secondary text-sm font-mono">{subtext}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`pt-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <button className="group relative border-2 border-white-primary text-white-primary hover:bg-white-primary hover:text-black-primary px-8 py-4 font-bold tracking-widest transition-all duration-500 hover-lift">
                <span className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  TRABAJEMOS JUNTOS
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
