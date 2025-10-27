// import KeynoteSpeakers from '@/components/common/KeynoteSpeakers';
import Scope from '@/components/home/Scope';
import HeroCarousel from '@/components/home/HeroCarousel';
import Partners from '@/components/home/Partners';
import WelcomeMessage from '@/components/home/WelcomeMessage';

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
