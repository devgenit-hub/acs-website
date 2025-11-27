'use client';
import Button from '@mui/material/Button';

export default function MainSection() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-10">
            Conference Registration
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Presenting authors must register to present their abstracts at the conference. Accepted
            articles will be included in the conference proceedings, with a printed abstract book
            and also available as post-conference e-proceedings on the website. Additionally, there
            will be an option for poster presentations.
          </p>

          {/* Registration Deadline */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-destructive">
              Early Bird Registration Deadline: 2 December, 2025 <br />
              Regular Registration Deadline: 7 December, 2025
            </p>
          </div>

          {/* Registration Button */}
          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLScaIlaU7dcjzjjQmocKDTwrP4UwDGo_uahUHhTzQmY6iScPrg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: 3,
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            CLICK HERE FOR REGISTRATION
          </Button>
        </header>
      </div>
    </section>
  );
}
