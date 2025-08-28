import Link from 'next/link';

export default function SubmissionOfAbstract() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 text-center mb-6">
        Submission of Abstract
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify">
        A{' '}
        <Link href="#" className="text-blue-600 hover:underline">
          one-page extended abstract
        </Link>{' '}
        (within <span className="font-semibold">500 words</span>) should contain the followings and
        shall be written in font Times New Roman, single line spacing, 10 font size.
      </p>

      <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
        <li>Title, author’s name and affiliation</li>
        <li>Brief abstract (within 100 words)</li>
        <li>Keywords (maximum 5)</li>
        <li>Introduction (not more than 100 words)</li>
        <li>Methodology (within 150 words)</li>
        <li>
          Findings (within 100 words) [supporting no more than two figures and two tables which are
          not included word count]
        </li>
        <li>Conclusions (within 50 words)</li>
        <li>References (maximum 4)</li>
      </ol>

      <div className="text-center mt-10">
        <Link href="#" className="text-green-600 font-bold text-xl hover:underline">
          Click Here for Submission
        </Link>
      </div>
    </section>
  );
}
