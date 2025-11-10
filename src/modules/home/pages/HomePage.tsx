// import KeynoteSpeakers from '@/modules/home/components/KeynoteSpeakers';
import Scope from '@/modules/home/components/Scope';
import HeroCarousel from '@/modules/home/components/HeroCarousel';
import Partners from '@/modules/home/components/Partners';
import WelcomeMessage from '@/modules/home/components/WelcomeMessage';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <WelcomeMessage />
      <Scope />
      {/* <KeynoteSpeakers /> */}
      <Partners />
    </>
  );
}
