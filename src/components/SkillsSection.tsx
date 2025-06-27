"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Code2, Layers, Zap } from "lucide-react"

const skills = [
  {
    name: "HTML",
    level: 90,
    category: "Frontend",
    icon: "fab fa-html5",
    color: "text-orange-500",
  },
  {
    name: "CSS",
    level: 85,
    category: "Frontend",
    icon: "fab fa-css3-alt",
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    level: 70,
    category: "Frontend",
    icon: "fab fa-js-square",
    color: "text-yellow-400",
  },
  {
    name: "React.js",
    level: 70,
    category: "Frontend",
    icon: "fab fa-react",
    color: "text-cyan-400",
  },
  {
    name: "PHP",
    level: 95,
    category: "Backend",
    icon: "fab fa-php",
    color: "text-purple-400",
  },
  {
    name: "Python",
    level: 80,
    category: "Backend",
    icon: "fab fa-python",
    color: "text-yellow-300",
  },
  {
    name: "Laravel",
    level: 78,
    category: "Backend",
    icon: "fab fa-laravel",
    color: "text-red-500",
  },
  {
    name: "MySQL",
    level: 90,
    category: "Database",
    icon: "fas fa-database",
    color: "text-blue-600",
  },
  {
    name: "Git/GitHub",
    level: 95,
    category: "Tools",
    icon: "fab fa-github",
    color: "text-gray-400",
  },
  {
    name: "Bootstrap",
    level: 90,
    category: "Frontend",
    icon: "fab fa-bootstrap",
    color: "text-purple-500",
  },
  {
    name: "VS Code",
    level: 95,
    category: "Tools",
    icon: "fas fa-code",
    color: "text-blue-400",
  },
]

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>(new Array(skills.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Staggered animation for skills
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("habilidades")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white-primary/20 to-transparent animate-parallax"></div>
        <div
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-white-primary/10 to-transparent animate-parallax"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title - Ultra dinámico */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center space-x-4 mb-6 md:mb-8">
              <Code2
                className="w-6 h-6 md:w-8 md:h-8 text-white-primary animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-gray-tertiary font-mono text-base md:text-xl tracking-wider">SKILLS.ARRAY</span>
              <Layers className="w-6 h-6 md:w-8 md:h-8 text-white-primary animate-pulse" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-none">
              <span className="text-white-primary">MIS</span>{" "}
              <span className="gradient-text block sm:inline font-mono">HABILIDADES</span>
            </h2>

            <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-6 md:mb-8">
              <div className="w-12 md:w-20 h-0.5 bg-white-primary"></div>
              <Zap className="w-4 h-4 md:w-6 md:h-6 text-white-primary animate-bounce" />
              <div className="w-12 md:w-20 h-0.5 bg-white-primary"></div>
            </div>

            <p className="text-gray-tertiary text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light px-4">
              ESTAS SON LAS TECNOLOGÍAS Y HERRAMIENTAS CON LAS QUE TRABAJO PARA CREAR{" "}
              <span className="text-white-primary font-semibold">SOLUCIONES WEB COMPLETAS</span> Y EFICIENTES.
            </p>
          </div>
        </div>

        {/* Skills Grid - Layout responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-20 lg:mb-24">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-black-secondary border border-gray-primary/20 p-4 sm:p-6 md:p-8 hover-lift hover-glow transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-3"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                minHeight: "140px",
              }}
            >
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <i
                    className={`${skill.icon} ${skill.color} text-xl md:text-2xl group-hover:animate-bounce transition-transform duration-300`}
                  ></i>
                  <h3 className="text-white-primary font-black text-base sm:text-lg md:text-xl tracking-wide">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-white-primary font-black text-lg sm:text-xl md:text-2xl font-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Animated progress bar */}
              <div className="relative mb-3 md:mb-4">
                <div className="w-full bg-black-tertiary h-2 md:h-3 rounded-full overflow-hidden">
                  <div
                    className="h-2 md:h-3 bg-white-primary transition-all duration-2000 ease-out rounded-full relative"
                    style={{ width: animatedSkills[index] ? `${skill.level}%` : "0%" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white-primary/50 to-white-primary animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-tertiary text-xs md:text-sm font-mono tracking-widest">
                  {skill.category}
                </span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories - Layout responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "FRONTEND",
              techs: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
              icon: "fas fa-palette",
              color: "text-blue-400",
              description: "Interfaces modernas",
            },
            {
              title: "BACKEND",
              techs: ["PHP", "Python", "Laravel"],
              icon: "fas fa-server",
              color: "text-green-400",
              description: "Lógica del servidor",
            },
            {
              title: "DATABASE",
              techs: ["MySQL"],
              icon: "fas fa-database",
              color: "text-purple-400",
              description: "Gestión de datos",
            },
            {
              title: "HERRAMIENTAS",
              techs: ["Git", "GitHub", "VS Code"],
              icon: "fas fa-tools",
              color: "text-orange-400",
              description: "Flujo de trabajo",
            },
          ].map((category, index) => (
            <div
              key={category.title}
              className={`bg-black-secondary border border-gray-primary/20 p-4 sm:p-6 md:p-8 text-center hover-lift hover-glow transition-all duration-700 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${index * 200 + 1000}ms` }}
            >
              <div className="mb-3 md:mb-4 group-hover:animate-bounce transition-transform duration-300 flex justify-center">
                <i className={`${category.icon} ${category.color} text-2xl sm:text-3xl md:text-4xl`}></i>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-black text-white-primary mb-2 md:mb-3 tracking-widest">
                {category.title}
              </h3>
              <p className="text-gray-secondary text-xs sm:text-sm mb-4 md:mb-6 font-mono">{category.description}</p>

              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`bg-black-tertiary text-white-primary px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium tracking-wide border border-gray-primary/20 hover:border-white-primary/40 transition-all duration-300 ${
                      animatedSkills[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                    style={{ transitionDelay: `${techIndex * 100 + 1500}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-3 md:space-x-4 bg-black-secondary border border-white-primary/20 px-4 sm:px-6 md:px-8 py-3 md:py-4 hover-glow">
            <span className="text-gray-tertiary font-mono text-sm md:text-base">READY_TO_CODE = </span>
            <span className="text-white-primary font-black text-sm md:text-base">TRUE</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
