import Landing from '@/pages/Landing';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Theme tokens demo</h1>
          <ThemeToggle />
        </header>

        {/* Debug block: raw CSS variable to verify tokens */}
        <div
          style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
          className="rounded-md p-3"
        >
          Inline var(--primary) test (should be colored)
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg p-4 bg-primary text-primary-foreground">
            bg-primary / text-primary-foreground
          </div>
          <div className="rounded-lg p-4 bg-secondary text-secondary-foreground">
            bg-secondary / text-secondary-foreground
          </div>
          <div className="rounded-lg p-4 bg-accent text-accent-foreground">
            bg-accent / text-accent-foreground
          </div>
          <div className="rounded-lg p-4 bg-muted text-muted-foreground">
            bg-muted / text-muted-foreground
          </div>
          <div className="rounded-lg p-4 bg-destructive text-destructive-foreground">
            bg-destructive / text-destructive-foreground
          </div>
          <div className="rounded-lg p-4 bg-card text-card-foreground border border-border">
            bg-card / text-card-foreground + border-border
          </div>
        </section>

        <section className="space-y-3">
          <div className="rounded-lg p-4 bg-popover text-popover-foreground border border-border">
            bg-popover / text-popover-foreground
          </div>
          <div className="flex items-center gap-3">
            <input
              placeholder="Input using tokens"
              className="w-full rounded-md border border-input bg-background text-foreground px-3 py-2 focus:outline-none focus:ring-2 ring-offset-0 focus:ring-ring"
            />
            <button className="rounded-md bg-primary text-primary-foreground px-4 py-2">
              Primary Button
            </button>
          </div>
        </section>

        <section className="pt-6">
          <Landing params="Landing:" />
        </section>
      </div>
    </div>
  );
}
