'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FC } from 'react';
import { herocarousel1, herocarousel2, herocarousel3 } from '@/assets';
import { FiDownload } from 'react-icons/fi';
import { LuSend } from 'react-icons/lu';
import '../styles/hero.css';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Images {
  link: string;
}

const images: Images[] = [
  {
    link: herocarousel1,
  },
  {
    link: herocarousel2,
  },
  {
    link: herocarousel3,
  },
];

const HeroCarousel: FC = () => {
  return (
    <section>
      <div className="w-full min-h-screen relative">
        {/* Fixed Text Overlay */}
        <div className="absolute top-0 left-0 right-[50px] h-full w-screen px-10 flex items-center justify-center z-10">
          <div className="text-center text-white sm:px-6 max-w-6xl">
            {/* Main Title */}
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 drop-shadow-lg leading-tight">
              1st International Conference on Environmental Sustainability and Green Earth: ACS
              Bangladesh Youth Summit (ICESGE-2025)
            </h1>
            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-xl mb-6 md:mb-8 drop-shadow-md font-medium opacity-90">
              Where Youth Leadership and Chemistry Unite for a Greener Earth
            </p>
            {/* Important Dates Section */}
            <div className="mb-8 space-y-3">
              <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col sm:flex-row justify-center items-center flex-wrap space-x-2 text-sm sm:text-base">
                  <span className="font-semibold text-sm sm:text-base">
                    Abstract Submission Deadline:
                  </span>
                  <span className="">22 November, 2025</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col sm:flex-row justify-center items-center flex-wrap space-x-2 text-sm sm:text-base">
                  <span className="font-semibold text-sm sm:text-base">
                    Notification of Acceptance:
                  </span>
                  <span className="">27 November, 2025</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-2 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col justify-center items-center space-y-1 text-sm sm:text-base">
                  <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <span className="font-semibold">Registration Deadline:</span>{' '}
                    <span>2 December, 2025</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Conference Date Highlight */}
            <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-8">
              <div className="inline-block bg-black/30 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-4 text-white">
                <div className="rounded-lg px-3 md:px-4 py-1.5 md:py-2">
                  <span className="font-semibold text-xs sm:text-sm md:text-base">
                    Conference Date:
                  </span>
                  <span className="ml-1 md:ml-2 text-accent font-semibold text-xs sm:text-sm md:text-base">
                    13 December, 2025
                  </span>
                </div>
              </div>
              <div className="inline-block bg-black/30 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-4 text-white">
                <div className="rounded-lg px-3 md:px-4 py-1.5 md:py-2">
                  <span className="font-semibold text-xs sm:text-sm md:text-base">Venue:</span>
                  <span className="ml-1 md:ml-2 text-accent font-semibold text-xs sm:text-sm md:text-base">
                    Asiatic Society of Bangladesh
                  </span>
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
            <IconButton
              onClick={clickHandler}
              sx={{
                position: 'absolute',
                left: { xs: 0, sm: '16px' },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                color: 'white',
                width: 40,
                height: 40,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          renderArrowNext={(clickHandler) => (
            <IconButton
              onClick={clickHandler}
              sx={{
                position: 'absolute',
                right: { xs: 0, sm: '16px' },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                color: 'white',
                width: 40,
                height: 40,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
        >
          {images.map((image, idx) => (
            <div key={idx} className="relative min-h-screen">
              <div className="absolute inset-0 bg-black/60 z-[1]" />
              <Image
                src={image.link}
                alt={`Conference venue image ${idx + 1}`}
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
    </section>
  );
};

export default HeroCarousel;

const Actions = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {/* Call To Action Buttons */}
      <div className="flex flex-wrap grow-0  gap-8 justify-center">
        <Link
          href="/docs/template.pdf"
          download="Abstract_Template.pdf"
          className="bg-accent hover:bg-accent/90 text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg flex items-center gap-2 bling-shadow"
        >
          <FiDownload />
          Template for Abstract
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwDo5l1M1Chi8WWqHkO-BeeEn9kciDx7m78YBxenjCEJaseA/viewform?usp=publish-editor"
          target="_blank"
          className="bg-accent hover:bg-accent/90 text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg flex items-center gap-2 bling-shadow"
        >
          <LuSend />
          Submit Abstract Now
        </Link>
      </div>
    </div>
  );
};
