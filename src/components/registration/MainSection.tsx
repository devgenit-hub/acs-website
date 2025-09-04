export default function MainSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Conference Registration</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Presenting authors must register to present their papers at the conference. Accepted
            articles will be included in the conference proceedings, with a printed abstract book
            and also available as post-conference e-proceedings on the website. Additionally, there
            will be an option for poster presentations.
          </p>

          {/* Registration Deadline */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-destructive">
              Registration Deadline: 1st October, 2025
            </p>
          </div>

          {/* Registration Button */}
          <a
            href="https://your-registration-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            CLICK HERE FOR REGISTRATION
          </a>
        </div>
      </div>
    </section>
  );
}
