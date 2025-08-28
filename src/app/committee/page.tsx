export default function page() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-10">Conference Committee</h2>

      {/* Chief Patron Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Chief Patron</h3>
        <p className="text-gray-700 font-semibold">Prof. Dr. Mohammad Zoynal Abedin</p>
        <p className="text-gray-600 text-sm">Vice-Chancellor, DUET, Gazipur, Bangladesh</p>
      </div>

      {/* Patron Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Patron</h3>
        <p className="text-gray-700 font-semibold">Prof. Dr. Md. Arefin Kowser</p>
        <p className="text-gray-600 text-sm">Pro-Vice-Chancellor, DUET, Gazipur, Bangladesh</p>
      </div>

      {/* Organizing Chair Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Organizing Chair</h3>
        <p className="text-gray-700 font-semibold">
          Dean, Faculty of Science, DUET, Gazipur, Bangladesh
        </p>
      </div>

      {/* Organizing Co-Chair Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Organizing Co-Chair</h3>
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-4 space-y-4 md:space-y-0">
          <div className="md:w-1/2">
            <p className="text-gray-700 font-semibold">Prof. Dr. Md. Mahmud Alam</p>
            <p className="text-gray-600 text-sm">
              Head, Department of Mathematics, DUET, Gazipur, Bangladesh
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 font-semibold">Prof. Dr. Abu Talib Md. Kaosar Jamil</p>
            <p className="text-gray-600 text-sm">
              Head, Department of Physics, DUET, Gazipur, Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-4 space-y-4 md:space-y-0">
          <div className="md:w-1/2">
            <p className="text-gray-700 font-semibold">Prof. Dr. Ummey Rayhan</p>
            <p className="text-gray-600 text-sm">
              Head, Department of Chemistry, DUET, Gazipur, Bangladesh
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 font-semibold">Prof. Dr. Most. Tahura Pervin</p>
            <p className="text-gray-600 text-sm">
              Head, Dept. of Humanities & Social Science, DUET, Gazipur, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Organizing Secretary Section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Organizing Secretary</h3>
        <p className="text-gray-700 font-semibold">Prof. Dr. Most. Nasrin Akhter</p>
      </div>
    </section>
  );
}
