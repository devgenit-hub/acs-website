import Scopes from '@/components/Scope';
import ConferenceProceedings from './components/ConferenceProceedings';
import Flyer from './components/Flyer';
import Sponsors from './components/Sponsors';
import Transport from './components/Transport';
import ContactUs from './components/ContactUs';

export default function page() {
  return (
    <>
      <Scopes />
      <ConferenceProceedings />
      <Flyer />
      <Sponsors />
      <Transport />
      <ContactUs />
    </>
  );
}
