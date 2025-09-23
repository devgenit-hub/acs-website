import AuthorsGuidelines from '@/components/abstract-submission/AuthorsGuidelines';
import PeerReviewPolicy from '@/components/abstract-submission/PeerReviewPolicy';
import PresentationGuidelines from '@/components/abstract-submission/PresentationGuidelines';
import SubmissionOfAbstract from '@/components/abstract-submission/SubmissionOfAbstract';
import TemplateForAbstract from '@/components/abstract-submission/TemplateForAbstract';

export default function abstractSubmission() {
  return (
    <>
      <AuthorsGuidelines />
      <PeerReviewPolicy />
      <SubmissionOfAbstract />
      <PresentationGuidelines />
      <TemplateForAbstract />
    </>
  );
}
