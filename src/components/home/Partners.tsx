'use client';
import Marquee from 'react-fast-marquee';

interface Partner {
  name: string;
}

const partners: Partner[] = [
  {
    name: 'ACS International Student Chapter, BUET',
  },
  {
    name: 'ACS International Student Chapter, CU',
  },
  {
    name: 'ACS International Student Chapter, SUST',
  },
  {
    name: 'ACS International Student Chapter, GSTU',
  },
  {
    name: 'ACS International Student Chapter, JUST',
  },
  {
    name: 'ACS International Student Chapter, KU',
  },
  {
    name: 'ACS International Student Chapter, CoU',
  },

  {
    name: 'ACS International Chapter of Bangladesh',
  },
];

export default function Partners() {
  return (
    <section className="bg-background pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-primary">
          Our Partners
        </h2>

        <div className="mt-8 overflow-hidden">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor={'#ffffff'}
            gradientWidth={50}
            pauseOnHover={true}
          >
            {partners.map((partner, idx) => (
              <div key={idx} className="relative group mx-8 flex flex-col items-center">
                <p className="mt-4 text-lg font-medium text-foreground transition-opacity duration-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
