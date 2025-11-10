import OnlineAbstract from '@/pages/OnlineAbstract';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call for Abstract - Submit Your Research Paper | ICESGE-2025',
  description:
    'Submit your abstract for the 1st International Conference on Environmental Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025). Abstract submission deadline: 22 November, 2025.',
  openGraph: {
    title: 'Call for Abstract - Submit Your Research Paper | ICESGE-2025',
    description: 'Submit your abstract for ICESGE-2025. Deadline: 22 November, 2025.',
  },
};

export default function Page() {
  return (
    <>
      <OnlineAbstract />
    </>
  );
}
