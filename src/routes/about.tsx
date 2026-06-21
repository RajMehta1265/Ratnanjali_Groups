import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { aboutData } from "@/data/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ratnanjali Group" },
      { name: "description", content: "Two decades of crafting landmark real estate developments across Ahmedabad." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { hero, ourStory, missionVision, founders, partners } = aboutData;

  return (
    <PageShell>
      <section className="pb-20 pt-40 lg:pt-48">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />{hero.eyebrow}</div>
          <h1 className="max-w-5xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl kerning-tight">
            {hero.title} <em className="text-foreground/70">{hero.titleItalic}</em>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img src={ourStory.coverImage} alt="Our Story Cover" className="aspect-[4/5] w-full object-cover shadow-lg border border-border/40" loading="lazy" />
          </Reveal>
          <div className="lg:col-span-7 lg:pt-8">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">{ourStory.title}</h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-foreground/75">
                {ourStory.description}
              </p>
            </Reveal>
            <Reveal delay={1} className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="eyebrow eyebrow-gold mb-3">{missionVision.mission.title}</div>
                <p className="text-sm leading-relaxed text-foreground/80">{missionVision.mission.desc}</p>
              </div>
              <div>
                <div className="eyebrow eyebrow-gold mb-3">{missionVision.vision.title}</div>
                <p className="text-sm leading-relaxed text-foreground/80">{missionVision.vision.desc}</p>
              </div>
            </Reveal>
            
            <Reveal delay={2} className="mt-16 border-t border-border pt-12">
              <div className="eyebrow eyebrow-gold mb-8">{founders.eyebrow}</div>
              <div className="grid gap-8 md:grid-cols-2">
                {founders.list.map((f) => (
                  <div key={f.name} className="relative border border-border bg-stone-soft/30 p-8 shadow-sm transition-all hover:border-gold/50">
                    <div className="absolute top-0 left-0 h-1 w-12 bg-gold" />
                    <div className="font-display text-2xl font-semibold text-foreground">{f.name}</div>
                    <div className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-gold-soft font-semibold">{f.role}</div>
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/85">
                      {f.bio}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3} className="mt-12 border-t border-border/50 pt-10">
              <div className="eyebrow eyebrow-gold mb-6">{partners.eyebrow}</div>
              <div className="grid gap-6 sm:grid-cols-2">
                {partners.list.map((p) => (
                  <div key={p.title} className="border-l-2 border-gold/60 pl-4">
                    <div className="font-display text-base font-semibold">{p.title}</div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}


