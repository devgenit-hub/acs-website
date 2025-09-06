import KeynoteSpeakers from '@/components/common/KeynoteSpeakers';
import Scope from '@/components/common/Scope';
import HeroCarousel from '@/components/home/HeroCarousel';
import PublicationPartner from '@/components/home/PublicationPartner';
import Sponsors from '@/components/home/Sponsors';
import WelcomeMessage from '@/components/home/WelcomeMessage';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <WelcomeMessage />
      <Scope />
      <KeynoteSpeakers />
      <PublicationPartner />
      <Sponsors />
    </>
  );
}
