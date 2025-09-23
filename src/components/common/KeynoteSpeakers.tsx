'use client';
import React from 'react';
import { kynotespeaker1, kynotespeaker2, kynotespeaker3 } from '@/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Speaker {
  name: string;
  title: string;
  affiliation: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    name: 'Dr. Mohammad Ismail',
    title: 'Vice-Chancellor <br/> Noakhali Science and Technology University',
    affiliation: 'Secretary at ACS Bangladesh Chapter',
    imageUrl: kynotespeaker1,
  },
  {
    name: 'Dr. Mohammad Shahruzzaman',
    title:
      'Associate Professor <br/> Applied Chemistry and Chemical Engineering <br/> University of Dhaka',
    affiliation: 'Faculty Advisor at ACS Student Chapter, DU',
    imageUrl: kynotespeaker2,
  },
  {
    name: 'Sadit Bihongo Malitha',
    title: 'Lecturer <br/> Applied Chemistry and Chemical Engineering <br/> University of Dhaka',
    affiliation: 'Faculty Co-Advisor at ACS Student Chapter, DU',
    imageUrl: kynotespeaker3,
  },
];

export default function KeynoteSpeakers() {
  return (
    <section className="bg-background mb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-primary">
          Keynote Speakers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl hover:border-primary/40 hover:shadow-2xl transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <motion.div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-md mb-6"
                whileHover={{ rotate: 3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </motion.div>

              {/* Content */}
              <div className="flex flex-col items-center flex-grow w-full">
                {/* Name */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground text-center drop-shadow-md">
                    {speaker.name}
                  </h3>
                </div>

                {/* Title */}
                <div className="min-h-[96px] flex items-center justify-center mb-6 flex-grow">
                  <p
                    className="text-lg font-semibold text-primary text-center leading-relaxed drop-shadow-sm"
                    dangerouslySetInnerHTML={{ __html: speaker.title }}
                  />
                </div>

                {/* Affiliation */}
                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {speaker.affiliation && (
                    <p className="text-sm text-muted-foreground bg-foreground/10 backdrop-blur-md px-4 py-2 rounded-full shadow-sm whitespace-nowrap">
                      {speaker.affiliation}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
