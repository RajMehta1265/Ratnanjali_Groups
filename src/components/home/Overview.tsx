import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { homeData } from "@/data/home";
import { Reveal } from "@/components/site/RevealOnScroll";

export function Overview() {
  const { ourStory, hero } = homeData;

  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="container-x mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <img src={ourStory.coverImage} alt="Our Story Cover" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span className="uppercase tracking-[0.24em]">Craft · Material · Light</span>
              <span className="font-display text-base">— Ahmedabad</span>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-12">
          <Reveal>
            <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />{ourStory.eyebrow}</div>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
              {ourStory.titleText} <em className="text-foreground/70">{ourStory.titleItalic}</em>
            </h2>
          </Reveal>

          <Reveal delay={1} className="mt-10 max-w-2xl space-y-6 text-[15px] leading-[1.85] text-foreground/75">
            {ourStory.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={2} className="mt-12 border-t border-border pt-10">
            <div className="eyebrow eyebrow-gold mb-6">{hero.founders.eyebrow}</div>
            <div className="grid gap-6 sm:grid-cols-2">
              {hero.founders.list.map((f) => (
                <div key={f.name} className="relative border border-border bg-stone-soft/25 p-6 shadow-sm transition-all hover:border-gold/50">
                  <div className="absolute top-0 left-0 h-1 w-10 bg-gold" />
                  <div className="font-display text-xl font-semibold text-foreground">{f.name}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-gold-soft font-semibold">{f.role}</div>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                    {f.bio}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3} className="mt-12">
            <Link to="/about" className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-foreground">
              <span className="gold-underline">Read Our Story</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

