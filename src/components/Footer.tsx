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
    <footer className="bg-gradient-to-b from-background to-background/90 border-t border-green-600/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {contactSections.map((section, index) => (
              <div
                key={index}
                className="space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm
                          border border-white/10 hover:border-green-600/20
                          transition-all duration-300"
              >
                <h3
                  className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-400 
                             bg-clip-text text-transparent"
                >
                  {section.title}
                </h3>
                <div className="h-1 w-20 bg-green-600/20 rounded-full" />
                <div className="space-y-2 text-muted-foreground">
                  {section.lines.map((line, idx) => (
                    <p key={idx} className="text-sm md:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <p className="text-center text-sm text-muted-foreground">
            Copyright © 2025 ICSHSD - International Conference on Science and Humanities for
            Sustainable Development | Powered by ICT Cell, DUET
          </p>
        </div>
      </div>
    </footer>
  );
}
