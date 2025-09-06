export default function ConferenceProceedings() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary bg-clip-text mb-4">
            Conference Proceedings
          </h2>
          <p className="text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing process for this
            conference. This service was provided for free by Microsoft and they bore all expenses,
            including costs for Azure cloud services as well as for software development and
            support.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8">
          {/* Publication Opportunities */}
          <div
            className="group bg-card/70 backdrop-blur-sm rounded-xl p-8 shadow-lg 
                         border border-border hover:border-primary/30 
                         hover:shadow-xl transition-all duration-500 ease-out
                         hover:transform hover:scale-[1.01] hover:-translate-y-1"
          >
            <div className="relative">
              {/* Background gradient overlay */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <h3
                  className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/90 
                               bg-clip-text text-transparent mb-4
                               group-hover:from-primary group-hover:to-accent
                               transition-all duration-300"
                >
                  Publication Opportunities:
                </h3>
                <p
                  className="text-muted-foreground mb-6 group-hover:text-foreground/90 
                              transition-colors duration-300"
                >
                  Accepted extended abstract will be published in two formats: Abstract Proceedings
                  and Full Paper e-Proceedings (Based on merit and author preference)
                </p>

                <div className="space-y-6">
                  {/* Abstract Proceedings */}
                  <div
                    className="group/item pl-4 border-l-4 border-primary/40 
                                 hover:border-primary/80 transition-all duration-300
                                 hover:transform hover:translate-x-2"
                  >
                    <h4
                      className="font-semibold text-lg text-foreground mb-2
                                   group-hover/item:text-primary transition-colors duration-300"
                    >
                      1. Abstract Proceedings
                    </h4>
                    <p
                      className="text-muted-foreground group-hover/item:text-foreground/90 
                                 transition-colors duration-300"
                    >
                      All accepted abstracts will be compiled and published as a printed abstract
                      book.
                    </p>
                  </div>

                  {/* Special Journal Issue */}
                  <div
                    className="group/item pl-4 border-l-4 border-primary/40 
                                 hover:border-primary/80 transition-all duration-300
                                 hover:transform hover:translate-x-2"
                  >
                    <h4
                      className="font-semibold text-lg text-foreground mb-2
                                   group-hover/item:text-primary transition-colors duration-300"
                    >
                      2. Special Journal Issue
                    </h4>
                    <p
                      className="text-muted-foreground mb-4 group-hover/item:text-foreground/90 
                                 transition-colors duration-300"
                    >
                      Outstanding and thematically relevant papers will be considered for
                      publication in special issues of the following peer-reviewed journals, subject
                      to a rigorous review process:
                    </p>
                    <ul
                      className="list-disc list-inside space-y-2 text-muted-foreground ml-4
                                   group-hover/item:text-foreground/90 transition-colors duration-300"
                    >
                      <li className="hover:transform hover:translate-x-1 transition-transform duration-200">
                        Accepted papers will be considered for publication in a special issue of the{' '}
                        <span className="font-medium text-primary/90 hover:text-primary transition-colors duration-200">
                          Journal of Engineering and Scientific Advances (JESA), DUET
                        </span>
                        .
                      </li>
                      <li
                        className="hover:transform hover:translate-x-1 transition-transform duration-200"
                        style={{ transitionDelay: '50ms' }}
                      >
                        Distinguished contributions in the field of Mathematics will be considered
                        for publication in a special issue of{' '}
                        <span className="font-medium text-primary/90 hover:text-primary transition-colors duration-200">
                          GANIT (Journal of Bangladesh Mathematical Society)
                        </span>
                        .
                      </li>
                      <li
                        className="hover:transform hover:translate-x-1 transition-transform duration-200"
                        style={{ transitionDelay: '100ms' }}
                      >
                        Distinguished articles of Humanities will be considered for publication in a
                        special issue of the{' '}
                        <span className="font-medium text-primary/90 hover:text-primary transition-colors duration-200">
                          International Journal of Advances in Business and Management Research
                          (IJABMR)
                        </span>
                        .
                      </li>
                    </ul>
                  </div>

                  {/* Post-Conference e-Proceedings */}
                  <div
                    className="group/item pl-4 border-l-4 border-primary/40 
                                 hover:border-primary/80 transition-all duration-300
                                 hover:transform hover:translate-x-2"
                  >
                    <h4
                      className="font-semibold text-lg text-foreground mb-2
                                   group-hover/item:text-primary transition-colors duration-300"
                    >
                      3. Post-Conference e-Proceedings
                    </h4>
                    <p
                      className="text-muted-foreground group-hover/item:text-foreground/90 
                                 transition-colors duration-300"
                    >
                      Full papers will be available as post-conference electronic proceedings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div
            className="group bg-secondary/30 backdrop-blur-sm rounded-xl p-6 
                         border border-border hover:border-accent/30
                         hover:bg-secondary/50 transition-all duration-300
                         hover:transform hover:scale-[1.005]"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-primary/5 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <p
                className="relative z-10 text-muted-foreground group-hover:text-foreground/90 
                           transition-colors duration-300"
              >
                <span
                  className="font-semibold text-primary group-hover:text-accent 
                                transition-colors duration-300"
                >
                  Note:
                </span>{' '}
                After an abstract is accepted, authors will be invited to submit the full paper for
                inclusion in the post-conference proceedings and consideration for journal
                publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
