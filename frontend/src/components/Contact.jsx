import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        setSubmitMessage('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Something went wrong');
      }
    } catch {
      setSubmitMessage('Network error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 bg-gradient-to-br from-tech-blue to-tech-navy text-white"
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm text-tech-light/70">
            Fast & simple communication
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/255750792039"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm
                       bg-green-600 rounded-full
                       hover:bg-green-700 transition
                       animate-slide-up"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>

          {/* Location Button */}
          <div
            className="flex items-center gap-2 px-4 py-2 text-sm
                       bg-tech-navy/60 border border-tech-cyan/30
                       rounded-full animate-slide-up delay-100"
          >
            <FontAwesomeIcon icon={faLocationDot} />
            Dodoma, Tanzania
          </div>

        </div>

        {/* Email Form */}
        <div
          className="bg-tech-navy/50 border border-tech-cyan/20
                     rounded-xl p-6 animate-fade-in delay-200"
        >
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 text-sm rounded-lg
                         bg-tech-blue/50 border border-tech-cyan/30
                         focus:outline-none text-white"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-3 text-sm rounded-lg
                         bg-tech-blue/50 border border-tech-cyan/30
                         focus:outline-none text-white"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message"
              required
              className="w-full px-4 py-3 text-sm rounded-lg
                         bg-tech-blue/50 border border-tech-cyan/30
                         focus:outline-none text-white resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2
                         py-3 text-sm font-semibold
                         bg-gradient-to-r from-tech-cyan to-tech-green
                         text-tech-blue rounded-lg
                         hover:opacity-90 transition"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <p className="text-xs text-center text-tech-light/80">
                {submitMessage}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
