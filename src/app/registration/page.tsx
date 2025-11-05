import Registration from '@/pages/Registration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registration',
  description:
    'Register for the 1st International Conference on Environmental Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025). Registration deadline: 30 November, 2025.',
  openGraph: {
    title: 'Registration | ACS Youth Summit',
    description: 'Register for ICESGE-2025. Registration deadline: 30 November, 2025.',
  },
};

export default function Page() {
  return (
    <>
      <Registration />
    </>
  );
}
