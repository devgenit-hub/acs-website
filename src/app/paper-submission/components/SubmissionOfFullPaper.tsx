import React from 'react';

export default function SubmissionOfFullPaper() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 text-center mb-6">
        Submission of Full Paper
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify">
        The authors are instructed to submit the full paper in the designated format electronically
        through an online process. Paper submissions should be limited to twelve (12) pages,
        including figures and references. Every article will be subjected to a double-blind peer
        review procedure based on technical quality, originality, and clarity of presentation. The
        final decision will be made by the technical committee considering the reviewer&apos;s
        feedback. The full paper template is provided at the following link:{' '}
        <a href="#" className="text-green-600 hover:underline">
          Click Here
        </a>
      </p>

      <div className="text-center mt-10">
        <a href="#" className="text-green-600 font-bold text-xl hover:underline">
          Click Here for Submission
        </a>
      </div>
    </section>
  );
}
