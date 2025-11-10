import Image from 'next/image';

export default function Transport() {
  return (
    <section className="pb-24 px-4 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-primary mb-4">
            Transport
          </h2>
        </div>

        {/* Transport Card */}
        <div className="flex justify-center">
          <div
            className="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg 
                       border border-deep-blue/50 hover:border-deep-blue transition-all duration-300"
          >
            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-64 md:h-full rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-4.0.3"
                  alt="Transport Cat"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Conference Transportation
                  </h3>
                  <div className="h-1 w-20 bg-primary/20 rounded-full" />
                  <p className="text-gray-600 leading-relaxed">
                    The conference organizer will provide transportation facilities for the
                    participants from Dhaka and Gazipur City to the conference venue.
                  </p>
                </div>

                {/* Additional Info List */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-deep-blue mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Shuttle service available</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-deep-blue mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Professional drivers</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-deep-blue mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Convenient pick-up points</span>
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
