import ImportantDatesPage from '@/pages/ImportantDates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Important Dates',
  description:
    'Important dates for ICESGE-2025: Conference Date - 13 December, 2025. Abstract Submission Deadline - 15 November, 2025. Registration Deadline - 30 November, 2025. Notification of Acceptance - 1 December, 2025.',
  openGraph: {
    title: 'Important Dates | ACS Youth Summit',
    description:
      'Important dates for ICESGE-2025: Conference on 13 December, 2025 at Asiatic Society of Bangladesh.',
  },
};

export default function Page() {
  return (
    <>
      <ImportantDatesPage />
    </>
  );
}
