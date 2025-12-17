import React, { useState, useEffect } from 'react'; 
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const words = ['Scalable', 'Secure', 'Maintainable', 'Fast', 'Reliable'];
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const i = currentWordIndex % words.length;
      const fullWord = words[i];
      
      setTypedText(isDeleting 
        ? fullWord.substring(0, typedText.length - 1)
        : fullWord.substring(0, typedText.length + 1)
      );
      
      if (!isDeleting && typedText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex(currentWordIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex]);

  // Mouse tracking (desktop only)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Particle configuration
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#00d4ff", "#00ff9d", "#ccd6f6"],
      },
      links: {
        color: "#00d4ff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: isMobile ? 400 : 800,
        },
        value: isMobile ? 20 : 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: ["circle", "triangle"],
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.9)), url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Interactive Cursor Effect (Desktop only) */}
      {!isMobile && (
        <>
          <div 
            className="fixed z-50 pointer-events-none mix-blend-difference"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-6 h-6 border border-tech-cyan rounded-full animate-ping opacity-30"></div>
            <div className="absolute w-4 h-4 bg-tech-cyan rounded-full blur-sm"></div>
          </div>

          {/* Mouse trail effect */}
          <div className="fixed inset-0 pointer-events-none z-40">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-tech-cyan/20 rounded-full"
                style={{
                  left: `${mousePosition.x + (i * 8)}px`,
                  top: `${mousePosition.y + (i * 8)}px`,
                  transition: `transform ${0.1 * (i + 1)}s linear, opacity ${0.1 * (i + 1)}s linear`,
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.5 - (i * 0.15)
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Particle Background */}
      <div className="absolute inset-0 z-1">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-tech-navy/40 backdrop-blur-sm rounded-full border border-tech-cyan/30 animate-fade-in">
          <span className="text-tech-cyan animate-pulse text-sm sm:text-base">⚡</span>
          <span className="text-tech-cyan font-mono text-xs sm:text-sm tracking-wider">
            SYSTEM ARCHITECT & FULL-STACK DEV
          </span>
        </div>

        {/* Main Name */}
        <div className="relative mb-4 sm:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="gradient-text block">Kelvin Chacha</span>
          </h1>
        </div>

        {/* Typing Animation */}
        <div className="mb-6 sm:mb-8 px-2">
          <p className="text-lg sm:text-xl md:text-2xl text-tech-light/90 mb-2 sm:mb-4">
            Building <span className="text-tech-cyan font-bold">{typedText}</span>
            <span className="inline-block w-1 h-6 sm:h-8 ml-1 bg-tech-cyan animate-blink">|</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-tech-light/70 max-w-2xl mx-auto px-2">
            Enterprise-grade systems with modern technologies, and cloud architecture.
            Transforming complexity into elegant, high-performance solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-2">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-tech-cyan to-tech-green text-tech-blue font-bold rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-tech-cyan/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-lg">💼</span>
              <span>Hire Me</span>
              <span className="group-hover:translate-x-1 transition-transform hidden sm:inline">→</span>
            </span>
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-tech-navy/40 backdrop-blur-sm border border-tech-cyan/30 text-tech-cyan font-bold rounded-lg sm:rounded-xl hover:bg-tech-cyan/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="text-lg">⚙️</span>
              <span>My Skills</span>
            </span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-md sm:max-w-xl mx-auto mb-6 sm:mb-8">
          {[
            { value: '20+', label: 'Projects' },
            { value: '2+', label: 'Years Exp' },
            { value: '100%', label: 'Success' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-tech-navy/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-tech-cyan/10 hover:border-tech-cyan/30 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl font-bold text-tech-cyan">{stat.value}</div>
              <div className="text-xs sm:text-sm text-tech-light/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce group cursor-pointer"
          aria-label="Scroll down"
        >
          <div className="relative">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border border-tech-cyan/30 rounded-full flex justify-center group-hover:border-tech-cyan transition-colors">
              <div className="w-1 h-2 sm:h-3 bg-tech-cyan rounded-full mt-2 animate-scroll"></div>
            </div>
            <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-tech-cyan/50 text-xs font-mono group-hover:text-tech-cyan transition-colors hidden sm:block">
              Scroll
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
