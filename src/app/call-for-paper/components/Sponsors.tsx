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
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
            Sponsors
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We greatly acknowledge any type of sponsorship support and encouragement from our
            sponsors.
          </p>
        </div>

        {/* Sponsor Categories */}
        <div className="space-y-16">
          {sponsorCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-green-700 inline-block relative">
                  {category.title}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-100 rounded-full -mb-2" />
                </h3>
                {category.description && (
                  <p className="text-gray-600 mt-2">{category.description}</p>
                )}
              </div>

              {/* Sponsors Grid */}
              <div className="flex justify-center w-full">
                <div className="flex flex-wrap justify-center gap-8 w-full">
                  {category.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 
                                border border-green-100 hover:border-green-200 
                                shadow-lg hover:shadow-xl transition-all duration-300
                                w-full max-w-sm"
                    >
                      <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={sponsor.imageUrl}
                          alt={sponsor.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                        {sponsor.name}
                      </h4>
                      {sponsor.description && (
                        <p className="text-gray-600 mt-2">{sponsor.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
