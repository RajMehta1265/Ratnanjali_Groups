import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryRow } from "@/components/projects/CategoryRow";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ratnanjali Group" },
      { name: "description", content: "Explore Exclusive, Residential, Commercial, Hospitality and Mixed-Use developments by Ratnanjali Group across Ahmedabad." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const exclusive = projects.slice(0, 4);
  const residential = projects.filter((p) => p.category === "residential");
  const commercial = projects.filter((p) => p.category === "commercial");
  const hospitality = projects.filter((p) => p.category === "hospitality");
  const mixedUse = projects.filter((p) => p.category === "mixed-use");

  return (
    <PageShell>
      {/* Hero header */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/72qij255/production/a79b3a9ad16309e1af0de10353f33be64a039a83-739x415.jpg"
            alt="Cover background"
            className="h-full w-full object-cover opacity-25"
          />
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-basalt/80 via-basalt/60 to-basalt/95" />
          <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
          <div className="absolute inset-0 bg-jali-dark pointer-events-none opacity-15" />
        </div>

        <div className="container-x relative z-10 mx-auto max-w-[1400px] flex flex-col items-center justify-center text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-5 mb-4">
              <span className="h-px w-10 bg-gold/40" />
              <span className="eyebrow eyebrow-gold">Portfolio</span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <ShlokaKicker light className="mb-6">
              A chronicle of landmarks, inscribed in the city's memory
            </ShlokaKicker>
            <h1 className="max-w-5xl font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[5.25rem] tracking-wide text-gold-soft font-semibold">
              Landmark developments
              <br className="hidden sm:block" />
              <span className="text-gold-soft/40"> across Ahmedabad.</span>
            </h1>
            <p className="mt-8 max-w-xl mx-auto font-body text-base leading-[1.7] text-gold-soft/60 sm:text-lg">
              A chronicle of our work — organised by chapter.
              <br className="hidden sm:block" />
              Move horizontally through each discipline.
            </p>
          </Reveal>
          <div className="mt-12 w-full max-w-md mx-auto">
            <HeritageDivider variant="chakra" />
          </div>
        </div>
      </section>

      {/* Category rows on warm background */}
      <div className="space-y-0 bg-background">
        <CategoryRow num="01" title="Exclusive" subtitle="A curated selection of our most defining work." items={exclusive} />
        <CategoryRow num="02" title="Residential" subtitle="Apartments, villas and homes built around family life." items={residential} />
        <CategoryRow num="03" title="Commercial" subtitle="Headquarters, business avenues and prestige offices." items={commercial} />
        <CategoryRow num="04" title="Hospitality" subtitle="Weekend estates, resorts and clubhouses immersed in landscape." items={hospitality} />
        <CategoryRow num="05" title="Mixed Use" subtitle="Integrated destinations bringing living, working and leisure together." items={mixedUse} />
      </div>
    </PageShell>
  );
}
