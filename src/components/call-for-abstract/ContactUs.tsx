export default function ContactUs() {
  return (
    <section className="px-4 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-primary mb-6 md:mb-10">
            Contact Information
          </h2>
        </div>

        {/* Contact Card */}
        <div className="flex justify-center">
          <div
            className="w-full max-w-4xl bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg 
                       border border-border hover:border-ring transition-all duration-300"
          >
            {/* Main Contact */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Md. Rakibur Rahman
              </h3>
              <p className="text-primary font-medium mb-4">President at ACS DU Chapter</p>
              <div className="h-1 w-20 bg-primary/20 rounded-full mb-6" />
            </div>

            {/* Contact Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <p className="text-muted-foreground">01518618583</p>
                    <p className="text-muted-foreground">01994319023</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">mdrakiburrahman039@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">Dr. Muhammad Shahidullah Hall</p>
                    <p className="text-muted-foreground">University of Dhaka</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">Website</p>
                    <a
                      href="https://acsduyouthsummit2025.org/"
                      className="text-primary hover:text-ring transition-colors duration-200"
                    >
                      https://acsduyouthsummit2025.org/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
