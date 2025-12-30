
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTWORKS, POETIC_INTRO } from '../constants';

const Home: React.FC = () => {
  // Get featured works: Barrilete Cósmico (Diego), El Niño Bueno (Messi), Caripela Inicio
  const featuredWorks = ARTWORKS.filter(art => ['7', '1', '2'].includes(art.id));

  return (
    <div className="slow-fade">
      {/* Hero Section - Two Column Layout */}
      <section className="relative min-h-[80vh] w-full flex items-center py-20 px-6 md:px-12 bg-gradient-to-br from-[#FAF3E0] to-[#EBCFB2]/20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#4A3F35] tracking-tight leading-tight">
              El Silencio de la Identidad
            </h1>
            <p className="text-lg md:text-xl font-light italic opacity-80 max-w-xl">
              Pinturas al Óleo Contemporáneas por Maralcog
            </p>
          </div>

          {/* Right Side - YouTube Video */}
          <div className="w-full aspect-video bg-black/5 shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/PsoPxwNGPp4?autoplay=0&controls=1&mute=0&loop=0"
              className="w-full h-full"
              title="Video del Proceso Artístico"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Poetic Introduction */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] font-bold mb-10 opacity-60">Filosofía del Artista</h2>
        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[#4A3F35]">
          "{POETIC_INTRO}"
        </p>
        <div className="mt-12">
          <Link to="/about" className="text-sm uppercase tracking-widest border-b border-[#B08968] pb-1 hover:text-[#B08968] transition-colors">
            Lee la historia completa
          </Link>
        </div>
      </section>

      {/* Featured Works Preview - 3 Blue Paintings */}
      <section className="py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((art) => (
            <Link key={art.id} to={`/works/${art.id}`} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-white mb-4">
                <img
                  src={art.imageUrl}
                  alt={`${art.title} - Pintura al óleo por Maralcog`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl group-hover:opacity-60 transition-opacity">{art.title}</h3>
              <p className="text-xs uppercase tracking-widest opacity-60">{art.year} &bull; {art.medium}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/works" className="inline-block py-4 px-10 border border-[#B08968] text-sm uppercase tracking-widest hover:bg-[#B08968] hover:text-[#FAF3E0] transition-all">
            Explorar Todas las Obras
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
