
import { Artwork } from './types';

export const ARTIST_PORTRAIT = "/assets/images/artist-portrait.jpg";

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'El Niño Bueno',
    description: 'La inocencia tiene un rostro, y está pintado en tonos de esperanza. En esta mirada azul vive la promesa de un futuro brillante, el talento que todavía no sabe su propio peso. Cada pincelada captura ese momento mágico donde el niño se convierte en leyenda, donde los sueños aún no conocen límites. ¿Recordás cuando vos también creías que todo era posible? Esa sensación vive acá, en cada trazo.',
    imageUrl: '/assets/images/blue-portrait-1.jpg',
    year: '2023',
    medium: 'Óleo sobre Lienzo',
    dimensions: '100x120cm',
    isTopSale: false,
    category: 'portrait'
  },
  {
    id: '2',
    title: 'Caripela Inicio',
    description: 'Hay rostros que son espejos. Esta obra captura el momento exacto donde la vulnerabilidad se encuentra con la fortaleza. Las lágrimas azules no son de tristeza, son de verdad. Cada textura superpuesta cuenta una historia de resistencia, de volver a empezar cuando todo parecía perdido. Al mirarlo, ¿qué ves? ¿Tu propio reflejo en los momentos donde tuviste que ser fuerte?',
    imageUrl: '/assets/images/blue-portrait-2.jpg',
    year: '2024',
    medium: 'Óleo sobre Lienzo',
    dimensions: '80x80cm',
    isTopSale: false,
    category: 'symbolic'
  },
  {
    id: '3',
    title: 'Compañero',
    description: 'La lealtad no necesita palabras. En esta mirada canina vive todo lo que los humanos buscamos y rara vez encontramos: amor incondicional, presencia pura, compañía sin agenda. El blanco y negro no es limitación, es esencia. ¿Recordás la última vez que alguien te miró así? Sin juzgar, sin pedir nada a cambio, solo estar. Eso es lo que este retrato te devuelve.',
    imageUrl: '/assets/images/dog-portrait.jpg',
    year: '2023',
    medium: 'Óleo sobre Lienzo',
    dimensions: '60x90cm',
    isTopSale: true,
    isSold: true,
    category: 'portrait'
  },
  {
    id: '4',
    title: 'Riquelme',
    description: 'El silencio tiene peso. En la mirada de Román vive la pausa antes de la magia, ese instante donde el tiempo se detiene y el genio decide. Los tonos azules no son casuales: son la frialdad calculada del último pase, la serenidad en medio del caos. ¿Sentís esa tensión? Es la misma que viviste en la tribuna, conteniendo la respiración, sabiendo que algo extraordinario está por suceder.',
    imageUrl: '/assets/images/blue-portrait-3.jpg',
    year: '2023',
    medium: 'Óleo sobre Lienzo',
    dimensions: '60x90cm',
    isTopSale: true,
    category: 'portrait'
  },
  {
    id: '5',
    title: 'Con Todo Mi Corazón',
    description: 'La alegría pura existe. Esta sonrisa genuina te lo demuestra. En los tonos vibrantes y cálidos vive la inocencia que todos llevamos adentro, esa parte nuestra que todavía sabe maravillarse. Cuando mirás esta obra, ¿sentís cómo se te afloja el pecho? Es porque te recuerda que la felicidad no es complicada. A veces es solo un momento, una sonrisa, un corazón abierto.',
    imageUrl: '/assets/images/magenta-jacket.jpg',
    year: '2024',
    medium: 'Óleo sobre Lienzo',
    dimensions: '80x100cm',
    isTopSale: true,
    isSold: true,
    category: 'portrait'
  },
  {
    id: '6',
    title: 'Sin Máscaras Sociales',
    description: '¿Cuántas caras mostrás por día? Esta obra fragmentada es un espejo de nuestra identidad múltiple, de todas las versiones de nosotros mismos que presentamos al mundo. Pero acá, en esta explosión de color, no hay juicio. Solo la belleza caótica de ser humano, de contener multitudes. Cada fragmento es una verdad, y todas juntas forman algo más grande que la suma de sus partes.',
    imageUrl: '/assets/images/colorful-abstract.jpg',
    year: '2024',
    medium: 'Óleo sobre Madera',
    dimensions: '40x50cm',
    isTopSale: false,
    category: 'symbolic'
  },
  {
    id: '7',
    title: 'Barrilete Cósmico',
    description: '¿Alguna vez sentiste que tocabas el cielo con las manos? Diego lo hizo. En cada pincelada azul vive la pasión de un pueblo entero, el grito de gol que nunca se apaga. Esta obra no es solo un retrato, es la memoria colectiva de una nación que aprendió a soñar con los pies en la tierra y el corazón en las nubes. Cada mirada al lienzo te devuelve a ese momento donde todo era posible.',
    imageUrl: '/assets/images/blue-maradona.png',
    year: '2024',
    medium: 'Óleo sobre Lienzo',
    dimensions: '70x90cm',
    isTopSale: true,
    isSold: true,
    category: 'portrait'
  },
  {
    id: '8',
    title: 'Autorretrato',
    description: 'El grito del artista es el grito de todos. En esta expresión cruda y sin filtros vive la intensidad del proceso creativo, pero también la tuya. Cada vez que sentiste que ibas a explotar, cada vez que el mundo te pidió silencio y vos necesitabas gritar. Los tonos azules amplifican la emoción, la hacen vibrar. No es un cuadro para mirar en silencio, es uno para sentir en el pecho.',
    imageUrl: '/assets/images/blue-screaming.png',
    year: '2023',
    medium: 'Óleo sobre Lienzo',
    dimensions: '90x120cm',
    isTopSale: true,
    isSold: true,
    category: 'portrait'
  },
  {
    id: '9',
    title: 'Enojona',
    description: 'Las emociones difíciles también son hermosas. En esta mirada inclinada hay dignidad, hay carácter, hay una historia que se niega a ser ignorada. Los tonos cálidos contrastan con la actitud: fuego contenido, fuerza que no necesita gritar. ¿Te reconocés en esa expresión? Todos tenemos días donde el mundo nos pide sonreír y nosotros elegimos ser auténticos.',
    imageUrl: '/assets/images/warm-tilted.png',
    year: '2022',
    medium: 'Óleo sobre Madera',
    dimensions: '40x50cm',
    isTopSale: true,
    isSold: true,
    category: 'realism'
  }
];

export const getWhatsAppLink = (message: string = 'Hola, me interesa conocer más sobre tu obra') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/542664708777?text=${encodedMessage}`;
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/Maralcog',
  tiktok: 'https://tiktok.com/@Maralcog',
  youtube: 'https://youtube.com/@Maralcog',
  whatsapp: 'https://wa.me/542664708777',
  email: 'maralcog@gmail.com'
};

export const POETIC_INTRO = `En el silencio entre pinceladas, emerge la identidad. Maralcog explora la presencia humana a través de la paciente capa de óleo, capturando no solo un parecido, sino el silencio que vive dentro de nosotros. Cada lienzo es una invitación a mirar hacia adentro—un diálogo entre sombra, piel y alma.`;
