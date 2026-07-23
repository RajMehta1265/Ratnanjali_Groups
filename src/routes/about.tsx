import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { aboutData } from "@/data/about";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { DharmaWheel } from "@/components/heritage/DharmaWheel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ratnanjali Group" },
      { name: "description", content: "Two decades of crafting landmark real estate developments across Ahmedabad." },
    ],
  }),
  component: AboutPage,
});

/* Timeline milestones */
const timeline = [
  { year: "2007", event: "Ratnanjali Group founded in Ahmedabad" },
  { year: "2012", event: "First landmark residential project delivered" },
  { year: "2016", event: "Expansion into commercial development" },
  { year: "2019", event: "Ratnaruchi Vatika — riverside living at Paldi" },
  { year: "2022", event: "Ratnanjali Square completed — new address of success" },
  { year: "2024", event: "Hastinapur Village announced — five iconic towers" },
  { year: "2025", event: "Ratnanjali Solitaire & Ayodhya underway" },
];

function AboutPage() {
  const { hero, ourStory, missionVision, founders, partners } = aboutData;

  return (
    <PageShell>
      {/* Hero */}
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
              <span className="eyebrow eyebrow-gold">{hero.eyebrow}</span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <ShlokaKicker light className="mb-6">
              A legacy carved in stone, measured in trust
            </ShlokaKicker>
            <h1 className="max-w-5xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold">
              {hero.title}{" "}
              <em className="font-heading italic text-gold-soft/50">{hero.titleItalic}</em>
            </h1>
          </Reveal>
          <div className="mt-12 w-full max-w-md mx-auto">
            <HeritageDivider variant="wave" />
          </div>
        </div>
      </section>

      {/* Story + Founders */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-jali pointer-events-none opacity-40" />

        <div className="container-x relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          {/* Story image with carved frame */}
          <Reveal className="lg:col-span-5">
            <div className="group relative carved-frame-hover">
              <div className="carved-corner carved-corner-tl" />
              <div className="carved-corner carved-corner-tr" />
              <div className="carved-corner carved-corner-bl" />
              <div className="carved-corner carved-corner-br" />
              <img
                src={ourStory.coverImage}
                alt="Our Story Cover"
                className="aspect-[4/5] w-full object-cover border border-gold/10 transition-transform duration-1000 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-8">
            <Reveal>
              <h2 className="font-display text-3xl tracking-wide sm:text-4xl">{ourStory.title}</h2>
              <p className="mt-6 font-body text-[15px] leading-[1.85] text-foreground/65">
                {ourStory.description}
              </p>
            </Reveal>

            {/* Mission & Vision */}
            <Reveal delay={1} className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border-l-2 border-gold/40 pl-5">
                <div className="eyebrow eyebrow-gold mb-3">{missionVision.mission.title}</div>
                <p className="font-body text-sm leading-relaxed text-foreground/70">
                  {missionVision.mission.desc}
                </p>
              </div>
              <div className="border-l-2 border-gold/40 pl-5">
                <div className="eyebrow eyebrow-gold mb-3">{missionVision.vision.title}</div>
                <p className="font-body text-sm leading-relaxed text-foreground/70">
                  {missionVision.vision.desc}
                </p>
              </div>
            </Reveal>

            <Reveal delay={1} className="mt-12">
              <HeritageDivider variant="jali" />
            </Reveal>

            {/* Partners */}
            <Reveal delay={2} className="mt-12 border-t border-border/50 pt-10">
              <div className="eyebrow eyebrow-gold mb-6">{partners.eyebrow}</div>
              <div className="grid gap-6 sm:grid-cols-2">
                {partners.list.map((p) => (
                  <div key={p.title} className="border-l-2 border-gold/30 pl-4">
                    <div className="font-display text-base tracking-wide">{p.title}</div>
                    <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who We Are (Founders) Standalone Section */}
      <section className="relative py-24 lg:py-32 bg-stone-soft border-t border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-jali pointer-events-none opacity-10" />

        <div className="container-x relative mx-auto max-w-[1400px]">
          <Reveal>
            <div className="text-center mb-16 lg:mb-24">
              <div className="eyebrow eyebrow-gold mb-4">{founders.eyebrow}</div>
              <ShlokaKicker>Leadership forged in vision and integrity</ShlokaKicker>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl tracking-wide text-foreground font-semibold">
                The minds behind the landmarks.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
            {founders.list.map((f, index) => (
              <Reveal key={f.name} delay={index as 0 | 1}>
                <div className="group relative border border-gold/15 bg-background p-8 lg:p-12 transition-all hover:border-gold/30 hover:shadow-card flex flex-col md:flex-row gap-8 lg:gap-10 items-center md:items-start text-center md:text-left h-full">
                  {/* Gold accent bar */}
                  <div className="absolute top-0 left-0 h-1.5 w-16 bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 group-hover:w-28" />
                  <div className="absolute inset-0 bg-jali pointer-events-none opacity-[0.03]" />

                  {/* Big image frame - 60-70% larger than the previous layout */}
                  {('image' in f) && f.image && (
                    <div className="relative aspect-[3/4] w-48 sm:w-56 shrink-0 overflow-hidden border border-gold/20 bg-stone shadow-md group-hover:border-gold/40 transition-colors duration-500 carved-frame-hover">
                      {/* Carved corner brackets */}
                      <div className="carved-corner carved-corner-tl !h-2.5 !w-2.5" />
                      <div className="carved-corner carved-corner-tr !h-2.5 !w-2.5" />
                      <div className="carved-corner carved-corner-bl !h-2.5 !w-2.5" />
                      <div className="carved-corner carved-corner-br !h-2.5 !w-2.5" />
                      <img
                        src={f.image as string}
                        alt={f.name}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="relative flex-1 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground font-semibold group-hover:text-gold transition-colors duration-300">
                        {f.name}
                      </h3>
                      <div className="mt-1.5 font-label text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                        {f.role}
                      </div>
                    </div>
                    <p className="font-body text-[14px] leading-[1.8] text-foreground/75">
                      {f.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — carved stone with gold dharma-chakra nodes */}
      <section className="relative bg-stone-soft py-24 lg:py-32 overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-grain pointer-events-none" />

        <div className="container-x relative mx-auto max-w-[800px]">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow text-gold/50 mb-4">Our Journey</div>
              <ShlokaKicker>Each year, a spoke added to the wheel</ShlokaKicker>
            </div>
          </Reveal>

          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 3) as 0 | 1 | 2}>
                <div className={`relative flex items-center gap-8 py-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="font-display text-2xl gold-gradient-text tracking-wide">{t.year}</div>
                    <p className="mt-1 font-body text-sm text-muted-foreground">{t.event}</p>
                  </div>

                  {/* Dharma-chakra node */}
                  <div className="relative z-10 flex-shrink-0">
                    <DharmaWheel size={28} color="var(--gold)" opacity={0.5} />
                  </div>

                  <div className="flex-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
