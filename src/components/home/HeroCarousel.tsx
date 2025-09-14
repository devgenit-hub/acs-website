'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FC } from 'react';

interface Images {
  link: string;
  alt: string;
}

const images: Images[] = [
  {
    link: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    alt: 'Orange cat with blue eyes looking at camera',
  },
  {
    link: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4',
    alt: 'Gray cat relaxing on wooden surface',
  },
  {
    link: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d',
    alt: 'Close up of white cat with mesmerizing green eyes',
  },
  {
    link: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5',
    alt: 'Tabby cat sitting gracefully against dark background',
  },
  {
    link: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec',
    alt: 'Curious kitten looking up with playful expression',
  },
];

const HeroCarousel: FC = () => {
  return (
    <div>
      <div className="w-full min-h-screen relative">
        {/* Fixed Text Overlay */}
        <div className="absolute top-0 left-[50px] right-[50px] h-full flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center text-white sm:px-6 max-w-6xl pointer-events-auto">
            {/* Main Title */}
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-lg leading-tight">
              1st International Conference on Environmental Sustainability and Green Earth: ACS
              Bangladesh Youth Summit (ICESGE-2025)
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base md:text-xl lg:text-2xl mb-6 md:mb-8 drop-shadow-md font-medium opacity-90">
              Where Youth Leadership and Chemistry Unite for a Greener Earth
            </p>

            {/* Important Dates Section */}
            <div className="mb-8 space-y-3">
              <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col sm:flex-row justify-center items-center flex-wrap space-x-2">
                  <span className="font-semibold text-sm sm:text-base">Registration Deadline:</span>
                  <span className="">1 November, 2025</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col sm:flex-row justify-center items-center flex-wrap space-x-2">
                  <span className="font-semibold text-sm sm:text-base">
                    Abstract Submission Deadline:
                  </span>
                  <span className="">20 November, 2025</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-2 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col sm:flex-row justify-center items-center flex-wrap space-x-2">
                  <span className="font-semibold text-sm sm:text-base">
                    Notification of Acceptance:
                  </span>
                  <span className="">1 December, 2025</span>
                </div>
              </div>
            </div>

            <div className="hidden xl:inline-block">
              <Actions />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          className="h-full"
          renderArrowPrev={(clickHandler) => (
            <button
              onClick={clickHandler}
              className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/70 text-white transition-all cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
            >
              ←
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button
              onClick={clickHandler}
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/70 text-white transition-all cursor-pointer rounded-full w-10 h-10 flex items-center justify-center"
            >
              →
            </button>
          )}
        >
          {images.map((image, idx) => (
            <div key={idx} className="relative min-h-screen">
              <div className="absolute inset-0 bg-black/60 z-[1]" />
              <Image
                src={image.link}
                alt={image.alt}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw 70vh"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="xl:hidden w-full mx-auto mt-16">
        <Actions />
      </div>
    </div>
  );
};

export default HeroCarousel;

const Actions = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 text-center">
      {/* Conference Date Highlight */}
      <div className="mb-8">
        <div className="inline-block bg-black/60 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-4 text-white">
          <div className="rounded-lg px-3 md:px-4 py-1.5 md:py-2">
            <span className="font-semibold text-xs sm:text-sm md:text-base">Conference Date:</span>
            <span className="ml-1 md:ml-2 text-accent font-semibold text-xs sm:text-sm md:text-base">
              19 December, 2025
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap grow-0  gap-4 justify-center">
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg">
          Template for Abstract
        </button>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg">
          Submit Abstract Now
        </button>
      </div>
    </div>
  );
};
