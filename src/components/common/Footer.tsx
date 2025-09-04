export default function Footer() {
  return (
    <footer className="pb-6 px-4 border-t border-border/50">
      <div className="relative overflow-hidden rounded-lg p-4 bg-card">
        <p className="text-center text-sm text-muted-foreground">
          All rights reserved by <span className="font-bold">ACS</span> © 2024 - 2025.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Developed by{' '}
          <a
            href="https://www.devgenit.com/"
            target="_blank"
            className="font-bold text-primary hover:text-ring transition-colors"
          >
            DevGenit
          </a>
        </p>
      </div>
    </footer>
  );
}
