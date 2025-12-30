
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTWORKS, getWhatsAppLink } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = ARTWORKS.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!artwork) return <div className="p-20 text-center">Obra no encontrada</div>;

  const others = ARTWORKS.filter(a => a.id !== id);

  return (
    <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto slow-fade">
      <Link to="/works" className="flex items-center text-xs uppercase tracking-widest opacity-60 hover:opacity-100 mb-12">
        <ChevronLeft size={16} className="mr-2" /> Volver a Obras
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-white p-4 md:p-8 shadow-2xl">
          <img
            src={artwork.imageUrl}
            alt={`${artwork.title} - ${artwork.medium} pintura al óleo`}
            className="w-full h-auto shadow-inner"
          />
        </div>

        <div className="lg:sticky lg:top-32">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">{artwork.title}</h1>
          <div className="space-y-4 mb-10">
            <p className="text-sm uppercase tracking-widest text-[#B08968] font-bold">
              {artwork.medium}, {artwork.year}
            </p>
            <p className="text-xs opacity-60 italic">{artwork.dimensions}</p>
            <hr className="border-[#EBCFB2]/50" />
            <p className="text-lg leading-relaxed font-light text-[#4A3F35]">
              {artwork.description}
            </p>
          </div>

          <a
            href={getWhatsAppLink(`Hola, me interesa la obra "${artwork.title}"`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-4 px-10 bg-[#B08968] text-[#FAF3E0] text-sm uppercase tracking-widest hover:opacity-90 transition-all"
          >
            Consultar sobre esta pieza
          </a>
        </div>
      </div>

      {/* Horizontal Slider / Carousel */}
      <section className="mt-32">
        <h2 className="font-serif text-2xl mb-8">Otras obras disponibles</h2>
        <div className="relative overflow-hidden">
          <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide snap-x">
            {others.map((art) => (
              <Link
                key={art.id}
                to={`/works/${art.id}`}
                className="min-w-[280px] md:min-w-[400px] snap-start group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white mb-4">
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg">{art.title}</h3>
                <p className="text-xs uppercase tracking-widest opacity-60">{art.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkDetail;
