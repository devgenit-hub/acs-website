import Link from 'next/link';

export default function AuthorsGuidelines() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
        Author Guidelines
      </h2>

      {/* Guidelines List */}
      <ul className="space-y-6 text-muted-foreground leading-relaxed">
        <li>
          <strong className="text-foreground">📄 Abstract Template:</strong> Abstracts should be
          written using the <span className="italic">Conference Template (A4 size)</span> and must
          strictly follow the formatting instructions provided.
        </li>

        <li>
          <strong className="text-foreground">📂 File Type & Size:</strong> Submissions must be made
          through <span className="italic">Microsoft CMT</span>. File size should not exceed{' '}
          <span className="font-medium">3 MB</span> and must be uploaded as a single PDF file.
        </li>
      </ul>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Link
          href="#"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition-all"
        >
          Download Paper Template
        </Link>
      </div>
    </section>
  );
}
