import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { homeData } from "@/data/home";
import { Reveal } from "@/components/site/RevealOnScroll";

export function UpcomingProject() {
  const { upcomingProject } = homeData;

  return (
    <section className="relative overflow-hidden bg-foreground py-28 text-background lg:py-40">
      {/* Decorative grain/background elements */}
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none" />
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-gold-soft/5 blur-[120px] pointer-events-none" />

      <div className="container-x mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-center">
          
          {/* Text Content - Left Side */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 text-gold-soft mb-6">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.32em] font-medium flex items-center gap-1.5">
                  <Sparkles size={12} className="text-gold-soft" />
                  {upcomingProject.eyebrow}
                </span>
              </div>
              
              <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-tight kerning-tight text-white">
                {upcomingProject.title} <br />
                <em className="text-gold-soft italic font-light">{upcomingProject.titleItalic}</em>
              </h2>
              
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                {upcomingProject.location}
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-8 max-w-xl space-y-6 text-base leading-[1.8] text-white/80">
              <p>
                {upcomingProject.description1}
              </p>
              <p>
                {upcomingProject.description2}
              </p>
            </Reveal>

            {/* Quick Highlights Grid */}
            <Reveal delay={2} className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              {upcomingProject.highlights.map((h) => (
                <div key={h.title} className="border-l border-gold/40 pl-4">
                  <h4 className="font-display text-lg text-white font-medium">{h.title}</h4>
                  <p className="mt-1 text-xs text-white/60 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={3} className="mt-12">
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-foreground transition-all hover:bg-gold-soft hover:text-foreground"
                >
                  Register Interest
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-white transition-all hover:border-white hover:bg-white/5"
                >
                  Partner With Us
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Visual Showcase - Right Side */}
          <div className="lg:col-span-6 relative">
            <Reveal className="relative group/visual">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/10 scale-95 opacity-0 transition-all duration-700 group-hover/visual:scale-100 group-hover/visual:opacity-100 pointer-events-none" />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-stone shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]">
                <img
                  src={upcomingProject.coverImage}
                  alt={`${upcomingProject.title} ${upcomingProject.titleItalic} rendering`}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover/visual:scale-105"
                  loading="lazy"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">Architectural Rendering</span>
                    <h3 className="font-display text-2xl mt-1 text-white">{upcomingProject.title} {upcomingProject.titleItalic}</h3>
                  </div>
                  <span className="font-mono text-xs text-white/50">PRE-LAUNCH</span>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}

