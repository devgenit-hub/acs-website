export default function ConferenceCommittee() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Conference Committee</h2>

      {/* Chief Patron */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Chief Patron</h3>
        <p className="text-muted-foreground font-semibold">Prof. Dr. Mohammad Zoynal Abedin</p>
        <p className="text-muted-foreground/80 text-sm">
          Vice-Chancellor, DUET, Gazipur, Bangladesh
        </p>
      </div>

      {/* Patron */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Patron</h3>
        <p className="text-muted-foreground font-semibold">Prof. Dr. Md. Arefin Kowser</p>
        <p className="text-muted-foreground/80 text-sm">
          Pro-Vice-Chancellor, DUET, Gazipur, Bangladesh
        </p>
      </div>

      {/* Organizing Chair */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Organizing Chair</h3>
        <p className="text-muted-foreground font-semibold">
          Dean, Faculty of Science, DUET, Gazipur, Bangladesh
        </p>
      </div>

      {/* Organizing Co-Chairs */}
      <div className="mb-10 space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Organizing Co-Chair</h3>
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <p className="text-muted-foreground font-semibold">Prof. Dr. Md. Mahmud Alam</p>
            <p className="text-muted-foreground/80 text-sm">
              Head, Department of Mathematics, DUET, Gazipur, Bangladesh
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-muted-foreground font-semibold">
              Prof. Dr. Abu Talib Md. Kaosar Jamil
            </p>
            <p className="text-muted-foreground/80 text-sm">
              Head, Department of Physics, DUET, Gazipur, Bangladesh
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <p className="text-muted-foreground font-semibold">Prof. Dr. Ummey Rayhan</p>
            <p className="text-muted-foreground/80 text-sm">
              Head, Department of Chemistry, DUET, Gazipur, Bangladesh
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-muted-foreground font-semibold">Prof. Dr. Most. Tahura Pervin</p>
            <p className="text-muted-foreground/80 text-sm">
              Head, Dept. of Humanities & Social Science, DUET, Gazipur, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Organizing Secretary */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Organizing Secretary</h3>
        <p className="text-muted-foreground font-semibold">Prof. Dr. Most. Nasrin Akhter</p>
      </div>
    </section>
  );
}
