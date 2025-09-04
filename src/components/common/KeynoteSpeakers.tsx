'use client';
import Image from 'next/image';

interface Speaker {
  name: string;
  title: string;
  affiliation: string;
  department?: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    name: 'Dr. Whiskers McFluff, Ph.D',
    title: 'Chief Napping Officer',
    affiliation: 'Institute of Purr-fect Studies, Catsville University',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3',
  },
  {
    name: 'Prof. Mittens Pawsome, Ph.D',
    title: 'Senior Researcher',
    department: 'Department of Feline Sciences',
    affiliation: 'Royal Academy of Cat Behavior',
    imageUrl: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3',
  },
  {
    name: 'Dr. Luna Purrington, Ph.D',
    title: 'Head of Treats',
    affiliation: 'Meow-velous Institute of Technology',
    imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3',
  },
  {
    name: 'Prof. Oliver Whiskerton III, Ph.D',
    title: 'Distinguished Professor',
    department: 'Department of Purr Acoustics',
    affiliation: 'Feline Institute of Technology',
    imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3',
  },
  {
    name: 'Dr. Bella Scratchington, Ph.D',
    title: 'Director of Yarn Studies',
    affiliation: 'Whisker University',
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3',
  },
  {
    name: 'Prof. Leo Furbottom, Ph.D',
    title: 'Head of Department',
    department: 'Department of Mousology',
    affiliation: 'Pawsford University',
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3',
  },
  {
    name: 'Dr. Sasha Meowenstein, Ph.D',
    title: 'Research Director',
    affiliation: 'Catzionale Institute of Science',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3',
  },
  {
    name: 'Prof. Felix Whiskersmith, Ph.D',
    title: 'Executive Director',
    department: 'Center for Advanced Catnip Studies',
    affiliation: 'University of Pawington',
    imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3',
  },
];

export default function KeynoteSpeakers() {
  return (
    <section className="py-10 md:pb-12 lg:pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-primary">
          Keynote Speakers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{speaker.name}</h3>
                <p className="text-lg font-semibold text-primary">{speaker.title}</p>
                {speaker.department && (
                  <p className="text-base text-muted-foreground bg-foreground/10 px-4 py-2 rounded-full">
                    {speaker.department}
                  </p>
                )}
                <p className="text-base text-muted-foreground">{speaker.affiliation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
