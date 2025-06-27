"use client"

import type React from "react"
import { useEffect, useState } from "react"
import {
  Code2,
  Layers,
  Zap,
  Globe,
  Palette,
  CloudLightningIcon as Lightning,
  Database,
  GitBranch,
  Terminal,
  Braces,
} from "lucide-react"

// Componentes de iconos personalizados para tecnologías específicas
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-400">
    <path
      fill="currentColor"
      d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.37 1.95c-1.47-.84-1.63-3.05-1.01-5.63C.98 14.93.15 13.69.15 12s.83-2.93 4.37-3.68C3.9 5.74 4.06 3.53 5.53 2.69c1.46-.84 3.45.12 5.37 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.5 12c.93 1.5 1.49 3.01 1.49 4.5c0 1.49-.56 3-1.49 4.5c-.93-1.5-1.49-3.01-1.49-4.5c0-1.49.56-3 1.49-4.5m-11 0c-.93 1.5-1.49 3.01-1.49 4.5c0 1.49.56 3 1.49 4.5c.93-1.5 1.49-3.01 1.49-4.5c0-1.49-.56-3-1.49-4.5"
    />
  </svg>
)

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-400">
    <path
      fill="currentColor"
      d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.297-.266.432-.652.432-1.173 0-.372-.107-.65-.323-.851-.219-.202-.538-.233-.78-.233zm-.296-2.122c.947 0 1.691.189 2.22.565.529.378.793.9.793 1.57 0 .805-.222 1.492-.666 2.059-.444.567-1.025.851-1.742.851H5.906l-.33 1.704h-1.1L5.610 8.085h1.104zm7.702 2.122h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.297-.266.432-.652.432-1.173 0-.372-.107-.65-.323-.851-.219-.202-.538-.233-.78-.233zm-.296-2.122c.947 0 1.691.189 2.22.565.529.378.793.9.793 1.57 0 .805-.222 1.492-.666 2.059-.444.567-1.025.851-1.742.851h-1.413l-.33 1.704h-1.1l1.134-5.749h1.104zM12 21C5.925 21 1 16.075 1 10S5.925-1 12-1s11 4.925 11 11-4.925 11-11 11zm0-20.5C6.201.5 1.5 5.201 1.5 11S6.201 21.5 12 21.5 22.5 16.799 22.5 11 17.799.5 12 .5z"
    />
  </svg>
)

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-400">
    <path
      fill="currentColor"
      d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.38.09-.5.25-.12.16-.18.38-.18.61 0 .22.06.44.18.61.12.16.3.25.5.25.18 0 .35-.09.46-.25.12-.17.18-.39.18-.61 0-.23-.06-.45-.18-.61a.58.58 0 0 0-.46-.25z"
    />
  </svg>
)

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-400">
    <path
      fill="currentColor"
      d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.027.014-.013.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.018.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.164 3.76 2.164 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.164-4.323 2.489-3.941 2.27z"
    />
  </svg>
)

const skills = [
  {
    name: "HTML",
    level: 95,
    category: "Frontend",
    icon: <Globe className="w-6 h-6 text-orange-400" />,
  },
  {
    name: "CSS",
    level: 90,
    category: "Frontend",
    icon: <Palette className="w-6 h-6 text-blue-400" />,
  },
  {
    name: "JavaScript",
    level: 88,
    category: "Frontend",
    icon: <Lightning className="w-6 h-6 text-yellow-400" />,
  },
  {
    name: "React.js",
    level: 85,
    category: "Frontend",
    icon: <ReactIcon />,
  },
  {
    name: "PHP",
    level: 82,
    category: "Backend",
    icon: <PHPIcon />,
  },
  {
    name: "Python",
    level: 80,
    category: "Backend",
    icon: <PythonIcon />,
  },
  {
    name: "Laravel",
    level: 78,
    category: "Backend",
    icon: <LaravelIcon />,
  },
  {
    name: "MySQL",
    level: 85,
    category: "Database",
    icon: <Database className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Git/GitHub",
    level: 88,
    category: "Tools",
    icon: <GitBranch className="w-6 h-6 text-gray-400" />,
  },
  {
    name: "Bootstrap",
    level: 90,
    category: "Frontend",
    icon: <Braces className="w-6 h-6 text-purple-500" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "Tools",
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
  },
  {
    name: "SQL",
    level: 83,
    category: "Database",
    icon: <Database className="w-6 h-6 text-green-400" />,
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
                  <div className="group-hover:animate-bounce transition-transform duration-300">{skill.icon}</div>
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
              icon: <Palette className="w-8 h-8 text-blue-400" />,
              description: "Interfaces modernas",
            },
            {
              title: "BACKEND",
              techs: ["PHP", "Python", "Laravel"],
              icon: <Code2 className="w-8 h-8 text-green-400" />,
              description: "Lógica del servidor",
            },
            {
              title: "DATABASE",
              techs: ["MySQL", "SQL"],
              icon: <Database className="w-8 h-8 text-purple-400" />,
              description: "Gestión de datos",
            },
            {
              title: "HERRAMIENTAS",
              techs: ["Git", "GitHub", "VS Code"],
              icon: <Terminal className="w-8 h-8 text-orange-400" />,
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
                {category.icon}
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
