
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTWORKS, getWhatsAppLink } from '../constants';

const TopSales: React.FC = () => {
  const bestSellers = ARTWORKS.filter(a => a.isTopSale);

  return (
    <div className="py-20 px-6 md:px-12 slow-fade max-w-7xl mx-auto">
      <header className="mb-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Selecciones Curadas</h1>
        <p className="text-lg opacity-80 leading-relaxed italic">
          Una presentación editorial de nuestras obras más resonantes. Estas piezas han encontrado
          una conexión profunda con coleccionistas de todo el mundo, representando el núcleo de la
          práctica de pintura al óleo contemporánea de Maralcog.
        </p>
      </header>

      <div className="space-y-32">
        {bestSellers.map((art, idx) => (
          <div key={art.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <Link to={`/works/${art.id}`} className="block group">
                <div className="aspect-square overflow-hidden bg-white shadow-xl">
                  <img
                    src={art.imageUrl}
                    alt={`Más Vendidas: ${art.title}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#B08968] font-bold">Elección del Coleccionista</span>
              <h2 className="text-3xl md:text-5xl font-serif">{art.title}</h2>
              <p className="text-lg font-light opacity-80 leading-relaxed">
                {art.description}
              </p>
              <div className="flex items-center space-x-6">
                <Link to={`/works/${art.id}`} className="text-sm uppercase tracking-widest font-bold border-b border-[#B08968] pb-1">
                  Ver Obra
                </Link>
                {!art.isSold && (
                  <a
                    href={getWhatsAppLink(`Hola, quisiera consultar el precio de "${art.title}"`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100"
                  >
                    Solicitar Precio
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSales;
