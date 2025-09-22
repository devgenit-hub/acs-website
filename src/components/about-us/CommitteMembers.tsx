'use client';
import {
  kynotespeaker2,
  kynotespeaker3,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
} from '@/assets';
import Image from 'next/image';
import { FiPhone, FiMail } from 'react-icons/fi';

interface Advisor {
  name: string;
  title: string;
  affiliation: string;
  imageUrl: string;
}

const advisors: Advisor[] = [
  {
    name: 'Dr. Mohammad Shahruzzaman',
    title:
      'Associate Professor <br/> Applied Chemistry and Chemical Engineering <br/> University of Dhaka',
    affiliation: 'Faculty Advisor at ACS Student Chapter, DU',
    imageUrl: kynotespeaker2,
  },
  {
    name: 'Sadit Bihongo Malitha',
    title: 'Lecturer <br/> Applied Chemistry and Chemical Engineering <br/> University of Dhaka',
    affiliation: 'Faculty Co-Advisor at ACS Student Chapter, DU',
    imageUrl: kynotespeaker3,
  },
];

interface Member {
  name: string;
  position: string;
  mobile: string[];
  email: string;
  imageUrl: string;
}

const members: Member[] = [
  {
    name: 'Md. Rakibur Rahman',
    position: 'President',
    mobile: ['01518618583'],
    email: 'mdrakiburrahman039@gmail.com',
    imageUrl: m1,
  },
  {
    name: 'Md. Junayed Khan Ryan',
    position: 'Vice President',
    mobile: ['01763936336'],
    email: 'mdjkryan717@gmail.com',
    imageUrl: m2,
  },
  {
    name: 'Shakib Hasan Nirob',
    position: 'Treasurer',
    mobile: ['01631836017'],
    email: 'nirob1715@gmail.com',
    imageUrl: m3,
  },
  {
    name: 'Mahadesh Chandro Mondal',
    position: 'Secretary (Administrative)',
    mobile: ['01976608538'],
    email: 'being.am27@gmail.com',
    imageUrl: m4,
  },
  {
    name: 'Md. Jaber Ali',
    position: 'Secretary (Organizing)',
    mobile: ['01761612548'],
    email: 'mdjaber258420@gmail.com',
    imageUrl: m5,
  },
  {
    name: 'Md. Abdul Kadir',
    position: 'Secretary (Logistics Support)-1',
    mobile: ['01742109502'],
    email: 'abdulkadir.acce39@gmail.com',
    imageUrl: m6,
  },
  {
    name: 'Md. Rakibul Islam Rony',
    position: 'Secretary (Logistics Support)-2',
    mobile: ['01521746560'],
    email: 'rakib.rony.652@gmail.com',
    imageUrl: m7,
  },
  {
    name: 'Md. Mashrur Rahman Simanto',
    position: 'Secretary (Technical Assistance)-1',
    mobile: ['01317263956'],
    email: 'mashrursimanto19@gmail.com',
    imageUrl: m8,
  },
  {
    name: 'Sammam Majumder',
    position: 'Secretary (Technical Assistance)-2',
    mobile: ['01720453889'],
    email: 'sammam393@gmail.com',
    imageUrl: m9,
  },
  {
    name: 'Md. Saud Al Sami',
    position: 'Secretary (Creative & Research)-1',
    mobile: ['01316103771'],
    email: 'saudsami34@gmail.com',
    imageUrl: m10,
  },
  {
    name: 'Tasnova Jebin Oaishe',
    position: 'Secretary (Creative & Research)-2',
    mobile: ['01831908386'],
    email: 'tj.oaishe2001@gmail.com',
    imageUrl: m11,
  },
  {
    name: 'Md. Safayet Ullah',
    position: 'Secretary (Creative & Research)-3',
    mobile: ['01878947395'],
    email: 'safayetsabbir02@gmail.com',
    imageUrl: m12,
  },
  {
    name: 'Fahima Farzana Simin',
    position: 'Secretary (Creative & Research)-4',
    mobile: ['01748272761'],
    email: 'fahimasimin@gmail.com',
    imageUrl: m13,
  },
  {
    name: 'Md. Noor Hossain',
    position: 'Secretary (Creative & Research)-5',
    mobile: ['01727348412'],
    email: 'noorhossain87877@gmail.com',
    imageUrl: m14,
  },
];

export default function KeynoteSpeakers() {
  return (
    <section className="py-10 mb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-primary">
          Faculty Advisors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors h-full"
            >
              {/* Image - consistent size with proper Next.js Image implementation */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 mb-6">
                <Image
                  src={advisor.imageUrl}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>

              {/* Content container with flex-grow to push affiliation to bottom */}
              <div className="flex flex-col items-center flex-grow w-full">
                {/* Name - fixed height container */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground text-center">
                    {advisor.name}
                  </h3>
                </div>

                {/* Title - fixed minimum height container */}
                <div className="min-h-[96px] flex items-center justify-center mb-6 flex-grow">
                  <p
                    className="text-lg font-semibold text-primary text-center leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: advisor.title }}
                  />
                </div>

                {/* Affiliation - consistent positioning at bottom */}
                <div className="mt-auto">
                  {advisor.affiliation && (
                    <p className="text-base text-muted-foreground bg-foreground/10 px-4 py-2 rounded-full whitespace-nowrap">
                      {advisor.affiliation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pt-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-primary">
          Executive Committee
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/20 hover:bg-muted/50 transition-colors h-full"
            >
              {/* Image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 mb-6">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center flex-grow w-full">
                {/* Name */}
                <div className="h-16 flex items-center justify-center mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground text-center">
                    {member.name}
                  </h3>
                </div>

                {/* Position */}
                <p className="text-lg font-semibold text-primary mb-4">{member.position}</p>

                {/* Mobile numbers */}
                <div className="flex flex-col items-center gap-1 mb-2">
                  {member.mobile.map((phone, i) => (
                    <div key={i} className="flex items-center gap-2 text-base text-foreground">
                      <FiPhone className="text-green-800" />
                      <span>{phone}</span>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 mt-2">
                  <FiMail className="text-red-800" />
                  <p>{member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
