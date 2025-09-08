import React from 'react';

export default function SubmissionOfFullPaper() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
        Submission of Full Paper
      </h2>

      {/* Instructions */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
        Authors are instructed to submit the full paper in the designated format electronically
        through the online submission process. Papers should be limited to{' '}
        <strong>twelve (12) pages</strong>, including figures and references. Each article will
        undergo a <strong>double-blind peer review</strong> process, evaluating technical quality,
        originality, and clarity of presentation. The final decision will be made by the technical
        committee based on reviewer feedback. The full paper template is provided here:{' '}
        <a href="#" className="text-accent font-medium hover:underline">
          Click Here
        </a>
      </p>

      {/* Submission CTA */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block text-primary font-bold text-xl hover:text-primary/80 transition-colors"
        >
          Click Here for Submission
        </a>
      </div>
    </section>
  );
}
