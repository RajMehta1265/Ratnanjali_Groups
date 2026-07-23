import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Our Expertise — Ratnanjali Group" },
      { name: "description", content: "Capabilities across residential, commercial, hospitality, retail and mixed-use development." },
    ],
  }),
  component: ExpertisePage,
});

const capabilities = [
  {
    n: "01", t: "Residential Development",
    d: "Towering apartments, heritage villas, plotted communities. Designed around light, air and family rituals.",
    tone: "Homecoming",
    thread: "Where light meets hearth, a family finds its centre"
  },
  {
    n: "02", t: "Commercial Development",
    d: "Headquarters, business avenues and garden offices that elevate enterprise and attract clientele.",
    tone: "Vision & Legacy",
    thread: "The council hall of modern commerce"
  },
  {
    n: "03", t: "Hospitality Development",
    d: "Weekend estates, resort homes and clubhouses immersed in landscape and ritual.",
    tone: "Service & Community",
    thread: "Where nature hosts and architecture serves"
  },
  {
    n: "04", t: "Retail Development",
    d: "High-street showrooms, lifestyle malls and mixed retail formats engineered for footfall.",
    tone: "Precision & Sustainability",
    thread: "Crafted for the discerning eye"
  },
  {
    n: "05", t: "Mixed Use Development",
    d: "Integrated destinations bringing living, working, leisure and retail into one master plan.",
    tone: "Balance & Growth",
    thread: "Where all paths converge in harmony"
  },
];

function ExpertisePage() {
  return (
    <PageShell>
      <section className="relative h-[65vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blurred background image to cover full container */}
          <img
            src="https://cdn.sanity.io/images/72qij255/production/16a616ac4b65d0d81a245a07da000ae12931fcb0-612x408.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25 blur-md scale-110"
          />
          {/* Centered contained foreground image to show it fully without cutting */}
          <img
            src="https://cdn.sanity.io/images/72qij255/production/16a616ac4b65d0d81a245a07da000ae12931fcb0-612x408.jpg"
            alt="Cover background"
            className="relative mx-auto h-full w-auto object-contain opacity-75"
          />
          {/* Reduced dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-basalt/40 via-transparent to-basalt/60" />
          <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
          <div className="absolute inset-0 bg-jali-dark pointer-events-none opacity-5" />
        </div>

        <div className="container-x relative z-10 mx-auto max-w-[1400px] flex flex-col items-center justify-center text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-5 mb-4">
              <span className="h-px w-10 bg-gold/40" />
              <span className="eyebrow eyebrow-gold">Capabilities</span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <ShlokaKicker light className="mb-6">
              Each discipline, a pillar in the temple of craft
            </ShlokaKicker>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold">
              A full-spectrum developer — across every{" "}
              <br className="hidden sm:block" />
              <em className="font-heading italic text-gold-soft/50">scale and discipline.</em>
            </h1>
          </Reveal>
          <div className="mt-12 w-full max-w-md mx-auto">
            <HeritageDivider variant="lotus" />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="container-x mx-auto max-w-[1400px]">
          <ul className="divide-y divide-gold/10 border-y border-gold/10">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.n} delay={(i % 3) as 0 | 1 | 2}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-8 py-10 transition-colors hover:bg-stone-soft/50 md:grid-cols-[120px_1fr_2fr] md:gap-12 md:py-14 px-4">
                  <div className="font-display text-4xl gold-gradient-text opacity-50 num md:text-5xl">{c.n}</div>
                  <div className="col-span-2 md:col-span-1">
                    <h2 className="font-display text-3xl tracking-wide md:text-4xl">{c.t}</h2>
                    <span className="mt-2 inline-block font-label text-[9px] uppercase tracking-[0.3em] text-gold/50">
                      {c.tone}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="font-body text-[15px] leading-[1.85] text-foreground/65">{c.d}</p>
                    <p className="mt-3 shloka-kicker text-gold/30 text-xs">— {c.thread} —</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
