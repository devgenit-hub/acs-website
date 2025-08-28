import Image from 'next/image';

interface Partner {
  imageUrl: string;
  name: string;
  description: string;
}

const partners: Partner[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3',
    name: 'The Mathematical Whiskers Society',
    description: 'PAWS Journal',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3',
    name: 'International Journal of Feline Research',
    description: 'MEOW Research',
  },
];

export default function PublicationPartner() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-green-600">
          Publication Partner
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6">
                <Image
                  src={partner.imageUrl}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-green-600">{partner.name}</h3>
                <p className="text-lg text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
