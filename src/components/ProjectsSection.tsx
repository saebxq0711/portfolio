"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ExternalLink, Github, Calendar, Star, Code, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "TeamTalks",
    description:
      "Plataforma educativa desarrollada con PHP nativo, con una interfaz de usuario moderna e intuitiva.",
    image: "/img/teamtalks.png",
    technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/EdierMoyano/TeamTalks_Beta.git",
    liveUrl: "https://teamtalks.com.co",
    year: "2025",
    featured: true,
    status: "DEV",
    views: "1.0K",
  },
  // {
  //   id: 2,
  //   title: "TASK MANAGEMENT APP",
  //   description:
  //     "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, desarrollada con React y Python.",
  //   image: "https://via.placeholder.com/600x400/000000/ffffff?text=TASK+MANAGER",
  //   technologies: ["React", "Python", "SQL", "CSS"],
  //   githubUrl: "https://github.com/tu-usuario/proyecto2",
  //   liveUrl: "https://tu-proyecto2.com",
  //   year: "2024",
  //   featured: false,
  //   status: "BETA",
  //   views: "1.8K",
  // },
]

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("proyectos")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="proyectos" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black-secondary relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="border border-white-primary/20 animate-pulse"
              style={{ animationDelay: `${i * 50}ms`, animationDuration: "3s" }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title - Más impactante */}
        <div className="text-center mb-24">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Code className="w-8 h-8 text-white-primary animate-pulse" />
              <span className="text-gray-tertiary font-mono text-xl tracking-wider">PROJECTS.SHOWCASE</span>
              <Star className="w-8 h-8 text-white-primary animate-spin" style={{ animationDuration: "4s" }} />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-none">
              <span className="text-white-primary">MIS</span>{" "}
              <span className="gradient-text block lg:inline font-mono">PROYECTOS</span>
            </h2>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-24 h-0.5 bg-white-primary"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white-primary rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-white-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white-primary rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="w-24 h-0.5 bg-white-primary"></div>
            </div>

            <p className="text-gray-tertiary text-xl max-w-4xl mx-auto leading-relaxed font-light">
              AQUÍ PUEDES VER ALGUNOS DE LOS PROYECTOS EN LOS QUE HE TRABAJADO, DESDE{" "}
              <span className="text-white-primary font-semibold">APLICACIONES WEB COMPLETAS</span> HASTA HERRAMIENTAS
              ESPECIALIZADAS.
            </p>
          </div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => {
            const isLarge = project.featured
            const colSpan = isLarge ? "lg:col-span-8" : "lg:col-span-4"
            const mdColSpan = "md:col-span-1"

            return (
              <div
                key={project.id}
                className={`${mdColSpan} ${colSpan} group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-1"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="bg-black-tertiary border border-gray-primary/20 overflow-hidden hover-lift hover-glow transition-all duration-700 h-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        isLarge ? "h-48 sm:h-64 md:h-80" : "h-48 sm:h-56 md:h-64"
                      }`}
                    />

                    {/* Overlay with actions */}
                    <div
                      className={`absolute inset-0 bg-black-primary/80 transition-all duration-500 flex items-center justify-center ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex space-x-6">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white-primary text-black-primary p-4 hover:bg-gray-tertiary hover:text-white-primary transition-all duration-300 hover-lift group/btn"
                        >
                          <ExternalLink className="w-6 h-6 group-hover/btn:animate-bounce" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-white-primary text-white-primary hover:bg-white-primary hover:text-black-primary p-4 transition-all duration-300 hover-lift group/btn"
                        >
                          <Github className="w-6 h-6 group-hover/btn:animate-spin" />
                        </a>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-black tracking-widest ${
                          project.status === "LIVE"
                            ? "bg-white-primary text-black-primary"
                            : project.status === "BETA"
                              ? "bg-gray-primary text-white-primary"
                              : "bg-black-primary text-white-primary border border-white-primary"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Star className="w-6 h-6 text-white-primary animate-pulse" />
                      </div>
                    )}

                    {/* Views Counter */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black-primary/80 px-3 py-1 rounded">
                      <Eye className="w-4 h-4 text-white-primary" />
                      <span className="text-white-primary text-xs font-mono">{project.views}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-black text-white-primary tracking-wide group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-tertiary text-sm font-mono">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <p className="text-gray-tertiary mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-secondary transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-black-primary text-white-primary px-3 py-1 text-sm font-medium tracking-wide border border-gray-primary/20 hover:border-white-primary/40 transition-all duration-300"
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="w-full bg-white-primary text-black-primary py-2 sm:py-3 font-bold tracking-wide hover:bg-transparent hover:text-white-primary border-2 border-white-primary transition-all duration-300 flex items-center justify-center group/btn text-sm sm:text-base">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                          VER PROYECTO
                        </button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <button className="border-2 border-white-primary text-white-primary hover:bg-white-primary hover:text-black-primary px-6 py-3 font-bold transition-all duration-300 group/btn">
                          <Github className="w-4 h-4 group-hover/btn:animate-spin" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* GitHub CTA - Más prominente */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block">
            <a href="https://github.com/saebxq0711" target="_blank" rel="noopener noreferrer">
              <button className="group relative bg-black-tertiary border-2 border-white-primary text-white-primary hover:bg-white-primary hover:text-black-primary px-12 py-6 font-black tracking-widest text-lg transition-all duration-500 hover-lift overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Github className="w-6 h-6 mr-4 group-hover:animate-spin" />
                  VER MÁS EN GITHUB
                  <ExternalLink className="w-5 h-5 ml-4 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-white-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </a>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-4 text-gray-tertiary font-mono text-sm">
            <span>TOTAL_PROJECTS = </span>
            <span className="text-white-primary font-black text-xl">{projects.length}</span>
            <div className="w-2 h-2 bg-white-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
