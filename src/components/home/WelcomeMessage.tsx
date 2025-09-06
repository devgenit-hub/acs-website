export default function WelcomeMessage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <div className="bg-background text-card-foreground rounded-xl border border-border shadow-lg flex flex-col gap-5 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-center w-full">
            Welcome Message
          </h1>
          <div className="flex flex-col gap-5 text-justify text-muted-foreground">
            <p>
              We are delighted to invite you to the 1st International Conference on Science and
              Humanities for Sustainable Development (ICSHSD- 2025), organized by the Faculty of
              Science, Dhaka University of Engineering & Technology (DUET), Gazipur. This conference
              highlights the crucial role of Science and Humanities in advancing Modern Science,
              Engineering, Technology, and Sustainable Development.
            </p>
            <p>
              The Departments of Mathematics, Physics, and Chemistry drive innovation through
              computational modeling, data science, numerical simulations, advanced materials,
              semiconductor technology, photonics, nanotechnology, chemical engineering, and
              sustainable energy systems, with applications in AI, robotics, aerospace, electronics,
              healthcare, and industrial process optimization. The Department of Humanities & Social
              Sciences explores language and education, business and entrepreneurship, Economic
              policy design etc. for sustainable development. This conference offers an excellent
              opportunity for students to learn from experts in various fields of Science,
              Engineering, and Humanities.
            </p>
            <p>
              ICSHSD- 2025 provides both online and offline platforms for researchers, engineers,
              and academics to exchange ideas, foster collaboration, and contribute to global
              scientific and technological advancements. We look forward to your participation in
              this exciting event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
