// app/components/PeerReviewPolicy.tsx
import React from 'react';

export default function PeerReviewPolicy() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 text-center mb-6">
        Peer Review Policy
      </h2>

      <p className="text-gray-700 leading-relaxed text-justify">
        We invite the submission of technical papers that offer long-term value and contribute to
        the advancement of the scientific community. To ensure that all published work can be
        reliably referenced and cited, we have implemented a thorough peer-review system. Qualified
        reviewers, selected by conference organizers and editors based on their expertise, will
        evaluate each submission. Reviews will be conducted following ethical guidelines and
        industry standards. All papers will go through a double-blind review, focusing on
        originality, technical accuracy, and clarity. The technical committee will make final
        decisions based on reviewer feedback. This comprehensive peer-review process guarantees the
        quality and credibility of the submitted papers.
      </p>
    </section>
  );
}
