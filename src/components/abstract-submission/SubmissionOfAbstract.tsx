import Link from 'next/link';
import { LuSend } from 'react-icons/lu';

export default function SubmissionOfAbstract() {
  return (
    <section className="container mx-auto max-w-3xl px-6 pt-16 md:pt-20 lg:pt-24">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
        Submission of Abstract
      </h2>

      {/* Instructions */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
        The abstract shall be written in and be written in Times New Roman, single line spacing and
        in accordance with the following guidelines:
      </p>

      {/* Abstract Sections */}
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
        <li>Title (16 font size, Bold)</li>
        <li>Author Name (12 font size)</li>
        <li>Author Affiliation (10 font size, Italic)</li>
        <li>Full Abstract (250-300 Words) (12 font size)</li>
        <li>Keywords (Maximum 5) (12 font size)</li>
        <li>Name of the presenting author (underlined) with email address (12 font size)</li>
      </ol>

      {/* Submission CTA */}
      <div className="text-center mt-10">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwDo5l1M1Chi8WWqHkO-BeeEn9kciDx7m78YBxenjCEJaseA/viewform"
          target="_blank"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition-all hover:cursor-pointer"
        >
          <span className="flex items-center gap-2">
            Click Here for Submission <LuSend />
          </span>
        </Link>
      </div>
    </section>
  );
}
