import Image from 'next/image';

export default function Flyer() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
            Conference Flyer
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Download our conference flyer for complete information about ICSHSD-2025
          </p>
        </div>

        {/* Flyer Preview */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl pb-8 sm:p-8 shadow-lg border border-green-100 hover:border-green-200 transition-all">
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gradient-to-br from-green-50 to-white">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="relative w-full h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3"
                    alt="Cat in academic setting"
                    fill
                    className="object-cover rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Important Dates</h3>
                  <ul className="text-sm text-green-700">
                    <li>Abstract Submission: 1 Oct 2025</li>
                    <li>Notification: 15 Oct 2025</li>
                    <li>Registration: 20 Oct 2025</li>
                  </ul>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-4">
                <div className="relative w-full h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
                    alt="Cat with glasses"
                    fill
                    className="object-cover rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Registration</h3>
                  <ul className="text-sm text-green-700">
                    <li>Early Bird: $200</li>
                    <li>Regular: $250</li>
                    <li>Student: $150</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="relative w-full h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3"
                    alt="Cat with laptop"
                    fill
                    className="object-cover rounded-lg shadow-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800">Contact</h3>
                  <p className="text-sm text-green-700">
                    Email: icshsd@duet.ac.bd
                    <br />
                    Phone: +88-02-49274034-53
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8 text-center">
            <a
              href="/flyer.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-800 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Flyer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
