import React from 'react';
import Link from 'next/link';
import { FiExternalLink, FiUploadCloud } from 'react-icons/fi';
import {
  MdOutlineAttachMoney,
  MdOutlineSchool,
  MdOutlineVideoLibrary,
  MdOutlineTimer,
  MdOutlineGroup,
  MdOutlineTranslate,
  MdOutlineAutoAwesome,
} from 'react-icons/md';

interface Rule {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const rules: Rule[] = [
  {
    id: 1,
    title: 'Duration',
    description: 'The duration should be a maximum of 4 minutes.',
    icon: <MdOutlineTimer className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: 'Relevancy',
    description: 'Must be relevant to the topic.',
    icon: <MdOutlineVideoLibrary className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: 'Teamwork',
    description:
      'Teamwork is encouraged, but you can also work single-handedly by creating your own approach.',
    icon: <MdOutlineGroup className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: 'Language',
    description:
      'Video can be either in Bengali or English only. A mixture of languages is not allowed.',
    icon: <MdOutlineTranslate className="w-8 h-8 text-primary" />,
  },
  {
    id: 5,
    title: 'Content Originality',
    description:
      'Fully AI-generated content is prohibited. Originality with technological edits is encouraged (animation, voice-over, experiments).',
    icon: <MdOutlineAutoAwesome className="w-8 h-8 text-primary" />,
  },
  {
    id: 6,
    title: 'Eligibility',
    description: 'Only college students are eligible to participate.',
    icon: <MdOutlineSchool className="w-8 h-8 text-primary" />,
  },
  {
    id: 7,
    title: 'Team Size',
    description: 'Each team must consist of 3–5 members.',
    icon: <MdOutlineGroup className="w-8 h-8 text-primary" />,
  },
  {
    id: 8,
    title: 'Registration Fee',
    description: 'Registration fee is 500 BDT per team.',
    icon: <MdOutlineAttachMoney className="w-8 h-8 text-primary" />,
  },
];

export default function VideoCompetitionRules() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
            Video Competition Rules
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Please read and follow these guidelines carefully to ensure your submission meets all
            requirements.
          </p>
        </header>

        {/* Rules List */}
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div
              key={rule.id}
              className="group bg-card/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 ease-out hover:transform hover:scale-[1.01] hover:-translate-y-1"
            >
              <div className="relative">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{rule.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {index + 1}. {rule.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to showcase your creativity? Complete the registration form to secure your team’s
            spot in the competition.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-hPEkDqI4kOQDddUq83tKtp4Vj79icAOwJMLkaQYGWWlm2Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Register Now
              <FiExternalLink className="w-5 h-5" />
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSey2doJItnMiH93V-HKcles64ljQbpkfluvTS_rbzzEnMiR7Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Submit Video
              <FiUploadCloud className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
