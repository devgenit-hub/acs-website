import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';

export default function TemplateForAbstract() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-16 md:py-20 lg:py-24">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
        Template for Abstract
      </h2>

      {/* Download Link */}
      <div className="text-center mt-10">
        <Link
          href="/docs/template.docx"
          download="Abstract_Template.docx"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition-all hover:cursor-pointer"
        >
          <span className="flex items-center gap-2">
            Click Here to Download the Template <BiDownload />
          </span>
        </Link>
      </div>
    </section>
  );
}
