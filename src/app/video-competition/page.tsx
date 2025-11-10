import VideoCompetition from '@/modules/video-competition/pages/VideoCompetition';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Competition - Participate & Win Prizes | ICESGE-2025',
  description:
    'Participate in the video competition for ICESGE-2025. Showcase your creativity and win exciting prizes. Learn about competition rules, guidelines, and submission process.',
  openGraph: {
    title: 'Video Competition - Participate & Win Prizes | ICESGE-2025',
    description:
      'Participate in the video competition for ICESGE-2025. Showcase your creativity and win exciting prizes.',
  },
};

export default function page() {
  return (
    <>
      <VideoCompetition />
    </>
  );
}
