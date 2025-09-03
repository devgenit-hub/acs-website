interface ContactInfo {
  title: string;
  lines: string[];
}

const contactSections: ContactInfo[] = [
  {
    title: 'Contact Information',
    lines: [
      'Prof. Dr. Most. Nasrin Akhter',
      'Organizing Secretary, ICSHSD-2025',
      'Dhaka University of Engineering & Technology, Gazipur',
      'Gazipur-1707, Dhaka, Bangladesh',
      'Phone: +88-02-49274034-53, Extn: 5015',
      'Cell: +8801749288044',
      'E-mail: nasrin@duet.ac.bd, icshsd@duet.ac.bd',
    ],
  },
  {
    title: 'Organizer',
    lines: [
      'Faculty of Science,',
      'Dhaka University of Engineering & Technology, Gazipur',
      'Gazipur-1707, Dhaka, Bangladesh',
    ],
  },
  {
    title: 'Venue',
    lines: [
      'Dhaka University of Engineering & Technology, Gazipur',
      'Gazipur-1707, Dhaka, Bangladesh',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {contactSections.map((section, index) => (
              <div
                key={index}
                className="group relative space-y-4 p-6 rounded-2xl bg-card/60 backdrop-blur-sm
                          border border-border hover:border-primary/30 hover:shadow-lg
                          transition-all duration-500 ease-out
                          hover:transform hover:scale-[1.02] hover:-translate-y-1
                          hover:bg-card/80"
              >
                {/* Subtle gradient overlay on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <h3
                    className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/80 
                               bg-clip-text text-transparent
                               group-hover:from-primary group-hover:to-accent
                               transition-all duration-300"
                  >
                    {section.title}
                  </h3>
                  <div
                    className="h-1 w-20 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full
                                 group-hover:w-32 group-hover:from-primary/60 group-hover:to-accent/60
                                 transition-all duration-300"
                  />
                  <div
                    className="space-y-2 text-muted-foreground group-hover:text-foreground/90
                                 transition-colors duration-300"
                  >
                    {section.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-sm md:text-base leading-relaxed
                                           group-hover:transform group-hover:translate-x-1
                                           transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div
            className="relative overflow-hidden rounded-lg p-4 
                         bg-gradient-to-r from-secondary/30 to-secondary/50
                         hover:from-secondary/50 hover:to-secondary/70
                         transition-all duration-300 group"
          >
            <p
              className="text-center text-sm text-muted-foreground
                         group-hover:text-foreground/90 transition-colors duration-300"
            >
              Copyright © 2025 ICSHSD - International Conference on Science and Humanities for
              Sustainable Development | Powered by ICT Cell, DUET
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
