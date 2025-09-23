export default function WelcomeMessage() {
  return (
    <section className="pt-16 mb-24">
      <div className="container mx-auto px-4">
        <div className="bg-background text-card-foreground rounded-xl border border-border shadow-lg flex flex-col gap-5 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-center w-full">
            Welcome Message
          </h1>
          <div className="flex flex-col gap-5 text-justify text-muted-foreground">
            <p>
              We are delighted to invite you to the 1st International Conference on Environmental
              Sustainability and Green Earth: ACS Bangladesh Youth Summit (ICESGE-2025), organized
              by American Chemical Society (ACS) Student Chapter, University of Dhaka, Dhaka. This
              conference highlights the crucial role of Chemistry in advancing Modern Science,
              Engineering, Technology, and Sustainable Development.
            </p>
            <p>
              The aim of this conference is to Promote green chemistry awareness, showcase
              innovative solutions, strengthen ACS student chapter collaborations and provide
              industry with sustainable alternatives.
            </p>
            <p>
              Join us at ICESGE-2025, where we&apos;ve created a versatile platform—accessible both
              online and offline—for researchers, engineers, and academics like you. It&apos;s a
              fantastic opportunity to connect, share your work, and help to shape the future of
              science and technology. We can&apos;t wait to see you there!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
