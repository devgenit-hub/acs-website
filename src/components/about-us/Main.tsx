import { aboutUs } from '@/assets';
import Image from 'next/image';

export default function Main() {
  return (
    <section className="pt-24 md:pt-24 px-4 md:px-8 lg:px-16 container mx-auto mb-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-primary text-center mb-6 md:mb-10 drop-shadow-md">
        What is ACS DU Chapter?
      </h1>

      {/* Paragraph */}
      <div className="leading-relaxed md:leading-loose text-justify max-w-4xl mx-auto mb-10">
        ACS Student Chapter, University of Dhaka is the first student chapter of American Chemical
        Society in Bangladesh. The chapter was established by 10 dedicated students of Dept. of
        Applied Chemistry and Chemical Engineering, University of Dhaka with the kind assistance of
        the faculty advisor Dr. Mohammad Ismail. The main goal of this chapter is to enrich students
        with all relevant knowledge and skills along with academic education so that they can be
        leading people in chemical and related science. The objectives of this chapter are:
        <ul className="list-disc list-inside mt-4 space-y-1 pl-4 md:pl-8">
          <li>
            To afford opportunity for students of chemical and related science to work in a common
            platform for self and others development
          </li>
          <li>To develop intellectual ability of students through professional association</li>
          <li>To provoke students&apos; research interest</li>
          <li>To arrange professional trainings, workshops, and seminars</li>
          <li>Overall to foster a professional spirit among the members and students</li>
        </ul>
      </div>

      {/* Image */}
      <Image
        width={500}
        height={300}
        src={aboutUs}
        alt="About Us"
        className="w-full md:w-4/5 mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
      />
    </section>
  );
}
