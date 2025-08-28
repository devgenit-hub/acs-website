import Goals from './components/Goals';
import HeroCarousel from './components/HeroCarousel';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import PublicationPartner from './components/PublicationPartner';
import Sponsors from './components/Sponsors';
import WelcomeMessage from './components/WelcomeMessage';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WelcomeMessage />
      <Goals />
      <KeynoteSpeakers />
      <PublicationPartner />
      <Sponsors />
    </>
  );
}
