'use client';
import Image from 'next/image';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function Flyer() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
            Conference Flyer
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download our conference flyer for complete information about ICSHSD-2025
          </p>
        </div>

        {/* Flyer Preview */}
        <div
          className="group bg-card/70 backdrop-blur-sm rounded-xl pb-8 sm:p-8 shadow-lg 
                       border border-border hover:border-primary/30 hover:shadow-xl 
                       transition-all duration-500 ease-out
                       hover:transform hover:scale-[1.005] hover:-translate-y-1"
        >
          {/* Background gradient overlay */}
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />

          <div
            className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl
                         group-hover:shadow-2xl transition-shadow duration-300"
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 
                           bg-gradient-to-br from-secondary/30 to-background/90
                           group-hover:from-secondary/40 group-hover:to-background
                           transition-all duration-300"
            >
              {/* Left Column */}
              <div
                className="group/col space-y-4 hover:transform hover:scale-[1.02] 
                             transition-transform duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3"
                    alt="Academic conference setting"
                    fill
                    className="object-cover shadow-md group-hover/col:scale-110 
                              transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent 
                                 opacity-0 group-hover/col:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div
                  className="bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-border
                               hover:bg-secondary/70 hover:border-primary/30
                               transition-all duration-300 group-hover/col:transform 
                               group-hover/col:translate-y-[-2px]"
                >
                  <h3
                    className="font-semibold text-primary group-hover/col:text-primary/90 
                                transition-colors duration-200"
                  >
                    Important Dates
                  </h3>
                  <ul
                    className="text-sm text-muted-foreground space-y-1 mt-2
                                group-hover/col:text-foreground/90 transition-colors duration-200"
                  >
                    <li className="hover:transform hover:translate-x-1 transition-transform duration-200">
                      Abstract Submission: 1 Oct 2025
                    </li>
                    <li
                      className="hover:transform hover:translate-x-1 transition-transform duration-200"
                      style={{ transitionDelay: '50ms' }}
                    >
                      Notification: 15 Oct 2025
                    </li>
                    <li
                      className="hover:transform hover:translate-x-1 transition-transform duration-200"
                      style={{ transitionDelay: '100ms' }}
                    >
                      Registration: 20 Oct 2025
                    </li>
                  </ul>
                </div>
              </div>

              {/* Middle Column */}
              <div
                className="group/col space-y-4 hover:transform hover:scale-[1.02] 
                             transition-transform duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
                    alt="Academic research theme"
                    fill
                    className="object-cover shadow-md group-hover/col:scale-110 
                              transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent 
                                 opacity-0 group-hover/col:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div
                  className="bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-border
                               hover:bg-secondary/70 hover:border-accent/30
                               transition-all duration-300 group-hover/col:transform 
                               group-hover/col:translate-y-[-2px]"
                >
                  <h3
                    className="font-semibold text-primary group-hover/col:text-accent 
                                transition-colors duration-200"
                  >
                    Registration
                  </h3>
                  <ul
                    className="text-sm text-muted-foreground space-y-1 mt-2
                                group-hover/col:text-foreground/90 transition-colors duration-200"
                  >
                    <li className="hover:transform hover:translate-x-1 transition-transform duration-200">
                      Early Bird: $200
                    </li>
                    <li
                      className="hover:transform hover:translate-x-1 transition-transform duration-200"
                      style={{ transitionDelay: '50ms' }}
                    >
                      Regular: $250
                    </li>
                    <li
                      className="hover:transform hover:translate-x-1 transition-transform duration-200"
                      style={{ transitionDelay: '100ms' }}
                    >
                      Student: $150
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div
                className="group/col space-y-4 hover:transform hover:scale-[1.02] 
                             transition-transform duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3"
                    alt="Digital conference concept"
                    fill
                    className="object-cover shadow-md group-hover/col:scale-110 
                              transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent 
                                 opacity-0 group-hover/col:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div
                  className="bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-border
                               hover:bg-secondary/70 hover:border-primary/30
                               transition-all duration-300 group-hover/col:transform 
                               group-hover/col:translate-y-[-2px]"
                >
                  <h3
                    className="font-semibold text-primary group-hover/col:text-primary/90 
                                transition-colors duration-200"
                  >
                    Contact
                  </h3>
                  <div
                    className="text-sm text-muted-foreground mt-2 space-y-1
                                 group-hover/col:text-foreground/90 transition-colors duration-200"
                  >
                    <p className="hover:transform hover:translate-x-1 transition-transform duration-200">
                      Email: icshsd@duet.ac.bd
                    </p>
                    <p
                      className="hover:transform hover:translate-x-1 transition-transform duration-200"
                      style={{ transitionDelay: '50ms' }}
                    >
                      Phone: +88-02-49274034-53
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8 text-center relative z-10">
            <Button
              component="a"
              href="/flyer.pdf"
              download
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(to right, #004b87, #004b87e6)',
                boxShadow: 3,
                border: '1px solid rgba(0, 75, 135, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  background: 'linear-gradient(to right, #004b87e6, #ffcc00)',
                  boxShadow: 6,
                  transform: 'scale(1.05) translateY(-4px)',
                  borderColor: 'rgba(255, 204, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                  transition: 'left 0.7s ease',
                },
                '&:hover::before': {
                  left: '100%',
                },
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Download Flyer</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
