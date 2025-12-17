import React from 'react';

const FooterMinimal = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-tech-blue/90 backdrop-blur-sm border-t border-tech-cyan/20">
      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-tech-cyan via-tech-green to-tech-cyan"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-cyan to-tech-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KC</span>
              </div>
              <h3 className="text-xl font-bold text-white">Kelvin Chacha</h3>
            </div>
            <p className="text-tech-light/60 text-sm">
              System Architect & Full-Stack Developer
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: 'devicon-github-plain', url: 'https://github.com/kelvinchacha', label: 'GitHub' },
              { icon: 'devicon-linkedin-plain', url: 'https://linkedin.com/in/kelvinchacha', label: 'LinkedIn' },
              
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-tech-navy/50 border border-tech-cyan/10 hover:border-tech-cyan/40 hover:bg-tech-cyan/10 transition-all duration-300"
                title={social.label}
              >
                {social.icon.includes('devicon') ? (
                  <i className={`${social.icon} text-lg text-tech-light/70 hover:text-tech-cyan transition-colors`}></i>
                ) : (
                  <span className="text-lg text-tech-light/70 hover:text-tech-cyan transition-colors">
                    {social.icon}
                  </span>
                )}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-tech-light/50 text-sm">
              © {currentYear} Kelvin Chacha | All Rights Reserved
            </p>
            
          </div>| 
          
          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-tech-cyan/60 hover:text-tech-cyan transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;