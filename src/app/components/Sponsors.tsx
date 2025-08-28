import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface Sponsor {
  imageUrl: string;
  name: string;
}

const sponsors: Sponsor[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3',
    name: 'Pawsome Tech',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3',
    name: 'Whiskers Industries',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3',
    name: 'Meow Solutions',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3',
    name: 'Purr Dynamics',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3',
    name: 'Feline Innovations',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3',
    name: 'CatTech Corp',
  },
];

export default function Sponsors() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-green-600">
          Our Sponsors
        </h2>

        <div className="mt-8 overflow-hidden">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#f8fafc"
            gradientWidth={50}
            pauseOnHover={true}
          >
            {sponsors.map((sponsor, idx) => (
              <div key={idx} className="relative group mx-8 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="mt-4 text-lg font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sponsor.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
