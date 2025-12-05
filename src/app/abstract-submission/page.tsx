import AbstractSubmission from '@/modules/abstract-submission/pages/AbstractSubmission';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abstract Submission Portal - Submit Your Abstract Online | ICESGE-2025',
  description:
    'Submit your abstract for the 1st International Conference on Environmental Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025). View guidelines, templates, and submission instructions. Abstract submission deadline: 24 November, 2025.',
  openGraph: {
    title: 'Abstract Submission Portal - Submit Your Abstract Online | ICESGE-2025',
    description:
      'Submit your abstract for ICESGE-2025. View guidelines, templates, and submission instructions. Deadline: 24 November, 2025.',
  },
};

export default function Page() {
  return (
    <>
      <AbstractSubmission />
    </>
  );
}
