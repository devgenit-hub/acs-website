import AuthorsGuidelines from './components/AuthorsGuidelines';
import PeerReviewPolicy from './components/PeerReviewPolicy';
import PresentationGuidelines from './components/PresentationGuidelines';
import SubmissionOfAbstract from './components/SubmissionOfAbstract';
import SubmissionOfFullPaper from './components/SubmissionOfFullPaper';
import TemplateForAbstract from './components/TemplateForAbstract';

export default function page() {
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
