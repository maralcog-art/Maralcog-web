
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Send, Menu, X, MessageCircle } from 'lucide-react';
import Home from './components/Home';
import Works from './components/Works';
import ArtworkDetail from './components/ArtworkDetail';
import TopSales from './components/TopSales';
import About from './components/About';
import Contact from './components/Contact';
import { ARTIST_PORTRAIT, SOCIAL_LINKS, getWhatsAppLink } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { hash } = useLocation();

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Obras', path: '/works' },
    { label: 'TOP VENTAS', path: '/top-sales' },
    { label: 'SOBRE MI', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF3E0]/90 backdrop-blur-md py-6 px-6 md:px-12 flex justify-between items-center border-b border-[#EBCFB2]/30">
      <Link to="/" className="flex items-center gap-4 hover:opacity-70 transition-opacity">
        <img
          src={ARTIST_PORTRAIT}
          alt="Maralcog"
          className="w-12 h-12 rounded-full object-cover border-2 border-[#B08968]"
        />
        <span className="text-2xl font-serif tracking-widest uppercase">Maralcog</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-sm uppercase tracking-widest hover:text-[#B08968] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FAF3E0] shadow-xl py-8 flex flex-col items-center space-y-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={getWhatsAppLink('Hola, me interesa conocer más sobre tu obra')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#B08968] text-[#FAF3E0] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EBCFB2]/10 py-16 px-6 md:px-12 border-t border-[#EBCFB2]/30 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-xl mb-4">Maralcog</h3>
          <p className="text-sm leading-relaxed opacity-80">
            Pinturas al óleo contemporáneas enfocadas en la presencia humana, la identidad y la belleza del silencio.
            Explorando el realismo simbólico y la profundidad emocional en cada pincelada.
          </p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:text-[#B08968]">Inicio</Link></li>
            <li><Link to="/works" className="hover:text-[#B08968]">Obras</Link></li>
            <li><Link to="/top-sales" className="hover:text-[#B08968]">Top Ventas</Link></li>
            <li><Link to="/contact" className="hover:text-[#B08968]">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs font-bold mb-4">Sigue el Proceso</h4>
          <div className="flex space-x-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08968]"><Instagram size={20} /></a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08968]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08968]"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#EBCFB2]/20 text-center text-xs opacity-50">
        &copy; {new Date().getFullYear()} Maralcog. Todos los derechos reservados. Pintor al Óleo | Artista Contemporáneo | Realismo Simbólico.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<ArtworkDetail />} />
            <Route path="/top-sales" element={<TopSales />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
