import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { homeData } from "@/data/home";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";

export function Expertise() {
  const { expertise } = homeData;

  return (
    <section className="relative bg-stone-soft py-28 lg:py-36 overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="relative mx-auto w-[90%] lg:w-[85%] max-w-[1600px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <div className="eyebrow eyebrow-gold mb-4"><span className="rule" />Development Expertise</div>
            <ShlokaKicker className="mb-6">
              As the wheel turns, so does vision become foundation
            </ShlokaKicker>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
              Four disciplines.
              <br />
              <span className="font-heading italic text-foreground/60">One standard of craft.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-md font-body text-sm leading-relaxed text-muted-foreground">
              From signature residences to landmark commercial avenues, our portfolio is shaped by a singular pursuit of permanence.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {expertise.sectors.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <Link to={s.to} className="group relative block aspect-[4/3] overflow-hidden bg-white border border-gold/15 hover:border-gold/30 transition-all duration-300 carved-frame-hover shadow-sm">
                {/* Carved corner brackets */}
                <div className="carved-corner carved-corner-tl" />
                <div className="carved-corner carved-corner-tr" />
                <div className="carved-corner carved-corner-bl" />
                <div className="carved-corner carved-corner-br" />

                <img src={s.img} alt={s.title} className="img-zoom h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-white/10" />

                <div className="absolute inset-0 flex flex-col justify-between p-8 text-foreground">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-xl text-gold font-semibold">{s.num}</span>
                    <ArrowUpRight
                      size={22}
                      className="text-gold-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl tracking-wide sm:text-4xl text-foreground font-semibold">{s.title}</h3>
                    <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <div className="mt-5 h-px w-12 bg-gold/50 transition-all duration-500 group-hover:w-24 group-hover:bg-gold" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
