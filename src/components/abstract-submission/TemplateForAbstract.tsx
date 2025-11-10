'use client';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { BiDownload } from 'react-icons/bi';

export default function TemplateForAbstract() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      {/* Header */}
      <header>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
          Template for Abstract
        </h2>
      </header>

      {/* Download Link */}
      <nav className="text-center mt-10" aria-label="Download template">
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
          Click Here to Download the Template
        </Button>
      </nav>
    </section>
  );
}
