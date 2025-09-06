import Link from 'next/link';

export default function SubmissionOfAbstract() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
        Submission of Abstract
      </h2>

      {/* Instructions */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
        A{' '}
        <Link href="#" className="text-accent font-medium hover:underline">
          one-page extended abstract
        </Link>{' '}
        (within <span className="font-semibold">500 words</span>) should include the following
        sections and be written in <span className="italic">Times New Roman</span>, single line
        spacing, 10 font size.
      </p>

      {/* Abstract Sections */}
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
        <li>Title, author’s name, and affiliation</li>
        <li>Brief abstract (within 100 words)</li>
        <li>Keywords (maximum 5)</li>
        <li>Introduction (not more than 100 words)</li>
        <li>Methodology (within 150 words)</li>
        <li>
          Findings (within 100 words) [supporting no more than two figures and two tables, not
          included in word count]
        </li>
        <li>Conclusions (within 50 words)</li>
        <li>References (maximum 4)</li>
      </ol>

      {/* Submission CTA */}
      <div className="text-center mt-10">
        <Link
          href="#"
          className="inline-block text-primary font-bold text-xl hover:text-primary/80 transition-colors"
        >
          Click Here for Submission
        </Link>
      </div>
    </section>
  );
}
