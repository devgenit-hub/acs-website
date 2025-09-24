export default function TemplateForAbstract() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-16 md:py-20 lg:py-24">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
        Template for Abstract
      </h2>

      {/* Download Link */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block text-accent font-bold text-xl hover:text-accent/80 transition-colors"
        >
          Click Here to Download the Template
        </a>
      </div>
    </section>
  );
}
