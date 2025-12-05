import PaymentInfo from '@/modules/registration/components/PaymentInfo';
import VideoCompetitionRules from '@/modules/video-competition/components/VideoCompetitionRules';

export default function VideoCompetition() {
  return (
    <main className="bg-background">
      <VideoCompetitionRules />
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <PaymentInfo showBankSection={false} />
        </div>
      </section>
    </main>
  );
}
