import HomePage from '@/modules/home/pages/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICESGE-2025 | ACS Bangladesh Youth Summit - Environmental Sustainability Conference',
  description:
    'Welcome to the 1st International Conference on Environmental Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025). Join us for this groundbreaking conference highlighting Chemistry in advancing Modern Science, Engineering, Technology, and Sustainable Development.',
  openGraph: {
    title: 'ICESGE-2025 | ACS Bangladesh Youth Summit',
    description:
      'Welcome to the 1st International Conference on Environmental Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025).',
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomePage />
    </div>
  );
}
