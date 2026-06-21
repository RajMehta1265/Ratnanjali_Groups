import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { homeData } from "@/data/home";

export function Hero() {
  const { hero } = homeData;

  return (
    <section className="relative min-h-screen lg:h-screen lg:min-h-[750px] w-full overflow-hidden bg-foreground text-background">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero.bgImage}
          alt="Ratnanjali landmark residential tower at golden hour"
          className="ken-burns h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/25 to-foreground/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,transparent,rgba(0,0,0,0.45))]" />
      </div>

      {/* Side rail */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-6">
          <div className="h-20 w-px bg-white/40" />
          <span className="rotate-180 text-[10px] uppercase tracking-[0.35em] text-white/70 [writing-mode:vertical-rl]">
            Est · MMVII · Ahmedabad
          </span>
          <div className="h-20 w-px bg-white/40" />
        </div>
      </div>

      {/* Content */}
      <div className="container-x relative z-10 mx-auto flex min-h-screen lg:h-full max-w-[1400px] flex-col justify-end pb-12 pt-36 lg:pb-16 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          {/* Main Hero Column - Left Side */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4 text-white/85 opacity-0 animate-[fade-in_1s_ease-out_.3s_forwards]">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">{hero.presentationTitle}</span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-light leading-[0.95] text-white kerning-tight opacity-0 animate-[fade-in_1.2s_ease-out_.5s_forwards]">
              {hero.mainTitle.lightText} <em className="not-italic text-gold-soft">{hero.mainTitle.italicText}</em>
              <br />
              {hero.mainTitle.boldText}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg opacity-0 animate-[fade-in_1.2s_ease-out_.8s_forwards]">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 opacity-0 animate-[fade-in_1.2s_ease-out_1.1s_forwards]">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-foreground transition-all hover:bg-gold-soft"
              >
                Explore Portfolio
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-white transition-all hover:bg-white hover:text-foreground"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>

          {/* Founding Leadership - Right Side */}
          <div className="lg:col-span-5 opacity-0 animate-[fade-in_1.4s_ease-out_1.3s_forwards] lg:mb-4">
            <div className="border border-white/10 bg-black/45 p-6 backdrop-blur-md space-y-5">
              <div className="flex items-center gap-3 text-gold-soft">
                <span className="h-px w-6 bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.28em] font-medium">{hero.founders.eyebrow}</span>
              </div>
              
              <div className="space-y-4">
                {hero.founders.list.map((f, i) => (
                  <div key={f.name}>
                    {i > 0 && <div className="h-px bg-white/10 my-4" />}
                    <div>
                      <div className="font-display text-lg text-white font-semibold flex justify-between items-baseline gap-2">
                        <span>{f.name}</span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-gold-soft shrink-0">{f.role}</span>
                      </div>
                      <p className="mt-1 text-[13px] text-white/70 leading-relaxed font-light">
                        {f.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 hidden grid-cols-4 gap-8 border-t border-white/20 pt-6 text-white/85 opacity-0 animate-[fade-in_1.4s_ease-out_1.4s_forwards] md:grid">
          {hero.stats.map((item) => (
            <div key={item.label}>
              <div className="font-display text-4xl text-gold-soft num">{item.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/70">{item.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 opacity-0 animate-[fade-in_1.6s_ease-out_2s_forwards]">
        <ArrowDown size={18} className="animate-bounce" />
      </div>
    </section>


  );
}
