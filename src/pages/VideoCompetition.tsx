import PaymentInfo from '@/components/registration/PaymentInfo';
import VideoCompetitionRules from '@/components/video-competition/VideoCompetitionRules';

export default function VideoCompetition() {
  return (
    <main className="bg-background">
      <VideoCompetitionRules />
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <PaymentInfo />
        </div>
      </section>
    </main>
  );
}
