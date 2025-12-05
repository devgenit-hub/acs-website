'use client';
import Button from '@mui/material/Button';
import { LuSend } from 'react-icons/lu';

export default function SubmissionOfAbstract() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">
      {/* Header */}
      <header>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
          Submission of Abstract
        </h2>
      </header>

      {/* Instructions */}
      <article>
        <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
          The abstract shall be written in and be written in Times New Roman, single line spacing
          and in accordance with the following guidelines:
        </p>

        {/* Abstract Sections */}
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
          <li>Title (16 font size, Bold)</li>
          <li>Author Name (12 font size)</li>
          <li>Author Affiliation (10 font size, Italic)</li>
          <li>Full Abstract (250-300 Words) (12 font size)</li>
          <li>Keywords (Maximum 5) (12 font size)</li>
          <li>Name of the presenting author (underlined) with email address (12 font size) </li>
        </ol>

        {/* Submission CTA */}
        <nav className="text-center mt-10" aria-label="Abstract submission">
          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfwDo5l1M1Chi8WWqHkO-BeeEn9kciDx7m78YBxenjCEJaseA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="medium"
            startIcon={<LuSend />}
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
            Click Here for Submission
          </Button>
        </nav>
      </article>
    </section>
  );
}
