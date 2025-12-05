import Registration from '@/modules/registration/pages/Registration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conference Registration - Register Now for ICESGE-2025 | ACS Youth Summit',
  description:
    'Register for the 1st International Conference on Environmental Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025). Registration deadline: 2 December, 2025.',
  openGraph: {
    title: 'Conference Registration - Register Now for ICESGE-2025',
    description: 'Register for ICESGE-2025. Registration deadline: 2 December, 2025.',
  },
};

export default function Page() {
  return (
    <>
      <Registration />
    </>
  );
}
