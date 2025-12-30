
import React from 'react';
import { ARTIST_PORTRAIT, POETIC_INTRO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 max-w-5xl mx-auto slow-fade">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-64 h-64 md:w-96 md:h-96 shrink-0">
          <img
            src={ARTIST_PORTRAIT}
            alt="Maralcog - Pintor al Óleo Contemporáneo"
            className="w-full h-full object-cover rounded-full border-8 border-[#EBCFB2]/20 shadow-xl"
          />
        </div>
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif">Maralcog</h1>
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#B08968]">La Mano Detrás del Velo</h2>
          <div className="text-lg leading-relaxed space-y-6 font-light">
            <p>
              Nacido del deseo de visualizar los estados emocionales invisibles que gobiernan nuestras vidas,
              Maralcog es un pintor al óleo contemporáneo cuyo trabajo tiende un puente entre
              la técnica tradicional y el realismo simbólico contemporáneo.
            </p>
            <p className="italic">
              "{POETIC_INTRO}"
            </p>
            <p>
              Al enfocarme en los gestos sutiles del cuerpo humano y el peso de una sola mirada,
              mis pinturas sirven como espejos de los paisajes internos del espectador.
              El proceso paciente de la pintura al óleo—construyendo capas durante semanas y meses—es
              esencial para la profundidad y resonancia que busco lograr.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="font-serif text-xl mb-4">Exposiciones y Destacados</h3>
            <ul className="text-sm space-y-2 opacity-70">
              <li>2024 &bull; Exposición Individual "Silencio y Alma", Nueva York</li>
              <li>2023 &bull; Muestra Grupal de Realismo Contemporáneo, Londres</li>
              <li>2022 &bull; Nuevas Voces en Arte Figurativo, Madrid</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
