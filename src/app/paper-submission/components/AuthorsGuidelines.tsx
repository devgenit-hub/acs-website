import Link from 'next/link';

export default function AuthorsGuidelines() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 text-center mb-6">
        Author Guidelines
      </h2>

      <ul className="space-y-4 text-gray-700 leading-relaxed">
        <li>
          <strong>Paper Template:</strong> Papers should be written following the{' '}
          <span className="italic">“Conference template (A4 size)”</span> and the guidelines
          therein.
        </li>
        <li>
          <strong>File type and size:</strong> Author submission should be done through{' '}
          <span className="italic">“Microsoft CMT”</span>. Here is a{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            link
          </Link>{' '}
          how to create a CMT account. File size should not exceed 3 MB and should be uploaded as a
          single PDF file.
        </li>
      </ul>
    </section>
  );
}
