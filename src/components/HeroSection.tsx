"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ChevronDown, Code2, Zap, Sparkles } from "lucide-react"

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "DESARROLLADOR WEB FULL-STACK"

  useEffect(() => {
    setIsVisible(true)

    // Typing animation
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-black-primary overflow-hidden"
    >
      {/* Background Elements - Más dinámicos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white-primary/10 morphing-shape floating"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white-primary/5 rotate-45 floating-delayed"></div>
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-white-primary/5 rounded-full floating"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white-primary/10"></div>
            ))}
          </div>
        </div>

        {/* Animated dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white-primary rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-8xl mx-auto px-8 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-12">
            {/* Greeting */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              
              <br />
              <br />
              <br />
              <br />

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
                <span className="block text-white-primary animate-fadeInUp stagger-1">Hola,</span>
                <span className="block gradient-text animate-fadeInUp stagger-2">soy</span>
                <span className="block text-white-primary animate-fadeInUp stagger-3 font-mono tracking-tighter">
                  Juan Aranda
                </span>
              </h1>
            </div>

            {/* Typing effect subtitle */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl text-gray-tertiary font-light mb-4">
                <span className="font-mono border-r-2 border-white-primary animate-blink">{typedText}</span>
              </div>
              <p className="text-xl text-gray-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                CREANDO EXPERIENCIAS DIGITALES EXCEPCIONALES CON CÓDIGO LIMPIO Y DISEÑO INNOVADOR
              </p>
            </div>

            {/* CTA Buttons - Rediseñados */}
            <div
              className={`flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <button
                onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative bg-white-primary text-black-primary px-12 py-6 font-black tracking-widest text-lg transition-all duration-500 hover:bg-transparent hover:text-white-primary border-2 border-white-primary hover-lift overflow-hidden min-w-[280px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Zap className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  VER PROYECTOS
                </span>
                <div className="absolute inset-0 bg-white-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              </button>

              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative border-2 border-white-primary text-white-primary hover:bg-white-primary hover:text-black-primary px-12 py-6 font-black tracking-widest text-lg transition-all duration-500 hover-tilt min-w-[280px]"
              >
                <span className="flex items-center justify-center">
                  <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                  CONOCE MÁS
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div
              className={`transition-all duration-1500 delay-700 ${isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"}`}
            >
              {/* Main visual container */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Rotating border */}
                <div
                  className="absolute inset-0 border-2 border-white-primary/20 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-4 border border-white-primary/10 animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                ></div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <Code2 className="w-24 h-24 mx-auto text-white-primary animate-glow" />
                    <div className="space-y-2">
                      <div className="text-4xl font-black text-white-primary">3+</div>
                      <div className="text-gray-tertiary font-mono text-sm tracking-widest">AÑOS</div>
                    </div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-8 -left-8 bg-black-secondary border border-white-primary/20 p-4 floating">
                  <div className="text-2xl font-black text-white-primary">50+</div>
                  <div className="text-gray-tertiary text-xs font-mono">PROYECTOS</div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-black-secondary border border-white-primary/20 p-4 floating-delayed">
                  <div className="text-2xl font-black text-white-primary">12+</div>
                  <div className="text-gray-tertiary text-xs font-mono">TECNOLOGÍAS</div>
                </div>

                <div className="absolute top-1/2 -right-16 bg-black-secondary border border-white-primary/20 p-4 floating">
                  <div className="text-2xl font-black text-white-primary">100%</div>
                  <div className="text-gray-tertiary text-xs font-mono">DEDICACIÓN</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Rediseñado */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-tertiary hover:text-white-primary transition-all duration-500 hover-lift"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
