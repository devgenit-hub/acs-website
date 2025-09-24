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
    name: 'ACS International Chapter of Malaysia',
  },
  {
    name: 'ACS International Chapter of Bangladesh',
  },
  {
    name: 'ACS International Chapter of Singapore',
  },
  {
    name: 'ACS International Chapter of Thailand',
  },
  {
    name: 'ACS International Chapter of Southwestern China',
  },
  {
    name: 'ACS International Student Chapter of National University of Singapore',
  },
  {
    name: 'ACS International Student Chapter of Anteneo de Manila University, The Philippines',
  },
  {
    name: 'ACS International Student Chapter of Nazarbayev University, Kazakhstan',
  },
  {
    name: 'ACS International Student Chapters in Malaysia (UKM, USM, UM, UTM, UMP, UIA, UTP, Monash, Curtin) ',
  },
];

export default function Partners() {
  return (
    <section className="bg-background py-24 lg:py-34">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
