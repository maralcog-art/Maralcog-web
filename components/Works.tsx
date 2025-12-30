
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTWORKS } from '../constants';

const Works: React.FC = () => {
  return (
    <div className="py-20 px-6 md:px-12 slow-fade">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Obras Originales</h1>
        <p className="text-sm uppercase tracking-widest opacity-60">Pinturas al óleo explorando la condición humana</p>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {ARTWORKS.map((art) => (
          <div key={art.id} className="break-inside-avoid">
            <Link to={`/works/${art.id}`} className="group block">
              <div className="relative overflow-hidden bg-white">
                <img
                  src={art.imageUrl}
                  alt={`${art.title} - Pintura al óleo contemporánea por Maralcog`}
                  className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4">
                <h2 className="font-serif text-xl">{art.title}</h2>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs uppercase tracking-widest opacity-60">{art.year} &bull; {art.medium}</p>
                  <span className="text-[10px] opacity-40 italic">{art.dimensions}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
