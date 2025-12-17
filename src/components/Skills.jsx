import React from 'react';

const SkillsResponsive = () => {
  const skills = [
    // Row 1 - Frontend
    { name: "HTML5", icon: "devicon-html5-plain colored", category: "frontend" },
    { name: "CSS3", icon: "devicon-css3-plain colored", category: "frontend" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", category: "frontend" },
    { name: "React", icon: "devicon-react-original colored", category: "frontend" },
    
    // Row 2 - Backend
    { name: "Python", icon: "devicon-python-plain colored", category: "backend" },
    { name: "Django", icon: "devicon-django-plain colored", category: "backend" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored", category: "backend" },
    { name: "Java", icon: "devicon-java-plain colored", category: "backend" },
    
    // Row 3 - Database
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", category: "database" },
    { name: "MySQL", icon: "devicon-mysql-plain colored", category: "database" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", category: "database" },
    { name: "Redis", icon: "devicon-redis-plain colored", category: "database" },
    
    // Row 4 - DevOps
    { name: "Docker", icon: "devicon-docker-plain colored", category: "devops" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain colored", category: "devops" },
    { name: "Git", icon: "devicon-git-plain colored", category: "devops" },
    { name: "Linux", icon: "devicon-linux-plain colored", category: "devops" },
    
    // Row 5 - Tools
    { name: "VS Code", icon: "devicon-vscode-plain colored", category: "tools" },
    { name: "GitHub", icon: "devicon-github-original colored", category: "tools" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", category: "tools" },
    { name: "Figma", icon: "devicon-figma-plain colored", category: "tools" }
  ];

  return (
    <section id="skills" className="py-12 bg-tech-blue text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-tech-light/60 text-sm">Technologies I work with</p>
        </div>

        {/* MOBILE: Horizontal Scroll List */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex flex-col items-center p-4 bg-tech-navy/30 rounded-xl border border-tech-cyan/10 min-w-[90px]"
              >
                <i className={`${skill.icon} text-2xl mb-2`}></i>
                <span className="text-xs text-tech-light text-center font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Grid Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-tech-navy/20 rounded-lg p-3 flex flex-col items-center justify-center border border-tech-cyan/5 hover:border-tech-cyan/30 transition-all duration-300 hover:scale-105"
            >
              <i className={`${skill.icon} text-2xl mb-2`}></i>
              <span className="text-xs text-tech-light text-center font-medium">
                {skill.name}
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Progress Indicators - Compact */}
        <div className="space-y-3 max-w-md mx-auto mb-8">
          {[
            { skill: "System Architecture", level: 92 },
            { skill: "API Design", level: 88 },
            { skill: "Database Optimization", level: 85 },
            { skill: "Cloud Deployment", level: 80 }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-tech-light">{item.skill}</span>
                <span className="text-tech-cyan font-bold">{item.level}%</span>
              </div>
              <div className="h-1.5 bg-tech-blue/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-tech-cyan to-tech-green rounded-full"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-tech-light/50 text-sm italic">
            "Building scalable solutions with the right tools"
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsResponsive;