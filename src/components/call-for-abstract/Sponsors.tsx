import Image from 'next/image';

interface SponsorCategory {
  title: string;
  description?: string;
  sponsors: Sponsor[];
}

interface Sponsor {
  imageUrl: string;
  name: string;
  description?: string;
}

const sponsorCategories: SponsorCategory[] = [
  {
    title: 'Financial Sponsors',
    sponsors: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3',
        name: 'Pawsome Financial Group',
        description: 'Premier Financial Services',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3',
        name: 'Whiskers Investment Bank',
        description: 'Global Investment Solutions',
      },
    ],
  },
  {
    title: 'Technical Sponsors',
    sponsors: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3',
        name: 'CatTech Solutions',
        description: 'Leading Technology Provider',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3',
        name: 'Purr Computing',
        description: 'Advanced Computing Services',
      },
    ],
  },
  {
    title: 'Academic Partners',
    sponsors: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3',
        name: 'Feline University',
        description: 'Center for Excellence',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3',
        name: 'Whiskers Institute',
        description: 'Research & Development',
      },
    ],
  },
];

export default function Sponsors() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 
                         bg-clip-text text-primary mb-4 px-2"
          >
            Sponsors
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto  leading-relaxed px-4">
            We greatly acknowledge any type of sponsorship support and encouragement from our
            sponsors.
          </p>
        </div>

        {/* Sponsor Categories */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {sponsorCategories.map((category, idx) => (
            <div key={idx} className="space-y-6 md:space-y-8">
              {/* Category Header */}
              <div className="text-center px-4">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary 
                              inline-block relative group/title"
                >
                  {category.title}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                                 from-primary/20 to-accent/20 rounded-full -mb-2
                                 group-hover/title:from-primary/40 group-hover/title:to-accent/40
                                 transition-all duration-300"
                  />
                </h3>
                {category.description && (
                  <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Sponsors Grid - Fixed Alignment */}
              <div className="w-full">
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                             gap-4 md:gap-6 lg:gap-8 
                             justify-items-center items-stretch
                             px-4 md:px-8"
                >
                  {category.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-card/70 backdrop-blur-sm rounded-xl p-4 md:p-6 
                                border border-border hover:border-primary/30 
                                shadow-lg hover:shadow-xl transition-all duration-500 ease-out
                                w-full max-w-sm min-h-[300px] flex flex-col
                                hover:transform hover:scale-[1.03] hover:-translate-y-2
                                hover:bg-card/90"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Background gradient overlay */}
                      <div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br 
                                     from-primary/5 to-accent/5 opacity-0 
                                     group-hover:opacity-100 transition-opacity duration-500"
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Image Container */}
                        <div
                          className="aspect-square relative mb-4 rounded-lg overflow-hidden 
                                       shadow-md group-hover:shadow-lg transition-shadow duration-300
                                       flex-shrink-0"
                        >
                          <Image
                            src={sponsor.imageUrl}
                            alt={sponsor.name}
                            fill
                            className="object-cover transition-transform duration-700 ease-out 
                                      group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          />
                          {/* Image Overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-primary/60 
                                         via-primary/20 to-transparent opacity-0 
                                         group-hover:opacity-100 transition-opacity duration-500"
                          />

                          {/* Hover Content Overlay */}
                          <div
                            className="absolute inset-0 flex items-center justify-center 
                                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <div
                              className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1
                                           transform translate-y-4 group-hover:translate-y-0 
                                           transition-transform duration-300"
                            >
                              <span className="text-xs md:text-sm font-medium text-primary">
                                View Details
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Sponsor Info - Flexible content area */}
                        <div className="space-y-2 flex-grow flex flex-col justify-center">
                          <h4
                            className="text-lg md:text-xl font-semibold text-foreground 
                                        group-hover:text-primary transition-colors duration-300
                                        group-hover:transform group-hover:translate-x-1
                                        text-center"
                          >
                            {sponsor.name}
                          </h4>
                          {sponsor.description && (
                            <p
                              className="text-muted-foreground
                                         group-hover:text-foreground/90 transition-colors duration-300
                                         group-hover:transform group-hover:translate-x-1
                                         text-center"
                              style={{ transitionDelay: '100ms' }}
                            >
                              {sponsor.description}
                            </p>
                          )}
                        </div>

                        {/* Decorative Elements */}
                        <div className="mt-4 flex justify-center flex-shrink-0">
                          <div
                            className="w-12 h-0.5 bg-gradient-to-r from-transparent 
                                         via-primary/30 to-transparent group-hover:via-accent/50
                                         group-hover:w-16 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Divider */}
              {idx < sponsorCategories.length - 1 && (
                <div className="flex justify-center mt-12 md:mt-16">
                  <div
                    className="w-24 md:w-32 lg:w-40 h-px bg-gradient-to-r 
                                 from-transparent via-border to-transparent"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
