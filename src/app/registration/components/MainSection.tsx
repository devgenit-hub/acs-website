export default function MainSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
            Conference Registration
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Presenting authors must register to present their papers at the conference. Accepted
            articles will be included in the conference proceedings, with a printed abstract book
            and also available as post-conference e-proceedings on the website. Additionally, there
            will be an option for poster presentations.
          </p>

          {/* Registration Deadline */}
          <div className="mb-8">
            <p className="text-xl font-semibold text-red-600">
              Registration Deadline: 1st October, 2025
            </p>
          </div>

          {/* Registration Button */}
          <a
            href="https://your-registration-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            CLICK HERE FOR REGISTRATION
          </a>
        </div>
      </div>
    </section>
  );
}
