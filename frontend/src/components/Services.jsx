import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faMobileScreenButton,
  faPlug,
  faShieldHalved,
  faRocket,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "System Architecture",
      shortDesc: "Scalable & secure system design",
      icon: faSitemap,
      features: ["Microservices", "Cloud Native", "High Availability"],
    },
    {
      title: "Web & Mobile Dev",
      shortDesc: "Full-stack applications",
      icon: faMobileScreenButton,
      features: ["React", "React Native", "Responsive"],
    },
    {
      title: "API Development",
      shortDesc: "REST & GraphQL APIs",
      icon: faPlug,
      features: ["Documentation", "Integration", "Security"],
    },
    {
      title: "Security Auditing",
      shortDesc: "Security assessments",
      icon: faShieldHalved,
      features: ["Pen Testing", "Best Practices", "Hardening"],
    },
    {
      title: "Deployment & DevOps",
      shortDesc: "CI/CD & Cloud setup",
      icon: faRocket,
      features: ["Docker", "AWS", "Automation"],
    },
    {
      title: "Performance Optimization",
      shortDesc: "Speed & efficiency",
      icon: faGaugeHigh,
      features: ["Database Tuning", "Caching", "Monitoring"],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-8 md:py-12 bg-white
                 opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-tech-blue mb-2">
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-tech-cyan to-tech-green mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm">
            End-to-end solutions for modern systems
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg
                         p-3 md:p-5 transition-all duration-300
                         hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                              bg-gradient-to-br from-tech-cyan/10 to-tech-green/10
                              rounded-md mb-2">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-tech-cyan text-lg md:text-xl"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-lg font-semibold text-tech-blue mb-1">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-500 mb-2">
                {service.shortDesc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] md:text-xs
                               bg-tech-blue/5 text-tech-blue rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
