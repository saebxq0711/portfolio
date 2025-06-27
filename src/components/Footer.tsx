import type React from "react"
import { Github, Linkedin, Mail, MessageCircle, Code2} from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black-primary border-t border-gray-primary/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%)`,
            backgroundSize: "20px 20px",
            animation: "parallax 30s linear infinite",
          }}
        ></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* Logo & Description - Más elaborado */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-3 md:space-x-4 mb-4 md:mb-6">
              <Code2 className="w-8 h-8 md:w-10 md:h-10 text-white-primary animate-pulse" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white-primary">
                <span className="text-gray-tertiary">{"<"}</span>
                <span className="gradient-text font-mono">JUAN.ARANDA</span>
                <span className="text-gray-tertiary">{"/>"}</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-gray-tertiary font-bold tracking-widest text-lg">DESARROLLADOR WEB FULL-STACK</p>
              <p className="text-gray-secondary text-sm font-mono leading-relaxed">
                CREANDO EXPERIENCIAS DIGITALES EXCEPCIONALES CON CÓDIGO LIMPIO Y DISEÑO INNOVADOR
              </p>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center md:justify-start space-x-3 pt-4">
              <div className="w-3 h-3 bg-white-primary rounded-full animate-pulse"></div>
              <span className="text-gray-tertiary font-mono text-sm">DISPONIBLE PARA PROYECTOS</span>
            </div>
          </div>

          {/* Social Links - Grid dinámico */}
          <div className="text-center">
            <h3 className="text-white-primary font-black tracking-widest text-lg mb-8">CONECTA CONMIGO</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/saebxq0711",
                  label: "GITHUB",
                  color: "hover:bg-white-primary hover:text-black-primary",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/sebastian-aranda-26448535b",
                  label: "LINKEDIN",
                  color: "hover:bg-white-primary hover:text-black-primary",
                },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/3187523586",
                  label: "WHATSAPP",
                  color: "hover:bg-white-primary hover:text-black-primary",
                },
                {
                  Icon: Mail,
                  href: "mailto:jsebasaranda2007@hotmail.com",
                  label: "EMAIL",
                  color: "hover:bg-white-primary hover:text-black-primary",
                },
              ].map(({ Icon, href, label, color }, index) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center space-y-3 p-6 border border-gray-primary/20 ${color} transition-all duration-500 hover-lift`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 group-hover:animate-bounce" />
                  <span className="text-xs font-mono tracking-widest">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info - Más prominente */}
          <div className="text-center md:text-right space-y-6">
            <h3 className="text-white-primary font-black tracking-widest text-lg">¿TIENES UN PROYECTO?</h3>

            <div className="space-y-4">
              <a
                href="mailto:jsebasaranda2007@hotmail.com"
                className="block text-2xl font-black text-white-primary hover:gradient-text transition-all duration-300 hover-lift"
              >
                HABLEMOS
              </a>

            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-primary/20">
              <div className="text-center">
                <div className="text-2xl font-black text-white-primary">1+</div>
                <div className="text-gray-tertiary text-xs font-mono">AÑOS EXP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white-primary">5+</div>
                <div className="text-gray-tertiary text-xs font-mono">PROYECTOS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Más elaborado */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-gray-primary/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-tertiary text-sm tracking-wide font-mono">
                © {currentYear} JUAN.ARANDA - TODOS LOS DERECHOS RESERVADOS
              </p>
            </div>


            {/* Version */}
            <div className="flex items-center space-x-2 text-gray-tertiary font-mono text-xs">
              <span>VERSION</span>
              <span className="text-white-primary font-bold">2.0</span>
              <div className="w-2 h-2 bg-white-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
