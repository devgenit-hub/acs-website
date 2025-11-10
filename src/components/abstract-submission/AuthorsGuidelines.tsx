'use client';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { BiDownload } from 'react-icons/bi';

export default function AuthorsGuidelines() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">
      {/* Header */}
      <header>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
          Author Guidelines
        </h2>
      </header>

      {/* Guidelines List */}
      <article className="space-y-8">
        <p className="text-muted-foreground leading-relaxed">
          The abstract should be written in Times New Roman, single line spacing, and in accordance
          with the following guidelines:
        </p>

        <ol className="space-y-6 text-muted-foreground leading-relaxed list-decimal list-inside">
          <li>
            <strong className="text-foreground">Title:</strong> A clear title resembling the study
            that must cover at least one of the key thematic areas, including{' '}
            <span className="font-semibold text-foreground">
              Sustainability, Environmental Science, Energy, Chemical Engineering, or Green
              Chemistry
            </span>{' '}
            of the conference. Font size must be{' '}
            <span className="font-semibold text-foreground">16</span> and{' '}
            <span className="font-semibold text-foreground">Bold</span>.
          </li>
          <li>
            <strong className="text-foreground">Author’s Name:</strong> Full Name of the project
            authors with indications of their contributions in the study. Font size must be{' '}
            <span className="font-semibold text-foreground">12</span>.
          </li>
          <li>
            <strong className="text-foreground">Author’s Affiliation:</strong> Designated department
            and university affiliation of the authors. Font size must be{' '}
            <span className="font-semibold text-foreground">10</span> and{' '}
            <span className="font-semibold italic text-foreground">Italic</span>.
          </li>
          <li>
            <strong className="text-foreground">Complete Abstract:</strong> Abstract must be written
            in plain text with a word limit of{' '}
            <span className="font-semibold text-foreground">250–300</span>. Authors are requested to
            write about some key elements, including the{' '}
            <span className="font-semibold text-foreground">
              background of the work, objectives, methodology, findings, drawbacks
            </span>
            , and a perfect concluding statement of the study in a single paragraph. Font size must
            be <span className="font-semibold text-foreground">12</span>.
          </li>
          <li>
            <strong className="text-foreground">Keywords:</strong> Authors are requested to provide
            a maximum of <span className="font-semibold text-foreground">five keywords</span>{' '}
            related to the study in the end section. Font size must be{' '}
            <span className="font-semibold text-foreground">12</span>.
          </li>
          <li>
            <strong className="text-foreground">Name of the Presenting Author:</strong> Please
            provide the name of the author (
            <span className="underline text-foreground font-semibold">underlined</span>) who will
            present the work, along with his/her email address. Font size must be{' '}
            <span className="font-semibold text-foreground">12</span>.
          </li>
        </ol>

        <section className="rounded-xl border border-border bg-muted/40 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Sample Layout</h3>
          <p className="text-muted-foreground leading-relaxed">
            Structure your submission following the visual hierarchy below.
          </p>
          <div className="rounded-lg border border-dashed border-border bg-background px-6 py-5 text-left text-sm leading-relaxed text-muted-foreground shadow-sm">
            <p className="text-lg font-semibold text-foreground text-center">Title of the Study</p>
            <p className="text-foreground text-center">
              Author X<sup>1</sup>, Author Y<sup>2*</sup>
            </p>
            <div className="mt-4 space-y-1 italic text-foreground/80">
              <p>
                <span className="font-semibold text-foreground">1&nbsp;</span>Author Affiliation,
                City, Country.
              </p>
              <p>
                <span className="font-semibold text-foreground">2&nbsp;</span>Author Affiliation,
                City, Country.
              </p>
              <p>
                <span className="font-semibold text-foreground">*</span> Corresponding Author
              </p>
              <p>
                Email Address:{' '}
                <span className="text-primary underline font-semibold">abcde@ef.com</span> (Author
                Y)
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-semibold text-foreground">Abstract:</p>
              <p>
                Abstract must be written in plain text with a word limit of{' '}
                <span className="font-semibold text-foreground">250-300</span>. Authors are
                requested to write about key elements, including the{' '}
                <span className="font-semibold text-foreground">
                  background of the work, objectives, methodology, findings, drawbacks
                </span>
                , and a perfect concluding statement of the study in a single paragraph. Font size
                must be <span className="font-semibold text-foreground">12</span>.
              </p>
            </div>
            <p className="mt-4">
              <span className="font-semibold text-foreground">Keywords:</span>{' '}
              <span className="font-semibold text-foreground">Five keywords</span> related to the
              study.
            </p>
            <p>
              <span className="font-semibold text-foreground">Presenting Author:</span>{' '}
              <span className="font-semibold text-foreground">Author X</span>, Email Address:{' '}
              <span className="text-primary underline font-semibold">abcd@ef.com</span>
            </p>
          </div>
        </section>

        {/* CTA */}
        <nav className="mt-10 text-center" aria-label="Download template">
          <Button
            component={Link}
            href="/docs/template.pdf"
            download="Abstract_Template.pdf"
            variant="contained"
            size="medium"
            startIcon={<BiDownload />}
            sx={{
              px: 3,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
              },
              transition: 'all 0.3s ease',
            }}
          >
            Download Abstract Template
          </Button>
        </nav>
      </article>
    </section>
  );
}
