import Link from 'next/link';

export default function MainSection() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-24 px-4 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-10">
            Conference Registration
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Presenting authors must register to present their abstracts at the conference. Accepted
            articles will be included in the conference proceedings, with a printed abstract book
            and also available as post-conference e-proceedings on the website. Additionally, there
            will be an option for poster presentations.
          </p>

          {/* Registration Deadline */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-destructive">
              Early Bird Registration Deadline: 30 November, 2025 <br />
              Regular Registration Deadline: 7 December, 2025
            </p>
          </div>

          {/* Registration Button */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdzK-cXInAVXpICEWEsK0CXFgNo8X7MAxMC7xjMk0Xj1fETIQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            CLICK HERE FOR REGISTRATION
          </Link>
        </div>
      </div>
    </section>
  );
}
