import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/event-gallery/WhatsApp Image 2025-11-06 at 15.59.25_716190f3.jpg', alt: '' },
  { id: 2, src: '/event-gallery/WhatsApp Image 2025-11-06 at 15.59.26_3dcee432.jpg', alt: '' },
  { id: 3, src: '/event-gallery/WhatsApp Image 2025-11-06 at 15.59.26_6dcd5fb4.jpg', alt: '' },
];

export default function EventGallery() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <header>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-primary text-center mb-6 md:mb-10 drop-shadow-md">
            Event Gallery
          </h2>
        </header>

        <figure className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
        </figure>
      </div>
    </section>
  );
}
