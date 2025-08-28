export default function ConferenceProceedings() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
            Conference Proceedings
          </h2>
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            The Microsoft CMT service was used for managing the peer-reviewing process for this
            conference. This service was provided for free by Microsoft and they bore all expenses,
            including costs for Azure cloud services as well as for software development and
            support.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8">
          {/* Publication Opportunities */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-green-100 hover:border-green-200 transition-all">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Publication Opportunities:
            </h3>
            <p className="text-gray-700 mb-6">
              Accepted extended abstract will be published in two formats: Abstract Proceedings and
              Full Paper e-Proceedings (Based on merit and author preference)
            </p>

            <div className="space-y-6">
              {/* Abstract Proceedings */}
              <div className="pl-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-gray-800">1. Abstract Proceedings</h4>
                <p className="text-gray-600">
                  All accepted abstracts will be compiled and published as a printed abstract book.
                </p>
              </div>

              {/* Special Journal Issue */}
              <div className="pl-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-gray-800">2. Special Journal Issue</h4>
                <p className="text-gray-600 mb-4">
                  Outstanding and thematically relevant papers will be considered for publication in
                  special issues of the following peer-reviewed journals, subject to a rigorous
                  review process:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>
                    Accepted papers will be considered for publication in a special issue of the{' '}
                    <span className="font-medium">
                      Journal of Engineering and Scientific Advances (JESA), DUET
                    </span>
                    .
                  </li>
                  <li>
                    Distinguished contributions in the field of Mathematics will be considered for
                    publication in a special issue of{' '}
                    <span className="font-medium">
                      GANIT (Journal of Bangladesh Mathematical Society)
                    </span>
                    .
                  </li>
                  <li>
                    Distinguished articles of Humanities will be considered for publication in a
                    special issue of the{' '}
                    <span className="font-medium">
                      International Journal of Advances in Business and Management Research (IJABMR)
                    </span>
                    .
                  </li>
                </ul>
              </div>

              {/* Post-Conference e-Proceedings */}
              <div className="pl-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-lg text-gray-800">
                  3. Post-Conference e-Proceedings
                </h4>
                <p className="text-gray-600">
                  Full papers will be available as post-conference electronic proceedings.
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-green-50/70 backdrop-blur-sm rounded-xl p-6 border border-green-100">
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> After an abstract is accepted, authors
              will be invited to submit the full paper for inclusion in the post-conference
              proceedings and consideration for journal publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
