import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/images/about-us/Executive/our_team.jpg', alt: 'Cute cat 1' },
  { id: 2, src: '/images/about-us/Executive/our_team.jpg', alt: 'Cute cat 2' },
  { id: 3, src: '/images/about-us/Executive/our_team.jpg', alt: 'Cute cat 3' },
  { id: 4, src: '/images/about-us/Executive/our_team.jpg', alt: 'Cute cat 4' },
  { id: 5, src: '/images/about-us/Executive/our_team.jpg', alt: 'Cute cat 5' },
  { id: 6, src: '/images/about-us/Executive/our_team.jpg', alt: 'Cute cat 6' },
];

export default function EventGallery() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 px-4 md:px-8 lg:px-16 container mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-primary text-center mb-6 md:mb-10 drop-shadow-md">
        Event Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative h-[300px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
