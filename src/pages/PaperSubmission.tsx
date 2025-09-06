import AuthorsGuidelines from '@/components/paper-submission/AuthorsGuidelines';
import PeerReviewPolicy from '@/components/paper-submission/PeerReviewPolicy';
import PresentationGuidelines from '@/components/paper-submission/PresentationGuidelines';
import SubmissionOfAbstract from '@/components/paper-submission/SubmissionOfAbstract';
import SubmissionOfFullPaper from '@/components/paper-submission/SubmissionOfFullPaper';
import TemplateForAbstract from '@/components/paper-submission/TemplateForAbstract';

export default function PaperSubmission() {
  return (
    <>
      <AuthorsGuidelines />
      <PeerReviewPolicy />
      <SubmissionOfAbstract />
      <SubmissionOfFullPaper />
      <PresentationGuidelines />
      <TemplateForAbstract />
    </>
  );
}
