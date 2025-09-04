import ConferenceProceedings from '@/components/call-for-paper/ConferenceProceedings';
import ContactUs from '@/components/call-for-paper/ContactUs';
import Flyer from '@/components/call-for-paper/Flyer';
import Transport from '@/components/call-for-paper/Transport';
import Scopes from '@/components/common/Scope';
import Sponsors from '@/components/call-for-paper/Sponsors';

export default function CallForPaper() {
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
