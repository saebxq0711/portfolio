"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Code2, Layers, Zap } from "lucide-react"

const skills = [
  { name: "HTML", level: 95, category: "Frontend", icon: "🌐" },
  { name: "CSS", level: 90, category: "Frontend", icon: "🎨" },
  { name: "JavaScript", level: 88, category: "Frontend", icon: "⚡" },
  { name: "React.js", level: 85, category: "Frontend", icon: "⚛️" },
  { name: "PHP", level: 82, category: "Backend", icon: "🐘" },
  { name: "Python", level: 80, category: "Backend", icon: "🐍" },
  { name: "Laravel", level: 78, category: "Backend", icon: "🔥" },
  { name: "MySQL", level: 85, category: "Database", icon: "🗄️" },
  { name: "Git/GitHub", level: 88, category: "Tools", icon: "📚" },
  { name: "Bootstrap", level: 90, category: "Frontend", icon: "💜" },
  { name: "VS Code", level: 95, category: "Tools", icon: "💻" },
  { name: "SQL", level: 83, category: "Database", icon: "📊" },
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
    <section id="habilidades" className="py-32 bg-black-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white-primary/20 to-transparent animate-parallax"></div>
        <div
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-white-primary/10 to-transparent animate-parallax"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative z-10">
        {/* Section Title - Ultra dinámico */}
        <div className="text-center mb-24">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Code2 className="w-8 h-8 text-white-primary animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-gray-tertiary font-mono text-xl tracking-wider">SKILLS.ARRAY</span>
              <Layers className="w-8 h-8 text-white-primary animate-pulse" />
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
              <span className="text-white-primary">MIS</span>{" "}
              <span className="gradient-text block lg:inline font-mono">HABILIDADES</span>
            </h2>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-20 h-0.5 bg-white-primary"></div>
              <Zap className="w-6 h-6 text-white-primary animate-bounce" />
              <div className="w-20 h-0.5 bg-white-primary"></div>
            </div>

            <p className="text-gray-tertiary text-xl max-w-4xl mx-auto leading-relaxed font-light">
              ESTAS SON LAS TECNOLOGÍAS Y HERRAMIENTAS CON LAS QUE TRABAJO PARA CREAR{" "}
              <span className="text-white-primary font-semibold">SOLUCIONES WEB COMPLETAS</span> Y EFICIENTES.
            </p>
          </div>
        </div>

        {/* Skills Grid - Layout masonry */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-black-secondary border border-gray-primary/20 p-8 hover-lift hover-glow transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-3"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                height: index % 3 === 0 ? "200px" : index % 2 === 0 ? "180px" : "160px",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:animate-bounce">{skill.icon}</span>
                  <h3 className="text-white-primary font-black text-xl tracking-wide">{skill.name}</h3>
                </div>
                <span className="text-white-primary font-black text-2xl font-mono">{skill.level}%</span>
              </div>

              {/* Animated progress bar */}
              <div className="relative mb-4">
                <div className="w-full bg-black-tertiary h-3 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-white-primary transition-all duration-2000 ease-out rounded-full relative"
                    style={{ width: animatedSkills[index] ? `${skill.level}%` : "0%" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white-primary/50 to-white-primary animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-tertiary text-sm font-mono tracking-widest">{skill.category}</span>
                <div className="w-2 h-2 bg-white-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories - Layout hexagonal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "FRONTEND",
              techs: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
              icon: "🎨",
              description: "Interfaces modernas",
            },
            {
              title: "BACKEND",
              techs: ["PHP", "Python", "Laravel"],
              icon: "⚙️",
              description: "Lógica del servidor",
            },
            {
              title: "DATABASE",
              techs: ["MySQL", "SQL"],
              icon: "🗄️",
              description: "Gestión de datos",
            },
            {
              title: "HERRAMIENTAS",
              techs: ["Git", "GitHub", "VS Code"],
              icon: "🛠️",
              description: "Flujo de trabajo",
            },
          ].map((category, index) => (
            <div
              key={category.title}
              className={`bg-black-secondary border border-gray-primary/20 p-8 text-center hover-lift hover-glow transition-all duration-700 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${index * 200 + 1000}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">{category.icon}</div>
              <h3 className="text-xl font-black text-white-primary mb-3 tracking-widest">{category.title}</h3>
              <p className="text-gray-secondary text-sm mb-6 font-mono">{category.description}</p>

              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`bg-black-tertiary text-white-primary px-3 py-2 text-xs font-medium tracking-wide border border-gray-primary/20 hover:border-white-primary/40 transition-all duration-300 ${
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
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-4 bg-black-secondary border border-white-primary/20 px-8 py-4 hover-glow">
            <span className="text-gray-tertiary font-mono">READY_TO_CODE = </span>
            <span className="text-white-primary font-black">TRUE</span>
            <div className="w-2 h-2 bg-white-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
