'use client';
import { che, ec, gc, sustainability } from '@/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Scope {
  title: string;
  description: Array<string>;
  imageUrl: string;
}

const scopes: Scope[] = [
  {
    title: 'Sustainability',
    description: ['Atom Economy', 'Safer Solutions', 'Energy Efficiency', 'Non-Toxic Circularity'],
    imageUrl: sustainability,
  },
  {
    title: 'Environmental Science',
    description: ['Atmospheric Chemistry', 'Geo Chemistry', 'Analytical Chemistry', 'Toxicology'],
    imageUrl: ec,
  },
  {
    title: 'Green Chemistry',
    description: [
      'Green Earth',
      'Renewable Feedstocks',
      'Biomass Utilisation',
      'Sustainable Energy',
    ],
    imageUrl: gc,
  },
  {
    title: 'Chemical Engineering',
    description: [
      'Reaction Engineering',
      'Separation Processes',
      'Nanomaterials, Polymers and Composites',
      'Bio Process Engineering',
    ],
    imageUrl: che,
  },
];

export default function Scopes() {
  return (
    <section className="bg-background mb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-primary">
          Thematic Areas of Conference
        </h2>

        <div className="space-y-16 md:space-y-28 lg:space-y-32">
          {scopes.map((scope, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Image Container */}
              <motion.div
                className="w-full md:w-1/2 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative h-64 md:h-[400px] rounded-2xl overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02] ${index % 2 === 0 ? 'rotate-2 hover:rotate-0' : '-rotate-2 hover:rotate-0'}`}
                >
                  <Image
                    src={scope.imageUrl}
                    alt={`${scope.title} research area`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Content Container */}
              <motion.div
                className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 md:px-4 lg:px-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                  {scope.title}
                </h3>
                <ul className="space-y-3 md:space-y-4 text-muted-foreground">
                  {scope.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 text-primary">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
