
import React, { useState } from 'react';
import { Instagram, Youtube, Send, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS, getWhatsAppLink } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consulta General',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const whatsappMessage = `Hola, soy ${formData.name}
    
Email: ${formData.email}
Asunto: ${formData.subject}

${formData.message}`;

    // Open WhatsApp with the message
    window.open(getWhatsAppLink(whatsappMessage), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 px-6 md:px-12 max-w-6xl mx-auto slow-fade">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Consultas</h1>
        <p className="text-sm uppercase tracking-widest opacity-60">Inicia una conversación o consulta sobre una pintura específica</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl">Ponte en contacto</h2>
            <p className="text-lg font-light opacity-80 leading-relaxed">
              Para adquisiciones, encargos o representación en galerías, por favor comunícate a través del
              formulario o mis canales sociales. Reviso personalmente cada mensaje.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-[#EBCFB2]/30 p-3 rounded-full"><Mail size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Email</p>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-[#B08968] transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#EBCFB2]/30 p-3 rounded-full"><MapPin size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Estudio</p>
                <p>Atelier Privado, San Luis, Argentina</p>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Redes Sociales</p>
            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08968] transition-colors"><Instagram size={24} /></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08968] transition-colors"><Youtube size={24} /></a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08968] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white/50 p-8 md:p-12 border border-[#EBCFB2]/30">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest opacity-60">Tu Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#EBCFB2] py-2 focus:outline-none focus:border-[#B08968] transition-colors"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest opacity-60">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#EBCFB2] py-2 focus:outline-none focus:border-[#B08968] transition-colors"
              placeholder="email@ejemplo.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest opacity-60">Asunto</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#EBCFB2] py-2 focus:outline-none focus:border-[#B08968] transition-colors"
            >
              <option>Consulta General</option>
              <option>Adquisición</option>
              <option>Encargo</option>
              <option>Prensa</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest opacity-60">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border-b border-[#EBCFB2] py-2 focus:outline-none focus:border-[#B08968] transition-colors resize-none"
              placeholder="Cuéntame sobre tu interés en la obra..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#B08968] text-[#FAF3E0] text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center space-x-2"
          >
            <span>Enviar por WhatsApp</span>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
