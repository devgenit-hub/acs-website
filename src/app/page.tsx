import Landing from '@/pages/Landing';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 space-y-8">
        <header className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Start from here</h1>
        </header>

        <section className="pt-6">
          <Landing params="Landing:" />
        </section>
      </div>
    </div>
  );
}
