import React from 'react';

export default function PeerReviewPolicy() {
  return (
    <section className="container mx-auto max-w-3xl px-6 mb-24">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
        Peer Review Policy
      </h2>

      {/* Policy Text */}
      <p className="text-muted-foreground leading-relaxed text-justify space-y-4">
        We invite submissions of technical abstracts that offer long-term value and contribute to
        the advancement of the scientific community.
      </p>

      <p className="text-muted-foreground leading-relaxed text-justify space-y-4">
        To ensure all published work can be reliably referenced and cited, we implement a thorough
        peer-review system. Qualified reviewers, carefully selected by conference organizers and
        editors based on their expertise, will evaluate each submission following ethical guidelines
        and industry standards.
      </p>

      <p className="text-muted-foreground leading-relaxed text-justify space-y-4">
        All abstracts undergo a <strong>double-blind review</strong>, focusing on originality,
        technical accuracy, and clarity. The technical committee will make final decisions based on
        reviewer feedback. This comprehensive process guarantees the quality and credibility of the
        submitted abstracts.
      </p>
    </section>
  );
}
