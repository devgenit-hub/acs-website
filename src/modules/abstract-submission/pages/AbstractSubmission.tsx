import AuthorsGuidelines from '@/modules/abstract-submission/components/AuthorsGuidelines';
import PeerReviewPolicy from '@/modules/abstract-submission/components/PeerReviewPolicy';
import PresentationGuidelines from '@/modules/abstract-submission/components/PresentationGuidelines';
import SubmissionOfAbstract from '@/modules/abstract-submission/components/SubmissionOfAbstract';
import TemplateForAbstract from '@/modules/abstract-submission/components/TemplateForAbstract';

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
