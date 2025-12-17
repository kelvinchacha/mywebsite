import React from "react";
import { motion } from "framer-motion";

const AboutProfessional = () => {
  const specialties = [
    "System Architecture",
    "Full-Stack Development",
    "Security Auditing",
    "Cloud Infrastructure",
    "API Design",
    "Performance Optimization",
  ];

  return (
    <section id="about" className="py-14 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">

        {/* Fade-in Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 text-center max-w-sm sm:max-w-md md:max-w-lg mx-auto"
        >

          {/* Avatar */}
          <motion.img
            src="/profile.jpg"
            alt="Kelvin Chacha"
            className="w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 mx-auto rounded-full object-cover mb-4 border border-gray-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* Name with underline animation */}
          <div className="inline-block relative">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              Kelvin Chacha
            </h2>
            <motion.span
              className="absolute left-0 -bottom-1 h-[2px] bg-tech-cyan rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </div>

          <p className="text-sm sm:text-base text-gray-500 mt-2">
            System Architect & Full-Stack Developer
          </p>

          {/* Bio */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-4 max-w-xl mx-auto">
            I architect and build secure, scalable systems using modern
            technologies. I create solutions that are performant,
            maintainable, and ready for growth.
          </p>

          {/* Specialties */}
          <div className="mt-6">
            <h3 className="text-xs sm:text-sm font-medium text-gray-700 mb-3">
              Specialties
            </h3>

            <div className="flex flex-wrap justify-center gap-2">
              {specialties.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  className="px-2 sm:px-3 py-1 text-[9px] sm:text-xs md:text-sm
                             bg-gray-100 text-gray-600
                             border border-gray-200
                             rounded-full"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm md:text-base font-medium
                         bg-tech-cyan text-tech-blue
                         rounded-lg hover:opacity-90 transition"
            >
              Get In Touch
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutProfessional;
