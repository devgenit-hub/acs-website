import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';

export default function TemplateForAbstract() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      {/* Header */}
      <header>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
          Template for Abstract
        </h2>
      </header>

      {/* Download Link */}
      <nav className="text-center mt-10" aria-label="Download template">
        <Link
          href="/docs/template.docx"
          download="Abstract_Template.docx"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/90 transition-all hover:cursor-pointer"
        >
          <span className="flex items-center gap-2">
            Click Here to Download the Template <BiDownload />
          </span>
        </Link>
      </nav>
    </section>
  );
}
