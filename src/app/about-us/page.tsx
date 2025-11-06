import AboutUs from '@/pages/AboutUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - ACS DU Students Chapter & Organizing Committee | ICESGE-2025',
  description:
    'Learn about the American Chemical Society (ACS) DU Students Chapter at University of Dhaka and the ACS Bangladesh Chapter. Discover our mission to advance chemistry education and research for a sustainable future.',
  openGraph: {
    title: 'About Us - ACS DU Students Chapter & Organizing Committee | ICESGE-2025',
    description:
      'Learn about the American Chemical Society (ACS) DU Students Chapter at University of Dhaka and the ACS Bangladesh Chapter.',
  },
};

export default function Page() {
  return (
    <>
      <AboutUs />
    </>
  );
}
