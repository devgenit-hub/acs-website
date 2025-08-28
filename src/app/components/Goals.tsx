'use client';
import Image from 'next/image';

interface Goals {
  title: string;
  description: Array<string>;
  imageUrl: string;
}

const goals: Goals[] = [
  {
    title: 'Mathematics',
    description: [
      'Pure Mathematics',
      'Computational Fluid Dynamics (CFD)',
      'Numerical Heat and Mass Transfer',
      'Optimization and Operational Research',
      'Biomathematics and Mathematical Modelling',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3', // Cat counting/calculating
  },
  {
    title: 'Physics',
    description: [
      'Pure Mathematics',
      'Computational Fluid Dynamics (CFD)',
      'Numerical Heat and Mass Transfer',
      'Optimization and Operational Research',
      'Biomathematics and Mathematical Modelling',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3', // Cat with curious expression looking at something
  },
  {
    title: 'Chemistry',
    description: [
      'Pure Mathematics',
      'Computational Fluid Dynamics (CFD)',
      'Numerical Heat and Mass Transfer',
      'Optimization and Operational Research',
      'Biomathematics and Mathematical Modelling',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3', // Cat looking like it's experimenting
  },
  {
    title: 'Humanities & Social Science',
    description: [
      'Pure Mathematics',
      'Computational Fluid Dynamics (CFD)',
      'Numerical Heat and Mass Transfer',
      'Optimization and Operational Research',
      'Biomathematics and Mathematical Modelling',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3', // Cat being social with another cat
  },
];

export default function Goals() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-foreground">
          Thematic Areas of Conference
        </h2>

        <div className="space-y-16 md:space-y-28 lg:space-y-32">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 relative group">
                <div
                  className={`relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl 
                    transition-transform duration-500 ease-out hover:scale-[1.02]
                    ${index % 2 === 0 ? 'rotate-2 hover:rotate-0' : '-rotate-2 hover:rotate-0'}
                  `}
                >
                  <Image
                    src={goal.imageUrl}
                    alt={`${goal.title} research area`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 group-hover:bg-black/10" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 md:px-4 lg:px-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                  {goal.title}
                </h3>
                <ul className="space-y-3 md:space-y-4 text-muted-foreground">
                  {goal.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 text-primary">•</span>
                      <span className="text-base md:text-lg lg:text-xl leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
